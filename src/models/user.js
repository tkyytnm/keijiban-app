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

  async updateUser(data) {
    const { id, username, email, password } = data;
    const text = `UPDATE users SET username=$2, email=$3, password=$4 WHERE id=$1`;
    const values = [id, username, email, password];
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
    const text = `DELETE FROM users WHERE id=$1`;
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