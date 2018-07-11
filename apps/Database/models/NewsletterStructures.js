/*jshint esversion: 6 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//ResumeStructures Schema
const NewsLetterStructuresSchema = mongoose.Schema({
    
    "StructureschemaNewsLetter" : {
        "type" : "object",
        "properties" : {
            "name" : {
                "type" : "string"
            },
            "department" : {
                "type" : "string",
                "enum" : 
                [ 
                    "UI",
                    "Liferay",
                    "Php",
                    "Android",
                    "iOS"            
                ]
                },
                "image" : {
                    "type" : "string"
                },
                "description" : {
                    "type" : "string"
                },
                "contact" : {
                    "type" : "array",
                    "items" : {
                        "type" : "object",
                        "properties" : {
                            "type" : {
                                "type" : "string",
                                "enum" : [ 
                                    "Mobile", 
                                    "Home", 
                                    "Office"
                                ]
                            },
                            "number" : {
                                "type" : "string"
                            }
                        },
                        "required" : [ 
                            "type", 
                            "number"
                        ]
                    }
                },
                "social media" : {
                    "type" : "string"
                }
            }
        }

    });
//

const NewsletterStructures = module.exports = mongoose.model('NewsletterStructures', NewsLetterStructuresSchema); // ResumeStructures is table name (e.g ResumeStructuress)

module.exports.getNewsletterStructuresById = function (id, callback) {
    NewsletterStructures.findById(id, callback);
};

module.exports.addNewsletterStructures = function(newNewsletterStructures, callback){
  
    newNewsletterStructures.save(callback);
  };
  