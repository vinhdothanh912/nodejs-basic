const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * from Users");

  return results;
};

const createNewUser = async (payload) => {
  const { email, name, city } = payload;

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name , city) VALUES(?, ?, ?)`,
    [email, name, city]
  );
};

const getUserById = async (userId) => {
  const [results, fields] = await connection.query(
    `SELECT * from Users where id = ?`,
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

module.exports = { getAllUsers, createNewUser, getUserById };
