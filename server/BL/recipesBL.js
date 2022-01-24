const Recipe = require("./../Models/recipesModel");

const getRecipes = function () {
  return new Promise((resolve, reject) => {
    Recipe.find({}, function (err, recipes) {
      if (err) {
        reject(err);
      } else {
        resolve(recipes);
      }
    });
  });
};

const createRecipe = function (obj) {
  return new Promise((resolve, reject) => {
    const newRecipe = new Recipe({
      Name: obj.Name,
      Servings: obj.servings,
      Calories: obj.calories,
      Ingredients: obj.ingredients,
      Steps: obj.steps,
    });

    newRecipe.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("OK");
      }
    });
  });
};

module.exports = { createRecipe, getRecipes };
