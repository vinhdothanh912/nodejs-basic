const express = require("express");
const {
  getHomePage,
  getNewPage,
  getSamplePage,
  postCreateUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/new", getNewPage);
router.get("/sample", getSamplePage);

router.post("/create-user", postCreateUser);

module.exports = router;
