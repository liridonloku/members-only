const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");
const { isLogedIn, isNotLogedIn } = require("../loginStatus");

// Index - GET Posts
router.get("/", isLogedIn, postController.index);

// GET new post
router.get("/new-post", isLogedIn, postController.newPostGET);

// POST new post
router.post("/new-post", isLogedIn, postController.newPostPOST);

// GET Sign up
router.get("/signup", isNotLogedIn, userController.signUpGET);

// POST Sign up
router.post("/signup", isNotLogedIn, userController.signUpPOST);

// GET Log In
router.get("/login", isNotLogedIn, userController.logInGET);

// POST Log In
router.post("/login", isNotLogedIn, userController.logInPOST);

// GET Membership form
router.get("/membership-form", isLogedIn, userController.membershipFormGET);

// POST Membership form
router.post("/membership-form", isLogedIn, userController.membershipFormPOST);

// GET Admin form
router.get("/admin-form", isLogedIn, userController.adminFormGET);

// POST Admin form
router.post("/admin-form", isLogedIn, userController.adminFormPOST);

// POST Log Out
router.post("/logout", isLogedIn, userController.logOutPost);

module.exports = router;
