const express = require("express");
const {
  getHomePage,
  getNewPage,
  getSamplePage,
  getCreateUserPage,
  postCreateUser,
  getUpdateUserPage,
  postUpdateUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/new", getNewPage);
router.get("/sample", getSamplePage);

router.get("/create-user", getCreateUserPage);
router.post("/create-user-success", postCreateUser);
router.get("/update-user/:userId", getUpdateUserPage);
router.post("/update-user-success", postUpdateUser);

module.exports = router;
