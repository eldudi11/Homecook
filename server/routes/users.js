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

  console.log("THE DATA IS");
  console.log(data[1]._id);
  // usersBL.pushRecipeToUser(data[1]._id, recipes[4]);

  res.send("hi");
});

router.get("/addfavorite", function (req, res, next) {
  // usersBL.createUser(req.query[0]);

  // console.log("THE DATA IS");
  // console.log(data[1]._id);
  // usersBL.pushRecipeToUser(data[1]._id, recipes[4]);

  res.send("hi");
});

router.get("/login", async function (req, res, next) {
  let username = req.query[0][0];
  let password = req.query[0][1];
  let user = await usersBL.isExist(username);
  console.log(username + "  " + password);
  let messege = true;
  let isExist = true;
  if (user === null) {
    isExist = false;
    messege = "Username not exist";
  } else if (user.Password !== password) {
    messege = "Wrong password";
  }

  res.send({ user: user, messege: messege });
});

router.get("/create", async function (req, res, next) {
  console.log("IM IS CREATE NOW");
  let username = req.query[0][0];
  let password = req.query[0][1];
  let name = req.query[0][2];

  let user = await usersBL.isExist(username);
  console.log(username + "  " + password);
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
  console.log(messege);
  res.send({ user: user, messege: messege });
});

module.exports = router;
