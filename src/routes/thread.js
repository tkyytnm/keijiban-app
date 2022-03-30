const express = require("express");
const router = express.Router();
const ThreadService = require("../services/threadService.js");
const threadServiceInstance = new ThreadService();

router.get("/", async (req, res, next) => {
  try {
    const response = await threadServiceInstance.listThreads();
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;
  try {
    const response = await threadServiceInstance.createThread(data);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  // edit thread by id
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await threadServiceInstance.dropThread(id);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
