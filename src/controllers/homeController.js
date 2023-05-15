const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];

  connection.query("SELECT * FROM Users u", function (err, results, fields) {
    users = results;
    console.log("@@user: ", users);
    res.send(JSON.stringify(results));
  });
};

const getNewPage = (req, res) => {
  res.send("New Page");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getNewPage, getSamplePage };
