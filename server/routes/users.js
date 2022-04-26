var express = require("express");
var router = express.Router();
const usersBL = require("./../BL/usersBL");
const ingredientsBL = require("./../BL/ingredientsBL");
const recipesBL = require("./../BL/recipesBL");
const User = require("./../Models/userModel.js");

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

  // usersBL.pushRecipeToUser(data[1]._id, recipes[4]);

  res.send("hi");
});

router.post("/addfavorite", async function (req, res, next) {
  // data = await usersBL.getUsers();
  recipe = req.body.params[0];
  // usersBL.pushRecipeToUser(data[0]._id, recipe);
  // console.log(data[0].Username);

  data = await usersBL.getUsers();

  console.log(data[0].Name);
  console.log("HIIIIIIIIIIIIIIIIII");
  console.log(recipe.Name);
  usersBL.removeRecipefromUser(data[0]._id, recipe._id);
  //usersBL.pushRecipeToUser(data[0]._id, recipe);

  res.send("hi");
});

router.get("/login", async function (req, res, next) {
  let username = req.query[0][0];
  let password = req.query[0][1];
  let user = await usersBL.isExist(username);
  let messege = "OK";
  let isExist = true;
  if (user === null) {
    isExist = false;
    messege = "Username not exist";
  } else if (user.Password !== password) {
    messege = "Wrong password";
  }

  res.send({ user: user, messege: messege });
});

router.post("/create", async function (req, res, next) {
  let username = req.body.params[0][0];
  let password = req.body.params[0][1];
  let name = req.body.params[0][2];

  let user = await usersBL.isExist(username);
  let messege;

  if (user !== null) {
    messege = "Username exist";
  } else if (password.length < 4) {
    messege = "Password required at least 4 characters";
  } else {
    messege = await usersBL.createUser(username, password, name);
    if (messege === "OK") {
      user = await usersBL.isExist(username);
    }
  }
  res.send({ user: user, messege: messege });
});

module.exports = router;
