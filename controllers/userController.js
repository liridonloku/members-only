const res = require("express/lib/response");
const Post = require("../models/post");
const User = require("../models/user");

// Sign up GET
exports.signUpGET = function (req, res) {
  res.render("signup", {});
};

// Sign up POST
exports.signUpPOST = function (req, res) {
  res.send("Sign Up POST: Not implemented!");
};

// Login GET
exports.logInGET = function (req, res) {
  res.send("Log In GET: Not implemented!");
};

// Login POST
exports.logInPOST = function (req, res) {
  res.send("Log In POST: Not implemented!");
};

// Memebership form GET
exports.membershipFormGET = function (req, res) {
  res.send("Membership form GET: Not implemented!");
};

// Membership form POST
exports.membershipFormPOST = function (req, res) {
  res.send("Membership form POST: Not implemented!");
};

// Admin form GET
exports.adminFormGET = function (req, res) {
  res.send("Admin form GET: Not implemented!");
};

// Admin form POST
exports.adminFormPOST = function (req, res) {
  res.send("Admin form POST: Not implemented!");
};
