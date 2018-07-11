/*jshint esversion: 6 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const NewsLetterStructureSchema= mongoose.Schema({
    StructureName:{
        type:String
    },
    CrearedDate:{
        type:Date,
        default:Date.now
    },
    LastmodifiedDate:{
        type:Date,
        default:Date.now
    },
    StructureMarkup:{
        type:String
    },
    CreatedBy:{
        type:String
    }
});

const NewsLetterStrucure = module.exports = mongoose.model('NewsletterStructure',NewsLetterStructureSchema);

module.exports.storeStructure = function (Structure, callback) {
    Structure.save(callback);
};


//ALL Structures
module.exports.getNewsLetterStructures = function (callback) {
    NewsLetterStrucure.find(callback);
};

// dupliacate Structure
module.exports.getStructureid = function (id, callback) {
    const Newsletterid = {
        _id: id
    };
    NewsLetterStrucure.find(Newsletterid, callback);
};

module.exports.viewStructure = function (id, callback) {
    const Newsletterid = {
        _id: id
    };
    NewsLetterStrucure.find(Newsletterid, callback);
};

