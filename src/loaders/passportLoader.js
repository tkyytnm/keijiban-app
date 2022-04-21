const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("../models/user.js");
const UserModelInstance = new UserModel();
const session = require("express-session");
const { secret } = require("../configs/config.js").session;
const bcrypt = require("bcrypt");

module.exports = (app) => {
  app.use(
    session({
      secret: secret,
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(passport.authenticate("session"));

  passport.use(
    new LocalStrategy(async (username, password, cb) => {
      try {
        const user = await UserModelInstance.findUserByEmail(username);

        if (!user) {
          return cb(null, false, {
            message: "EmailかPasswordが間違っています。",
          });
        }

        // bcrypt
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return cb(null, false, {
            message: "EmailかPasswordが間違っています。",
          });
        }

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    process.nextTick(() => {
      cb(null, { id: user.id, username: user.username });
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, user);
    });
  });
};
