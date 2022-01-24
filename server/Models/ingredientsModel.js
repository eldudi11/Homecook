const mongoose = require("mongoose");

let ingredientsSchema = new mongoose.Schema({
  Name: String,
});

module.exports = mongoose.model("ingredients", ingredientsSchema);
