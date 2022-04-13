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

  passportLoader(app);
  routesLoader(app);
  swaggerLoader(app);
};
