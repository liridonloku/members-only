const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  membershipStatus: { type: String, required: true },
});

// Virtual for url
UserSchema.virtual("url").get(function () {
  return "/members-only/users/" + this._id;
});

module.exports = mongoose.model("User", UserSchema);
