const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");

// Index - GET Posts
router.get("/", postController.index);

// GET new post
router.get("/new-post", postController.newPostGET);

// POST new post
router.post("/new-post", postController.newPostPOST);

// GET Sign up
router.get("/signup", userController.signUpGET);

// POST Sign up
router.post("/signup", userController.signUpPOST);

// GET Log In
router.get("/login", userController.logInGET);

// POST Log In
router.post("/login", userController.logInPOST);

// GET Membership form
router.get("/membership-form", userController.membershipFormGET);

// POST Membership form
router.post("/membership-form", userController.membershipFormPOST);

// GET Admin form
router.get("/admin-form", userController.adminFormGET);

// POST Admin form
router.post("/admin-form", userController.adminFormPOST);

module.exports = router;
