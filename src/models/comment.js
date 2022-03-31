const db = require("../db/index.js");

module.exports = class Comment {
  async insertComment(data) {
    const { body, thread_id, user_id, comment_num } = data;
    const timestamp = new Date();

    try {
      const text = `INSERT INTO comments(body, thread_id, user_id, comment_num, created_at) VALUES($1, $2, $3, $4, $5) RETURNING *`;
      const values = [body, thread_id, user_id, comment_num, timestamp];

      const res = await db.query(text, values);

      if (res.rows?.length) {
        return res.rows[0];
      }

      return null;
    } catch (err) {
      throw err;
    }
  }

  async getCommentsByThreadId(thread_id) {
    try {
      const text = `SELECT * FROM comments WHERE thread_id=$1`;
      const values = [thread_id];

      const res = await db.query(text, values);

      if (res.rows?.length) {
        return res.rows;
      }

      return {};
    } catch (err) {
      throw err;
    }
  }

  async deleteComment(id) {
    try {
      const text = `DELETE FROM comments WHERE id=$1 RETUNING *`;
      const values = [id];

      const res = await db.query(text, values);

      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async getLatestCommentNum(thread_id) {
    try {
      const text = `SELECT comment_num FROM comments WHERE thread_id=$1 ORDER BY comment_num DESC LIMIT 1`;
      const values = [thread_id];

      const res = await db.query(text, values);

      if (res.rows?.length) {
        return res.rows[0].comment_num;
      }

      return null;
    } catch (err) {
      throw err;
    }
  }
};
