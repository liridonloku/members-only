exports.isLogedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

exports.isNotLogedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
};
