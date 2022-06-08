const res = require("express/lib/response");
const Post = require("../models/post");
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const req = require("express/lib/request");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const async = require("async");

// Sign up GET
exports.signUpGET = function (req, res) {
  res.render("signup", {});
};

// Sign up POST
exports.signUpPOST = [
  // Validate and sanitize
  body("firstName", "First name cannot be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("lastName", "Last name cannot be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("email", "Email is invalid").normalizeEmail().isEmail(),
  body("password", "Password must be at least 6 characters long")
    .isLength({ min: 6 })
    .escape(),
  body("confirmPassword", "Passwords don't match").custom(
    (value, { req }) => value === req.body.password
  ),
  // Handle request
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("signup", {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordError: errors
          .array({ onlyFirstError: true })
          .find((error) => error.param === "password"),
        confirmPasswordError: errors
          .array({ onlyFirstError: true })
          .find((error) => error.param === "confirmPassword"),
      });
    }
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) return next(err);
      new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        membershipStatus: "user",
      })
        .save()
        .then((savedUser) => {
          const user = {
            id: savedUser._id,
            email: savedUser.email,
          };
          req.login(user, (err) => {
            if (err) return next(err);
            res.redirect("/");
          });
        });
    });
  },
];

// Login GET
exports.logInGET = function (req, res) {
  res.render("login", {});
};

// Login POST
exports.logInPOST = [
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res, next) => {
    res.redirect("/");
  },
];

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
