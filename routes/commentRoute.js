const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// 댓글 조회
router.get("/post/:postID/:page", commentController.getCommentController);

// 총 댓글 수
router.get("/count/:postID", commentController.getCommentCountController);

// 댓글삭제
router.delete("/:commentID", commentController.deleteCommentController);

// 댓글 작성
router.post("/", commentController.writeCommentController);
module.exports = router;
