const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getNewPage = (req, res) => {
  res.send("New Page");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getNewPage, getSamplePage };
