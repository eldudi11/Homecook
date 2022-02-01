var express = require("express");
var router = express.Router();
const usersBL = require("./../BL/usersBL");
const ingredientsBL = require("./../BL/ingredientsBL");
const recipesBL = require("./../BL/recipesBL");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let data = await recipesBL.getRecipes();
  // let result = await usersBL.createUser({
  //   username: "dudi",
  //   password: "dudi",
  //   name: "dave",
  //   quickIngredients: ["lemon", "apple"],
  // });
  res.send(data);
});

module.exports = router;
