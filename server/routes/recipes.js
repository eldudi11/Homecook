var express = require("express");
var router = express.Router();
const usersBL = require("../BL/usersBL");
const ingredientsBL = require("./../BL/ingredientsBL");
const recipesBL = require("../BL/recipesBL");

let releventRecipes = [],
  recipesToLoad = [];
const NUM_OF_ELEMENTS = 2;
let index = 0;

/* GET users listing. */
router.get("/", async function (req, res, next) {
  index = 0;
  recipesToLoad.length = 0;
  releventRecipes.length = 0;
  console.log(
    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
  );
  console.log(releventRecipes);
  let data = await recipesBL.getRecipes();
  let userIng = req.query[0];
  let matchCount = 0,
    missing;
  if (req.query !== {}) {
    data.forEach((recipe) => {
      recipe.Ingredients.forEach((i) => {
        let found = userIng.find(
          (x) => x.toUpperCase() === i.name.toUpperCase()
        );
        if (found !== undefined) matchCount++;
      });
      if (matchCount != 0) {
        missing = recipe.Ingredients.length - matchCount;
        releventRecipes.push({ missing: missing, recipe: recipe });
        matchCount = 0;
      }
    });
  }
  console.log(releventRecipes);
  //sort by missing ingredients
  releventRecipes.sort((a, b) => {
    return a.missing - b.missing;
  });

  if (releventRecipes.length < NUM_OF_ELEMENTS) {
    recipesToLoad = releventRecipes;
    console.log("im also here");
  } else {
    console.log("im here");
    recipesToLoad = releventRecipes.slice(index, index + NUM_OF_ELEMENTS);
    index += NUM_OF_ELEMENTS;
  }
  console.log("first");
  console.log(recipesToLoad);
  res.send(recipesToLoad);
});

router.get("/loadmore", function (req, res, next) {
  recipesToLoad = releventRecipes.slice(index, index + NUM_OF_ELEMENTS);
  index += NUM_OF_ELEMENTS;
  console.log(
    "*****************************************************************:"
  );
  console.log(recipesToLoad);
  res.send(recipesToLoad);
});

module.exports = router;
