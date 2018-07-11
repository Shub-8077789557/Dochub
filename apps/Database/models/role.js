/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const RoleSchema = mongoose.Schema({
    role :
    { 
        type:String,
    },
    access:{
        type:Object
    }    
});

const Role = module.exports = mongoose.model('Roles', RoleSchema);
module.exports.addRoleSchema = function(newRole, callback){
  
    newRole.save(callback);
  };