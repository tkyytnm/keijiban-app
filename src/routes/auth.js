const express = require("express");
const router = express.Router();
const AuthService = require("../services/authService.js");
const authServiceInstance = new AuthService();
const passport = require("passport");

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

router.post(
  "/login",
  passport.authenticate("local", { failureMessage: true }),
  (req, res, next) => {
    // login
    res.send(req.user);
  }
);

module.exports = router;
