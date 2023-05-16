const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * from Users");

  return results;
};

const createNewUser = async (payload) => {
  const { email, name, city } = payload;

  await connection.query(
    `
    INSERT INTO Users (email, name , city) 
    VALUES(?, ?, ?)
    `,
    [email, name, city]
  );
};

const getUserById = async (userId) => {
  const [results, fields] = await connection.query(
    `
    SELECT * from Users 
    WHERE id = ?
    `,
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

const updateUser = async (payload) => {
  const { userId: id, email, name, city } = payload;

  await connection.query(
    `
    UPDATE Users 
    SET email = ?, name = ?, city = ?
    WHERE id = ?
    `,
    [email, name, city, id]
  );
};

const deleteUserById = async (userId) => {
  await connection.query(
    `
    DELETE from Users 
    WHERE id = ?
    `,
    [userId]
  );
};

module.exports = {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUser,
  deleteUserById,
};
