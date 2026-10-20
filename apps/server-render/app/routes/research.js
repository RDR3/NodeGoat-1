const ResearchDAO = require("../data/research-dao").ResearchDAO;
const needle = require("needle");
const {
    environmentalScripts
} = require("../../config/config");

function ResearchHandler(db) {
    "use strict";

    const researchDAO = new ResearchDAO(db);

    this.displayResearch = (req, res) => {

        if (req.query.symbol) {
            const url = req.query.url + req.query.symbol;
<<<<<<< HEAD:app/routes/research.js
            return needle.get(url, (error, newResponse, body) => {
                if (!error && newResponse.statusCode === 200) {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                }
                res.write("<h1>The following is the stock information you requested.</h1>\n\n");
                res.write("\n\n");
                if (body) {
                    res.write(body);
                }
=======
            return needle.get(url, (error, newResponse) => {
                if (!error && newResponse.statusCode == 200)
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                res.write('<h1>The following is the stock information you requested.</h1>\n\n');
                res.write('\n\n');
                res.write(newResponse.body);
>>>>>>> feature/187:apps/server-render/app/routes/research.js
                return res.end();
            });
        }

<<<<<<< HEAD:app/routes/research.js
        return res.render("research", {
            environmentalScripts
        });
=======
        return res.render("research");
>>>>>>> feature/187:apps/server-render/app/routes/research.js
    };

}

module.exports = ResearchHandler;
