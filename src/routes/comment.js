const express = require("express");
const router = express.Router();
const CommentService = require("../services/commentService.js");
const CommentServiceInstance = new CommentService();

router.get("/:thread_id", async (req, res, next) => {
  const thread_id = req.params.thread_id;
  try {
    const response = await CommentServiceInstance.listComment(
      thread_id
    );
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  // add comment
  const data = req.body;
  try {
    const response = await CommentServiceInstance.createComment(data);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  // delete comment by id
  const { id } = req.params;
  try {
    const response = await CommentServiceInstance.deleteComment(id);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
