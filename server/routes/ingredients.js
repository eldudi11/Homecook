var express = require("express");
var router = express.Router();
const usersBL = require("../BL/usersBL");
const ingredientsBL = require("./../BL/ingredientsBL");
const recipesBL = require("../BL/recipesBL");

/* GET users listing. */
// router.get("/", async function (req, res, next) {
//   let data = await ingredientsBL.getIngredients();

//   res.send(data);
// });

router.get("/", async function (req, res, next) {
  console.log(req.query[0]);
  let d = await ingredientsBL.getIngredientsByString(req.query[0]);
  console.log(d);
  res.send(d);
});

module.exports = router;
