const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Index - GET Posts
router.get("/", postController.index);

// GET new post
router.get("/new-post", postController.newPostGET);

// POST new post
router.post("/new-post", postController.newPostPOST);

module.exports = router;
