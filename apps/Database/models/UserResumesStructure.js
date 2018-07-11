/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');


const UserResumesSchema = mongoose.Schema();
const UserResumes = module.exports = mongoose.model('UserResumes', UserResumesSchema);

module.exports.getUserResumesById = function (id, callback) {
    UserResumes.findById(id, callback);
};

module.exports.addUserResumes = function (newUserResumes, callback) {
    newUserResumes.save(callback);
};
