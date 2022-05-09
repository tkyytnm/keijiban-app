const expressLoader = require("./expressLoader");
const passportLoader = require("./passportLoader.js");
const routesLoader = require("./routesLoader.js");
const swaggerLoader = require("./swaggerLoader.js");

module.exports = (app) => {
  expressLoader(app);
  passportLoader(app);
  routesLoader(app);
  swaggerLoader(app);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    if (!err.statusCode) {
      res.send({ message: "Something broken!" });
    }
    res.send(err);
  });
};
