var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

// Index
router.get("/", function (req, res, next) {
  res.send("Error 404: Page not found!");
});

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
