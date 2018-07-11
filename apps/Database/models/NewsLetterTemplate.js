/*jshint esversion: 6 */
const mongoose = require('mongoose');
const config = require('../config/database');

const NewsletterTemplateSchema = mongoose.Schema({
    TemplateName: {
        type: String
    },
    Header: {
        type: String
    },
    Footer: {
        type: String
    },
    CreatedDate: {
        type: Date,
        Default: Date.now
    },
    CraetedBy: {
        type: String
    },
    Userid: {
        type: String
    }

});

const NewsLetterTemplate = module.exports = mongoose.model('NewsletterTemplate', NewsletterTemplateSchema);

//Store Template
module.exports.StoreNewsLetterTemplate = function (Template, callback) {
    Template.save(callback);
};


// get the lis of  Templates
module.exports.getNewsLetterTemplates = function (callback) {
    NewsLetterTemplate.find(callback);
};


// get the single template
module.exports.getNewsLetterTemplate = function(id,callback){
    const Templateid= {
        _id:id
    };
    NewsLetterTemplate.find(Templateid,callback);
};