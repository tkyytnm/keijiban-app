const express = require("express");
const router = express.Router();
const AuthService = require("../services/authService.js");
const authServiceInstance = new AuthService();

router.post("/", async (req, res, next) => {
  // create new user
  const data = req.body;
  try {
    const response = await authServiceInstance.createUser(data);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }
});




module.exports = router;
