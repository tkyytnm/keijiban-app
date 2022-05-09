const CommentModel = require("../models/comment.js");
const CommentModelInstance = new CommentModel();

module.exports = class CommentService {
  async createComment(data) {
    const { thread_id } = data;
    try {
      let comment_num = await CommentModelInstance.getLatestCommentNum(
        thread_id
      );

      if (comment_num === null) {
        comment_num = 1;
      } else {
        comment_num++;
      }

      const res = await CommentModelInstance.insertComment({
        ...data,
        comment_num,
      });
      return res;
    } catch (err) {
      throw err;
    }
  }

  async listComment(thread_id) {
    try {
      const res = await CommentModelInstance.getCommentsByThreadId(thread_id);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async deleteComment(id) {
    try {
      const res = await CommentModelInstance.deleteComment(id);
      return res;
    } catch (err) {
      throw err;
    }
  }
};
