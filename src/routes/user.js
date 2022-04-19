const express = require("express");
const router = express.Router();
const UserService = require("../services/userService.js");
const UserServiceInstance = new UserService();

router.get("/", async (req, res, next) => {
  // get users list
  res.send("User List");
});

router.get("/:id", async (req, res, next) => {
  // get a user by ID
  const { id } = req.params;
  try {
    const response = await UserServiceInstance.findUserById(id);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.put("/profile", async (req, res, next) => {
  // edit profile(username, email) by id
  const data = req.body;
  try {
    const response = await UserServiceInstance.updateProfile(data);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.put("/password", async (req, res, next) => {
  // edit password by id
  const data = req.body;
  try {
    const response = await UserServiceInstance.updatePassword(data);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  // delete user data by id
  const { id } = req.params;
  try {
    const response = await UserServiceInstance.deleteUser(id);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
