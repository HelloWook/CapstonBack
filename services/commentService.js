const commentModel = require("../models/commentModel");

const getCommentService = async (postID, page) => {
  try {
    data = await commentModel.GetCommentModel(postID, page);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("댓글을 가져오는 중에 문제가 발생했습니다.");
  }
};

const getCommentCountService = async (postID) => {
  try {
    const data = await commentModel.GetCommentNumberModel(postID);
    return data;
  } catch (error) {
    throw new Error("총댓글수를 가져오는 중에 문제가 발생했습니다.");
  }
};

const deleteCommentService = async (commentID) => {
  try {
    const data = await commentModel.deletCommentModel(commentID);
    return data;
  } catch (error) {
    throw new Error("댓글을 삭제하던 중 문제가 발생했습니다.");
  }
};

const writeCommentService = async (content, email, postID) => {
  try {
    await commentModel.writCommentModel(content, email, postID);
  } catch (error) {
    throw new Error("댓글 작성에 실패했습니다.");
  }
};

module.exports = {
  getCommentService,
  getCommentCountService,
  deleteCommentService,
  writeCommentService,
};
