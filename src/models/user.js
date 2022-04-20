const db = require("../db/index.js");

module.exports = class User {
  async insertUser(data) {
    const { username, email, password } = data;
    const timestamp = new Date();
    const text = `INSERT INTO users(username, email, password, created_at) VALUES($1, $2, $3, $4) RETURNING *`;
    const values = [username, email, password, timestamp];
    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async updateUserProfile(data) {
    const { id, username, email } = data;
    const text = `UPDATE users SET username=$2, email=$3 WHERE id=$1 RETURNING *`;
    const values = [id, username, email];
    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async updateUserPassword(data) {
    const { id, hash } = data;
    const text = `UPDATE users SET password=$2 WHERE id=$1 RETURNING *`;
    const values = [id, hash];
    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async deleteUser(id) {
    const text = `DELETE FROM users WHERE id=$1 RETURNING *`;
    const values = [id];
    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async findUserById(id) {
    const text = `SELECT * FROM users WHERE id=$1`;
    const values = [id];
    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async findUserByEmail(email) {
    const text = `SELECT * FROM users WHERE email=$1`;
    const values = [email];
    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
};
