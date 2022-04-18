const mongoose = require("mongoose");
var random = require("mongoose-simple-random");

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
  Image: [String],
  Ingredients: [
    {
      name: String,
      amount: String,
    },
  ],
  Steps: [String],
});
recipeSchema.plugin(random);

module.exports = mongoose.model("recipes", recipeSchema);
