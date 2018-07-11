/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');


const BlankResumeStructureSchema = mongoose.Schema();

const UserResumes = module.exports = mongoose.model('dummyUserResumes', BlankResumeStructureSchema);

module.exports.getUserResumesById = function (id, callback) {
    UserResumes.findById(id, callback);
};

module.exports.dummy = function(newDummy, callback){
  
    newDummy.save(callback);
  };
  
