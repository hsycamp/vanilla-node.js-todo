const path = require("path");
const fs = require("fs");

const index = () => (req, res, next) => {
  if (!req.session) {
    res.writeHead(302, {
      Location: "/"
    });
    res.end();
  } else {
    const publicPath = path.join(__dirname, "../public");
    fs.readFile(`${publicPath}/index.html`, (err, data) => {
      if (err) throw err;

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  }
};

module.exports = { index };
