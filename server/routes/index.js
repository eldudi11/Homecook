var express = require("express");
var router = express.Router();
const usersBL = require("./../BL/usersBL");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let data = await usersBL.getUsers();
  console.log({ data });
  res.render("index", { title: "data" });
});

module.exports = router;
