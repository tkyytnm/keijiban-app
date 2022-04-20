const UserModel = require("../models/user.js");
const userModelInstance = new UserModel();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const createError = require("http-errors");

module.exports = class AuthService {
  async createUser(data) {
    const { email, password } = data;
    try {
      const user = await userModelInstance.findUserByEmail(email);

      if (user) {
        throw createError(401, "This email already exists.");
      }

      // bcrypt
      const hash = await bcrypt.hash(password, saltRounds);

      const res = await userModelInstance.insertUser({
        ...data,
        password: hash,
      });

      return res;
    } catch (err) {
      throw err;
    }
  }
};
