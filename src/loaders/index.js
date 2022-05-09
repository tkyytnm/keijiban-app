const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passportLoader = require("./passportLoader.js");
const routesLoader = require("./routesLoader.js");
const swaggerLoader = require("./swaggerLoader.js");

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.set("trust proxy", 1);

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
