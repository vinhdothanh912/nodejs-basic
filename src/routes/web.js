const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/news", (req, res) => {
  res.send("News");
});

router.get("/sample", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
