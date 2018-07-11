/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const mongoose = require('mongoose');
const UserResumes = require('../models/UserResumesStructure');
// 
router.put('/update', function (req, res, next) {
 let updateUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
 });
 let username=updateUser.username;
 User.getUserByUsername(username,(err,user)=>{
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }
    console.log(updateUser);
  User.updateUser(updateUser, (err, user) => {
    User.collection.findOneAndUpdate({
      "username": username
    }, {
      $set: {
           
        "password": updateUser.password
      },
      function (err, post) {
        if (err) return next(err);
        res.json(post);
      }
    });
    if(err) return next(err);
    res.json({success:true,
    msg:'password updated'});  
});
});
 });
  
module.exports = router;
