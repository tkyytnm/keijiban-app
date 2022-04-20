const express = require("express");
const router = express.Router();
const AuthService = require("../services/authService.js");
const authServiceInstance = new AuthService();
const passport = require("passport");
const createError = require("http-errors");

router.post("/register", async (req, res, next) => {
  // create new user
  const data = req.body;
  try {
    const response = await authServiceInstance.createUser(data);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }
});

router.get("/login", (req, res, next) => {
  try {
    next(createError(401, req.session.messages));
  } catch (err) {
    next(err);
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureMessage: true,
    failureRedirect: "/api/auth/login",
  }),
  (req, res) => {
    // login
    res.send(req.user);
  }
);

router.post("/logout", (req, res) => {
  req.logout();
  res.send({ message: "Logged out." });
});

module.exports = router;
