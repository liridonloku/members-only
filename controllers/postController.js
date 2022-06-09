const Post = require("../models/post");
const User = require("../models/user");
const { body, validationResult } = require("express-validator");

// Posts Index
exports.index = async function (req, res) {
  const posts = await Post.find({}).populate("user").sort({ date: "asc" });
  res.render("index", { title: "Members Only", posts: posts });
};

// New post GET
exports.newPostGET = function (req, res) {
  res.render("newPost");
};

// New post POST
exports.newPostPOST = [
  // Validate and sanitize
  body("title", "Title cannot be empty").trim().isLength({ min: 1 }).escape(),
  body("content", "Content cannot be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  // Handle request
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("newPost", {
        title: req.body.title,
        content: req.body.content,
        titleError: errors
          .array({ onlyFirstError: true })
          .find((error) => error.param === "title"),
        contentError: errors
          .array({ onlyFirstError: true })
          .find((error) => error.param === "content"),
      });
    }
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      date: new Date(),
      user: req.user._id.toString(),
    });
    post.save(function (err) {
      if (err) return next(err);
      res.redirect("/");
    });
  },
];

// Delete post GET - redirects to index

exports.deletePostGET = function (req, res, next) {
  res.redirect("/");
};

// Delete post POST
exports.deletePostPOST = function (req, res, next) {
  if (req.user.membershipStatus !== "admin") {
    return res.redirect("/");
  }
  Post.findByIdAndDelete(req.params.id, {}, (err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
