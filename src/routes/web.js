const express = require("express");
const {
  getHomePage,
  getNewPage,
  getSamplePage,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/new", getNewPage);
router.get("/sample", getSamplePage);

module.exports = router;
