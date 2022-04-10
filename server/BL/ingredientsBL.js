const Ingredient = require("../Models/ingredientsModel");

const getIngredients = function () {
  return new Promise((resolve, reject) => {
    Ingredient.find({}, function (err, ingredients) {
      if (err) {
        reject(err);
      } else {
        resolve(ingredients);
      }
    });
  });
};

const getIngredientsByString = function (str) {
  return new Promise((resolve, reject) => {
    Ingredient.find(
      { Name: { $regex: str, $options: "i" } },
      function (err, ingredients) {
        if (err) {
          reject(err);
        } else {
          resolve(ingredients);
        }
      }
    );
  });
};

const createIngredients = function (obj) {
  return new Promise((resolve, reject) => {
    const newIngredients = new Ingredients({
      Name: obj.name,
    });

    newIngredients.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("OK");
      }
    });
  });
};

module.exports = { createIngredients, getIngredients, getIngredientsByString };
