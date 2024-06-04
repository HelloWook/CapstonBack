const userModel = require("../models/userModel");

const joinUserService = async (email, password, nickname) => {
  try {
    return await userModel.joinUserModel(email, password, nickname);
  } catch (error) {
    throw new Error(error);
  }
};

const loginUserService = async (email, password) => {
  try {
    return await userModel.loginUserModel(email, password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { joinUserService, loginUserService };
