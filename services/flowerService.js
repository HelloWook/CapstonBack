const flowerModel = require("../models/flowerModel");

const getFlowerService = async (email, host, protocol) => {
  try {
    const data = await flowerModel.getFlowerModel(email);
    const result = data.map((item) => {
      return {
        ...item,
        image_url: `${protocol}://${host}/` + item.image_url,
      };
    });
    return result;
  } catch (error) {
    throw new Error("정보를 가져오는 중에 문제가 발생했습니다.");
  }
};

const deleteFlowerService = async (flowerId, email, host, protocol) => {
  try {
    await flowerModel.deleteFlowerModel(flowerId);
    const data = await flowerModel.getFlowerModel(email);
    result = data.map((item) => {
      return {
        ...item,
        image_url: `${protocol}://${host}/` + item.image_url,
      };
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("삭제에 실패했습니다");
  }
};

module.exports = {
  getFlowerService,
  deleteFlowerService,
};
