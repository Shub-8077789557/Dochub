/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const atob = require('atob');
const btoa = require('btoa');
const User = require('../models/user');
const Role = require('../models/role');
//
router.post('/register', (req, res, next) => {
  //res.send('Register');
  let newUser = new User({
    name: atob(req.body.Name),
    email: atob(req.body.Email),
    username: atob(req.body.Username),
    password: atob(req.body.Password),
    role:req.body.Role
  });

  console.log(newUser);
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    } else {
      res.json({
        success: true,
        msg: 'User registered'
      });
    }
  });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
  // res.send('AUTHENTICATE');
  const username = atob(req.body.username);
  const password = atob(req.body.password);
  console.log(username + password);
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({
          data: user
        }, config.secret, {
          expiresIn: 604800 //1 week
        });
        res.json({
          success: true,
          token: `Bearer ${token}`,
          user: {
            id: btoa(user._id),
            name: btoa(user.name),
            username: btoa(user.username),
            email: btoa(user.email),
            role:user.role
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Wrong Password'
        });
      }
    });
  });
});


router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  //res.send('PROFILE');
  res.json({
    user: req.user
  });
});

module.exports = router;

