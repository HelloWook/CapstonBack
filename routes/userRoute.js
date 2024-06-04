const express = require("express");
const router = express.Router();
const uesrController = require("../controllers/uesrController");
const { auth } = require("../util/authMiddleware");
const { upload } = require("../util/multer");

// 회원가입
router.post("/join", uesrController.joinController);

// 로그인
router.post("/login", uesrController.loginController);

//페이로드
router.get("/payload", auth, (req, res) => {
  const nickname = req.decoded.nickname;
  const joindate = req.decoded.joindate;
  const email = req.decoded.email;
  return res.status(200).json({
    code: 200,
    message: "토큰은 정상입니다.",
    data: {
      email: email,
      nickname: nickname,
      joindate: joindate,
    },
  });
});

router.post("/img", upload.single("img"), (req, res) => {
  console.log("전달받은 파일", req.file);
  console.log("저장된 파일의 이름", req.file.filename);
  const IMG_URL = `http://localhost:8080/uploads/${req.file.filename}`;
  console.log(IMG_URL);
  res.json({ url: IMG_URL });
});

module.exports = router;
