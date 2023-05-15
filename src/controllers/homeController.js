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

const postCreateUser = (req, res) => {
  const { email, name, city } = req.body;

  connection.query(
    `INSERT INTO 
    Users (email, name , city) 
    VALUES(?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("Create user sussceed");
      // res.send(JSON.stringify([email, name, city]));
    }
  );

  // res.send("Create user page");
};

module.exports = { getHomePage, getNewPage, getSamplePage, postCreateUser };
