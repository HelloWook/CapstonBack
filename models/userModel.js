const connection = require("../config/mysql");

const loginUserModel = (email, password) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length === 0) {
            reject("존재하지 않는 이용자입니다.");
          } else {
            const user = results[0];
            resolve(user);
          }
        }
      }
    );
  });
};

const joinUserModel = (email, password, nickname) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO users (email, password, nickname, joindate) VALUES (?, ?, ?, NOW())",
      [email, password, nickname],
      (error, results) => {
        if (error) {
          reject("회원가입에 실패했습니다.");
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  joinUserModel,
  loginUserModel,
};
