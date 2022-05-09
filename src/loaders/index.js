const expressLoader = require("./expressLoader");
const passportLoader = require("./passportLoader.js");
const routesLoader = require("./routesLoader.js");
const swaggerLoader = require("./swaggerLoader.js");
const path = require("path");

module.exports = (app) => {
  expressLoader(app);
  passportLoader(app);
  routesLoader(app);
  swaggerLoader(app);

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    if (!err.statusCode) {
      res.send({ message: "Something broken!" });
    }
    res.send(err);
  });
};
