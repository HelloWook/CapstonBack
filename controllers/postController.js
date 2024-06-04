const postService = require("../services/postService");

const getPostsController = async (req, res) => {
  try {
    const result = await postService.getPostsService();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostController = async (req, res) => {
  try {
    const postId = req.params.postid;
    const result = await postService.getPostService(postId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const writePostController = async (req, res) => {
  try {
    const { Title, content, email, image_url } = req.body;
    await postService.writePostService(Title, content, email, image_url);
    res.status(200).json({ message: "게시글이 등록 되었습니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePostController = async (req, res) => {
  try {
    const { Title, content, email } = req.body;
    const postId = req.params.postid;
    await postService.updatePostService(postId, Title, content, email);
    res.status(200).json({ message: "게시글이 수정 되었습니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePostController = async (req, res) => {
  try {
    const postId = req.params.postid;
    await postService.deletePostService(postId);
    res.status(200).json({ message: "게시글이 삭제되었습니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPostsController,
  getPostController,
  writePostController,
  updatePostController,
  deletePostController,
};
