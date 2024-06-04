const connection = require("../config/mysql");

// 게시글 상세 불러오기
const getDetailPostModel = (postID) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM Posts WHERE postID = ?",
      [postID],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      }
    );
  });
};

// 게시글 불러오기
const getPostModel = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Posts", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// 게시글 작성
const writePostModel = (Title, content, email, image_url) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO Posts (Title, Content, email, CreatedAT, image_url) VALUES (?, ?, ?, NOW(),?)",
      [Title, content, email, image_url],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

// 게시글 수정
const updatePostModel = (postID, Title, content, email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE Posts SET Title = ?, content = ?, email = ?, createdAT = NOW() WHERE postID = ?",
      [Title, content, email, postID],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

// 게시글 삭제
const deletePostModel = (postID) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM Posts WHERE postID = ?",
      [postID],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  getPostModel,
  writePostModel,
  updatePostModel,
  deletePostModel,
  getDetailPostModel,
};
