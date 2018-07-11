/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const NewsletterStructures = require('../models/NewsletterStructures');

router.post('/generatestructure', (req, res, next) => {
let newStructuresNewsLetter = new NewsletterStructures({
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

NewsletterStructures.addNewsletterStructures(newStructuresNewsLetter, (err, NewsletterStructures) => {
    if (err) {
        res.json({
            success: false,
            msg: 'Failed to create structure'
        });
    } else {
        res.json({
            success: true,
            msg: 'Structure created'
        });
    }
});
});

router.get('/newsletterstructures', function (req, res) {
    NewsletterStructures.find(function (err, newsletterstructures) {
        if (err)
            res.send(err);
        res.json(newsletterstructures);
    });
});


module.exports = router;