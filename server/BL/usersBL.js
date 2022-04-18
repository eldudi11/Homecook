const User = require("./../Models/userModel.js");

const getUsers = function () {
  return new Promise((resolve, reject) => {
    User.find({}, function (err, users) {
      console.log(users);
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
  });
};

const createUser = function (obj) {
  return new Promise((resolve, reject) => {
    const newUser = new User({
      Username: obj.username,
      Password: obj.password,
      Name: obj.name,
      Recipes: [],
    });

    newUser.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("OK");
      }
    });
  });
};

const pushRecipeToUser = function (id, recipe) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate(
      { _id: id },
      { $push: { Recipes: recipe } },
      function (err, users) {
        if (err) {
          reject(err);
        } else {
          resolve(users);
        }
      }
    );
  });
};

module.exports = { createUser, getUsers, pushRecipeToUser };
