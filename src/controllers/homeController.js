const getHomePage = (req, res) => {
  res.send("Hello World!");
};

const getNewPage = (req, res) => {
  res.send("New Page");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getNewPage, getSamplePage };
