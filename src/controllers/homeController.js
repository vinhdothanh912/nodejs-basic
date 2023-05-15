const connection = require("../config/database");

const getHomePage = async (req, res) => {
  const [results, fields] = await connection.query("SELECT * from Users");

  return res.render("home.ejs");
};

const getNewPage = (req, res) => {
  res.send("New Page");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

const getCreateUserPage = (req, res) => {
  res.render("create-user.ejs");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name , city) VALUES(?, ?, ?)`,
    [email, name, city]
  );

  return res.send("Create user sucess");
};

module.exports = {
  getHomePage,
  getNewPage,
  getSamplePage,
  getCreateUserPage,
  postCreateUser,
};
