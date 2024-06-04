const { updateFlowerModel } = require("../models/flowerModel");
const { latestData } = require("../config/arduino");

const updateFlowerData = () => {
  const updateData = async () => {
    try {
      const flower_id = 175;
      const { temperature, humidity, soilHumidity } = latestData;
      console.log(temperature, humidity, soilHumidity);
      if (temperature !== null && humidity !== null && soilHumidity !== null) {
        const result = await updateFlowerModel(
          flower_id,
          temperature,
          humidity,
          soilHumidity
        );
        console.log("수정", result);
      } else {
        console.log("값이 변경되지 않았습니다.");
      }
    } catch (error) {
      console.error("실패했습니다.", error);
    }
  };

  updateData(); // 처음 한 번 즉시 실행

  setInterval(updateData, 18000); // 3분마다 실행
};

module.exports = updateFlowerData;
