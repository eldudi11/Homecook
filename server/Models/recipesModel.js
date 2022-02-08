const mongoose = require("mongoose");

let recipeSchema = new mongoose.Schema({
  Name: String,
  Servings: String,
  Calories: String,
  Duration: [
    {
      prep: String,
      cook: String,
      total: String,
    },
  ],
  Filter: [String],
  Ingredients: [
    {
      name: String,
      amount: String,
    },
  ],
  Steps: [String],
});

module.exports = mongoose.model("recipes", recipeSchema);
