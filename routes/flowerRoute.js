const express = require("express");
const { auth } = require("../util/authMiddleware");
const router = express.Router();
flowerController = require("../controllers/flowerController");
const { upload } = require("../util/multer");
const flowerModel = require("../models/flowerModel");

// 다육이 갱신
router.get("/:email", auth, flowerController.getFlowerControlloer);

//다육이 등록
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { name, kind, temperature, soilHumidity, humidity, email } = req.body;
    const image_url = req.file.path;
    await flowerModel.uploadFlowerModel(
      name,
      kind,
      temperature,
      humidity,
      soilHumidity,
      image_url,
      email
    );
    const data = await flowerModel.getFlowerModel(email);
    result = data.map((item) => {
      return {
        ...item,
        image_url: `${req.protocol}://${req.get("host")}/` + item.image_url,
      };
    });
    return res.status(200).json({ message: "등록 되었습니다.", result });
  } catch (error) {
    return res.status(500).json({ error: "등록에 실패했습니다." });
  }
});

//삭제
router.delete("/:flower_id", auth, flowerController.deleteFlowerControlloer);

module.exports = router;
