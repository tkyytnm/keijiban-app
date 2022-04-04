const express = require("express");
const router = express.Router();
const UserService = require("../services/userService.js");
const UserServiceInstance = new UserService();

router.get("/", async (req, res, next) => {
  // display users list
  res.send("User List");
});

router.put("/:id", async (req, res, next) => {
  // edit user data by id
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
