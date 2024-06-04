const postModel = require("../models/postModel");

const getPostsService = async () => {
  try {
    const data = await postModel.getPostModel();
    const result = data.map((item) => ({ ...item }));
    return result;
  } catch (error) {
    throw new Error("게시글 불러오기에 실패했습니다." + error);
  }
};

const getPostService = async (postId) => {
  try {
    const data = await postModel.getDetailPostModel(postId);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`${postId}게시글 불러오기에 실패했습니다.` + error);
  }
};

const writePostService = async (Title, content, email, image_url) => {
  try {
    await postModel.writePostModel(Title, content, email, image_url);
  } catch (error) {
    throw new Error("게시글 등록에 실패했습니다.");
  }
};

const updatePostService = async (postId, Title, content, email) => {
  try {
    await postModel.updatePostModel(postId, Title, content, email);
  } catch (error) {
    throw new Error("게시글 수정에 실패했습니다.");
  }
};

const deletePostService = async (postId) => {
  try {
    await postModel.deletePostModel(postId);
  } catch (error) {
    throw new Error("게시글 삭제에 실패했습니다.");
  }
};

module.exports = {
  getPostsService,
  getPostService,
  writePostService,
  updatePostService,
  deletePostService,
};
