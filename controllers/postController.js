const Post = require("../models/post");
const User = require("../models/user");

// Posts Index
exports.index = async function (req, res) {
  const posts = await Post.find({}).populate("user").sort({ date: "asc" });
  res.render("index", { title: "Members Only", posts: posts });
};

// New post GET
exports.newPostGET = function (req, res) {
  res.send("New post GET: Not implemented");
};

// New post POST
exports.newPostPOST = function (req, res) {
  res.send("New post POST: Not implemented.");
};
