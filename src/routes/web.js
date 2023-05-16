const express = require("express");
const {
  getHomePage,
  getNewPage,
  getSamplePage,
  getCreateUserPage,
  postCreateUser,
  getUpdateUserPage,
  postUpdateUser,
  getDeleteUserPage,
  postDeleteUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/new", getNewPage);
router.get("/sample", getSamplePage);

// User routers
router.get("/create-user", getCreateUserPage);
router.post("/create-user", postCreateUser);

router.get("/update-user/:userId", getUpdateUserPage);
router.post("/update-user", postUpdateUser);

router.get("/delete-user/:userId", getDeleteUserPage);
router.post("/delete-user", postDeleteUser);

module.exports = router;
