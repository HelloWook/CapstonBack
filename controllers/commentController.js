const commentService = require("../services/commentService");

const getCommentController = async (req, res) => {
  try {
    const page = parseInt(req.params.page) - 1;
    const postID = decodeURIComponent(req.params.postID);
    const data = await commentService.getCommentService(postID, page);
    const result = data.map((item) => ({ ...item }));
    return res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentCountController = async (req, res) => {
  try {
    const postID = decodeURIComponent(req.params.postID);
    const data = await commentService.getCommentCountService(postID);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCommentController = async (req, res) => {
  try {
    const commentID = req.params.commentID;
    await commentService.deleteCommentService(commentID);
    return res.status(200).json({ message: "삭제에 성공했습니다." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const writeCommentController = async (req, res) => {
  try {
    const { content, email, postID } = req.body;
    await commentService.writeCommentService(content, email, postID);
    res.status(200).json({ message: "글이 등록 되었습니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCommentController,
  getCommentCountController,
  deleteCommentController,
  writeCommentController,
};
