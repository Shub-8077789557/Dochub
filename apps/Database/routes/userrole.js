/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Role = require('../models/role');
const User=require('../models/user');
router.post('/addrole',function(req,res,next){
   let addRoleSchema =new Role({
    role : req.body.role,
    access:req.body.access,
   }); 
   Role.addRoleSchema(addRoleSchema, (err, addRoleSchema) => {
    if (err) {
        res.json({
            success: false,
            msg: 'Failed to create role'
        });
    } else {
        res.json({
            success: true,
            msg: 'role  created'
        });
    }
});

});
router.get('/role',function(req,res){
    Role.find(function(err,role){
       if (err) {
            res.json({
                success: false,
                msg: 'No Roles'
            });
        } else {
            res.json({
                    role:role    
            });
        }
      
    });
});
router.get('/getusers',function(req,res){
    User.find(function(err,User){
       if (err) {
            res.json({
                success: false,
                msg: 'No Users'
            });
        } else {
            res.json({
                    User:User    
            });
        }
      
    });
});


module.exports = router;
