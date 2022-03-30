const UserModel = require("../models/user.js");
const userModelInstance = new UserModel();

module.exports = class AuthService {
  async createUser(data) {
    const { email, password } = data;
    try {
      const user = await userModelInstance.findUserByEmail(email);

      if (user) {
        throw new Error("The email is already exists.");
      }

      const res = await userModelInstance.insertUser(data);
      return res;
    } catch (err) {
      throw err;
    }
  }
};
