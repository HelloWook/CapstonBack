const { com } = require("../config/arduino");

const runMotorService = (id) => {
  try {
    com.write(id + "\n");
  } catch (error) {
    console.log(error);
    throw new Error("동작에 실패했습니다.");
  }
};

module.exports = {
  runMotorService,
};
