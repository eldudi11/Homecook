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
      QuickIngredients: obj.quickIngredients,
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

module.exports = { createUser, getUsers };
