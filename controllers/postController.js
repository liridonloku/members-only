const Post = require("../models/post");
const User = require("../models/user");

// Posts Index
exports.index = function (req, res) {
  if (!req.user) {
    res.redirect("/login");
  }
  res.render("index", { title: "Members Only" });
};

// New post GET
exports.newPostGET = function (req, res) {
  res.send("New post GET: Not implemented");
};

// New post POST
exports.newPostPOST = function (req, res) {
  res.send("New post POST: Not implemented.");
};
