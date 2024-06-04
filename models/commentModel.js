const connection = require("../config/mysql");

// 댓글 작성
const writCommentModel = (content, email, postID) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO Comments (content, email, postID, CreatedAT) VALUES (?, ?, ?, NOW())",
      [content, email, postID],
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

// 댓글 불러오기
const GetCommentModel = async (postID, page) => {
  const offset = page * 6;
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM Comments WHERE postID = ? LIMIT 6 OFFSET ?",
      [postID, offset],
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

// 총 댓글 수 불러오기
const GetCommentNumberModel = async (postID) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS commentCount FROM Comments WHERE postID = ?",
      [postID],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].commentCount);
        }
      }
    );
  });
};

// 댓글 삭제
const deletCommentModel = (CommentID) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM Comments WHERE CommentID = ?",
      [CommentID],
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
  GetCommentModel,
  GetCommentNumberModel,
  writCommentModel,
  deletCommentModel,
};
