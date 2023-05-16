const {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUser,
} = require("../services/CRUDservices");

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

  await createNewUser(payload);

  return res.redirect("/");
};

const getUpdateUserPage = async (req, res) => {
  const user = await getUserById(req.params.userId);

  return res.render("update-user.ejs", { user });
};

const postUpdateUser = async (req, res) => {
  const payload = req.body;

  await updateUser(payload);

  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getNewPage,
  getSamplePage,
  getCreateUserPage,
  postCreateUser,
  getUpdateUserPage,
  postUpdateUser,
};
