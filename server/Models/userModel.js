const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Name: String,
  Recipes: [],
});

module.exports = mongoose.model("Users", userSchema);
