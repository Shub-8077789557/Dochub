/*jshint esversion: 6 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
      type:Object
  }


});

//

const User = module.exports = mongoose.model('User', UserSchema); // user is table name (e.g users)

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback) {
  const query = {
    username: username
  }
  User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt,(err, hash) => {
     if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
    });
  });  
};


module.exports.updateUser = function (User, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(User.password, salt, (err, hash) => {
      if (err) throw err;
      User.password = hash;
      User.save(callback);
    });
  });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
