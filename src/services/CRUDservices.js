const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * from Users");

  return results;
};

const createNewuser = async (payload) => {
  const { email, name, city } = payload;

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name , city) VALUES(?, ?, ?)`,
    [email, name, city]
  );
};

module.exports = { getAllUsers, createNewuser };
