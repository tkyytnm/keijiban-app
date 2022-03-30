const morgan = require("morgan");
const bodyParser = require("body-parser");
const passportLoader = require("./passportLoader.js");


module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  passportLoader(app);
};
