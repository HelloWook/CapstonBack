const ardunioService = require("../services/ardunioService");

const runMotorController = (req, res) => {
  try {
    const id = req.params.id;
    ardunioService.runMotorService(id);
    return res.status(200).json({ message: "모터가 동작합니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  runMotorController,
};
