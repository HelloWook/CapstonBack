const connection = require("../config/mysql");

// 다육이 등록
const uploadFlowerModel = (
  name,
  kind,
  temperature,
  humidity,
  soilHumidity,
  image_url,
  email
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO flower (name, kind, temperature, humidity, soilHumidity, joindate, image_url, email) VALUES (?, ?, ?, ?, ?, NOW(), ?, ?)",
      [name, kind, temperature, humidity, soilHumidity, image_url, email],
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

// 다육이 불러오기
const getFlowerModel = async (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM flower WHERE email = ?",
      [email],
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

// 다육이 수정
const updateFlowerModel = async (
  flower_id,
  temperature,
  humidity,
  soilHumidity
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE flower SET temperature = ?, humidity = ?, soilHumidity = ? WHERE flower_id = ?",
      [temperature, humidity, soilHumidity, flower_id],
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

// 다육이 삭제
const deleteFlowerModel = (flower_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM flower WHERE flower_id = ?",
      [flower_id],
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
  deleteFlowerModel,
  uploadFlowerModel,
  updateFlowerModel,
  getFlowerModel,
};
