const userService = require("../services/userService");
const jwtToken = require("../util/jwtToken");

const joinController = async (req, res) => {
  try {
    const { email, password, nickname } = req.body;
    const result = await userService.joinUserService(email, password, nickname);
    res.status(201).json({ message: "회원가입 되셨습니다.", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUserService(email, password);
    const { nickname, joindate } = result;
    const token = jwtToken.generateToken({ email, nickname, joindate });
    res.status(200).json({
      code: 200,
      email: email,
      nickname: nickname,
      message: `환영합니다. ${nickname}님`,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  joinController,
  loginController,
};
