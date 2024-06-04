const flowerService = require("../services/flowerService");

const getFlowerControlloer = async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const host = req.get("host");
    const protocol = req.protocol;
    const result = await flowerService.getFlowerService(email, host, protocol);
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFlowerControlloer = async (req, res) => {
  try {
    const flowerId = req.params.flower_id;
    const email = req.headers.email;
    const host = req.get("host");
    const protocol = req.protocol;
    result = await flowerService.deleteFlowerService(
      flowerId,
      email,
      host,
      protocol
    );
    res.status(200).json({ message: "삭제에 성공했습니다.", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFlowerControlloer,
  deleteFlowerControlloer,
};
