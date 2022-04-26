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

const createUser = function (username, password, name) {
  return new Promise((resolve, reject) => {
    const newUser = new User({
      Username: username,
      Password: password,
      Name: name,
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

const removeRecipefromUser = function (id, recipe) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate(
      { _id: id },
      {
        $pull: {
          Recipes: { _id: recipe },
        },
      },
      function (err, data) {
        console.log(err, data);
      }
    );
  });
};

const isExist = function (username) {
  return new Promise((resolve, reject) => {
    User.findOne({ Username: username }, function (err, user) {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

module.exports = {
  createUser,
  getUsers,
  pushRecipeToUser,
  isExist,
  removeRecipefromUser,
};
