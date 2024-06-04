const express = require("express");
const router = express.Router();
const { auth } = require("../util/authMiddleware");
const postController = require("../controllers/postController");

router.get("/posts", postController.getPostsController);
router.get("/post/:postid", postController.getPostController);
router.post("/post", postController.writePostController);
router.put("/post/:postid", auth, postController.updatePostController);
router.delete("/post/:postid", auth, postController.deletePostController);

module.exports = router;
