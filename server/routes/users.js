var express = require("express");
var router = express.Router();
const usersBL = require("./../BL/usersBL");
const ingredientsBL = require("./../BL/ingredientsBL");
const recipesBL = require("./../BL/recipesBL");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let u = {
    username: "username",
    password: "password",
    name: "asdasd",
  };
  // usersBL.createUser(u);
  data = await usersBL.getUsers();
  recipes = await recipesBL.getRecipes();

  console.log("THE DATA IS");
  console.log(data[1]._id);
  usersBL.pushRecipeToUser(data[1]._id, recipes[4]);

  res.send("hi");
});

router.get("/create", function (req, res, next) {
  // usersBL.createUser(req.query[0]);

  console.log("THE DATA IS");
  console.log(data[1]._id);
  usersBL.pushRecipeToUser(data[1]._id, recipes[4]);

  res.send("hi");
});

router.get("/addfavorite", function (req, res, next) {
  // usersBL.createUser(req.query[0]);

  // console.log("THE DATA IS");
  // console.log(data[1]._id);
  // usersBL.pushRecipeToUser(data[1]._id, recipes[4]);

  res.send("hi");
});

module.exports = router;
