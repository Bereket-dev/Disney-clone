const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  username: String,
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
