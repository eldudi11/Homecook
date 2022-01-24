const mongoose = require("mongoose");

let recipeSchema = new mongoose.Schema({
  Name: String,
  Servings: String,
  Calories: String,
  Ingredients: [
    {
      name: String,
      amount: String,
    },
  ],
  Steps: [String],
});

module.exports = mongoose.model("recipes", recipeSchema);
