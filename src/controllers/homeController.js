// const connection = require("../config/database");
const { getAllUsers, createNewuser } = require("../services/CRUDservices");

const getHomePage = async (req, res) => {
  const results = await getAllUsers();

  return res.render("home.ejs", { listUsers: results });
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
  const payload = req.body;

  await createNewuser(payload);

  return res.send("Create user sucess");
};

const getUpdateUserPage = async (req, res) => {
  const params = req.params;
  console.log(params);

  return res.render("update-user.ejs");
};

module.exports = {
  getHomePage,
  getNewPage,
  getSamplePage,
  getCreateUserPage,
  postCreateUser,
  getUpdateUserPage,
};
