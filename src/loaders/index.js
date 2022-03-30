const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require('./passport.js');

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  passport(app);
};
