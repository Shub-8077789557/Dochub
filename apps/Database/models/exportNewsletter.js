
/*jshint esversion: 6 */
const mongoose = require('mongoose');
const config= require('../config/database');

const ExportNewsletterSchema = mongoose.Schema({
    Templateid:{
        type:String
    },
    Structureid:{
        type:String
    },
    NewsLetterid:{
        type:String
    },
    Userid:
    {
        type:String
    },
    ExportDate:
    {
        type:Date,
        Default: Date.now
    },
    ExportBy:{
        type:String
    }
});


const ExportNewsLetter = module.exports = mongoose.model('ExportNewsLetter',ExportNewsletterSchema);

module.exports.storeExprtNewsLetter = function(Newsletter,callback){
    Newsletter.save(callback);
};


// Individual User NewsLetter
module.exports.getUserExportedNewsLetter = function (id, callback) {
    const uid = {
        userid: id
    };
    ExportNewsLetter.find(uid, callback);
};

//ALL User NewsLetter
module.exports.getExportedNewsLetters = function (callback) {
    NewsLetterStore.find(callback);
};
