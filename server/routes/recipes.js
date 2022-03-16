var express = require("express");
var router = express.Router();
const usersBL = require("../BL/usersBL");
const ingredientsBL = require("./../BL/ingredientsBL");
const recipesBL = require("../BL/recipesBL");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let data = await recipesBL.getRecipes();
  userIng = req.query[0];
  let matchCount = 0,
    missing;
  console.log(data[4].Ingredients);
  releventRecipes = [];
  if (req.query !== {}) {
    data.forEach((recipe) => {
      recipe.Ingredients.forEach((i) => {
        let found = userIng.find(
          (x) => x.toUpperCase() === i.name.toUpperCase()
        );
        if (found !== undefined) matchCount++;
      });
      console.log("this recipe have " + matchCount + "matches");
      missing = recipe.Ingredients.length - matchCount;
      releventRecipes.push({ missing: missing, recipe: recipe });
      matchCount = 0;
    });
  }
  //sort by missing ingredients
  releventRecipes.sort((a, b) => {
    return a.missing - b.missing;
  });

  console.log(releventRecipes);

  res.send(releventRecipes);
});

module.exports = router;
