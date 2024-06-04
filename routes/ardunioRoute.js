const express = require("express");
const router = express.Router();
const ardunioController = require("../controllers/arduninoController");
// 모터동작
router.get("/:id", ardunioController.runMotorController);
module.exports = router;
