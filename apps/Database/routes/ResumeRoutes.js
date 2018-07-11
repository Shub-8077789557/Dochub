/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const ResumeStructures = require('../models/ResumeStructures');

router.post('/generatestructure', (req, res, next) => {
let newResumeStructures = new ResumeStructures({
    "id":"",
	"BasicDetailschema" : {
      "type" : "object",
      "properties" : {
          "first_name" : {
              "type" : "string"
          },
          "last_name" : {
              "type" : "string"
          },
          "gender" : {
              "type" : "string",
              "enum" : [ 
                  "Male", 
                  "Female"
              ]
          },
          "address" : {
              "type" : "object",
              "properties" : {
                  "address_1" : {
                      "type" : "string"
                  },
                  "address_2" : {
                      "type" : "string"
                  },
                  "city" : {
                      "type" : "string"
                  },
                  "state" : {
                      "type" : "string"
                  },
                  "country" : {
                      "type" : "string"
                  }
              },
              "required" : [ 
                  "address_1", 
                  "city", 
                  "state", 
                  "country"
              ]
          },
          "birthdate" : {
              "type" : "string"
          },
          "email" : {
              "type" : "string",
              "format" : "email"
          },
          "Contact" : {
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
          "skypeid" : {
              "type" : "string"
          },
          "social_media" : {
              "type" : "string",
              "format" : "uri"
          }
      },
      "required" : [ 
          "first_name", 
          "last_name", 
          "gender", 
          "birthdate", 
          "email", 
          "Contact"
      ],
      "BasicDetaillayout" : [ 
          {
              "type" : "flex",
              "flex-flow" : "row-wrap",
              "items" : [ 
                  "first_name", 
                  "last_name"
              ]
          }, 
          {
              "type" : "flex",
              "flex-flow" : "row-wrap",
              "items" : [ 
                  "address.address_1", 
                  "address.address_2"
              ]
          }, 
          {
              "type" : "flex",
              "flex-flow" : "row-wrap",
              "items" : [ 
                  "address.city", 
                  "address.state", 
                  "address.country"
              ]
          }, 
          {
              "key" : "birthdate",
              "type" : "date",
              "flex" : "3 3 100px"
          }, 
          {
              "key" : "gender",
              "type" : "array",
              "items" : [ 
                  {
                      "type" : "div",
                      "displayFlex" : true,
                      "flex-direction" : "row",
                      "items" : [ 
                          {
                              "key" : "gender",
                              "flex" : "2 2 50px",
                              "notitle" : true,
                              "placeholder" : "Gender"
                          }, 
                          {
                              "key" : "email",
                              "flex" : "2 2 100px",
                              "notitle" : true,
                              "placeholder" : "Email Id"
                          }
                      ]
                  }
              ]
          }, 
          {
              "key" : "Contact",
              "type" : "array",
              "items" : [ 
                  {
                      "type" : "div",
                      "displayFlex" : true,
                      "flex-direction" : "row",
                      "items" : [ 
                          {
                              "key" : "Contact[].type",
                              "flex" : "1 1 50px",
                              "notitle" : true,
                              "placeholder" : "Type"
                          }, 
                          {
                              "key" : "Contact[].number",
                              "flex" : "4 4 200px",
                              "notitle" : true,
                              "placeholder" : "Phone Number"
                          }
                      ]
                  }
              ]
          }, 
          {
              "type" : "flex",
              "flex-flow" : "row-wrap",
              "items" : [ 
                  "skypeid", 
                  "social_media"
              ]
          }, 
          {
              "type" : "button",
              "title" : "Reset",
              "onClick" : "reset()"
          }, 
          {
              "type" : "button",
              "title" : "Next",
              "onClick" : "next()"
          }
      ],
      "data" : {
          "first_name" : "First name",
          "last_name" : "Last name",
          "birthdate" : "yyyy-dd-mm"
      }
  },
  "qualificationDetailSchema": {
    "type": "object",
    "properties": {
        "Qualification": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "degree_name": {
                        "type": "string"
                    },
                    "institute_name": {
                        "type": "string"
                    },
                    "university_name": {
                        "type": "string"
                    },
                    "address": {
                        "type": "string"
                    },
                    "status" : {
                        "type" : "string",
                        "enum" : [ 
                            "pursuing", 
                            "complete"
                            ]
                         },
                    "starting_date": {
                        "type": "string",
						"format" : "date"
                    },
                    "ending_date": {
                        "type": "string",
						"format" : "date"
                    },
                    "year_of_passing": {
                        "type": "string"
                    },
                    "cgpa" : {
                        "type" : "string"
                        }
                },
                "required" : [ 
                    "degree_name", 
                    "institute_name", 
                    "university_name", 
                    "address", 
                    "status", 
                    "starting_date", 
                    "ending_date", 
                    "year_of_passing", 
                    "cgpa"
                 ],
                },
            },
        },
      "data" : {
          "degree_name" : "MScit"
      }
  },
  "WorkExpSchema": {
    "type": "object",
    "properties": {
        "experiance": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "company_name": {
                        "type": "string"
                    },
                    "starting_date": {
                        "type": "string",
                        "format": "date"
                    },
                    "ending_date": {
                        "type": "string",
                        "format": "date"
                    },
                    "designation": {
                        "type": "string"
                    },
                    "status": {
                        "type": "string",
                        "enum": [
                            "pursuing",
                            "complete"
                        ]
                    },
                    "city": {
                        "type": "string"
                    },
                    "country": {
                        "type": "string"
                    },
                    "responsibility": {
                        "type": "string"
                    },
                    "reference_contact": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "type": {
                                    "type": "string",
                                    "enum": [
                                        "Mobile",
                                        "Home",
                                        "Office"
                                    ]
                                },
                                "number": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "type",
                                "number"
                            ]
                        }
                    },
                    "reference_contact_designation": {
                        "type": "string"
                    }
                },
                "required": [
                    "company_name",
                    "starting_date",
                    "ending_date",
                    "designation",
                    "status",
                    "city",
                    "country",
                    "responsibility",
                    "reference_contact_designation"
                ]
            }
        }
    }
},
"ProjectDetailSchema": {
    "type": "object",
    "properties": {
        "Project": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "project_title": {
                        "type": "string"
                    },
                    "technology": {
                        "type": "string"
                    },
                    "duration": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"   
                    }
                },
                "required" : [ 
                    "project_title", 
                    "technology", 
                    "duration", 
                    "description"
                 ]
            }
        }
  },
},
  "AchievementDetailSchema" : {
    "type": "object",
    "properties": {
        "Achievement": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "certificate_name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    }
                },
                "required" : [ 
                    "certificate_name", 
                    "description"
                 ],
            },
        },
      "data" : {
          "certificate_name" : "MScit"
      }
},
  },
  "SkillDetailSchema" : {
    "type" : "object",
    "properties" : {
        "skills" : {
            "type" : "string"
        }
    },
    "required" : [ 
        "skills"
    ]
},
  "HonorAwardSchema" : {
    "type": "object",
    "properties": {
        "HonorAward": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "award_name": {
                        "type": "string"
                    },
                    "month": {
                        "type": "string"
                    },
					"year": {
                        "type": "string"
                    },
					"company_or_institute": {
                        "type": "string"
                    },
					"description": {
                        "type": "string"
                    }
                },
                "required" : [ 
                    "award_name", 
                    "month",
                    "year",
                    "company_or_institute",
                    "description"
                 ],
            },
        },
      "data" : {
          "award_name" : "MScit"
      }
  },
},
  "HobbySchema" : {
    "type" : "object",
    "properties" : {
        "hobby_name" : {
            "type" : "string"
        }
    },
    "required" : [ 
        "hobby_name"
    ]
},
  "languageSchema" : {
    "type" : "object",
    "properties" : {
        "languages" : {
            "type" : "array",
            "items" : {
                "type" : "object",
                "properties" : {
                    "type" : {
                        "type" : "string",
                        "enum" : [ 
                            "read", 
                            "write", 
                            "speak"
                        ]
                    },
                    "languages" : {
                        "type" : "string"
                    }
                },
                "required" : [ 
                    "type", 
                    "languages"
                ]
            }
        }
    }
},
  "ProfilePicSchema" : {
    "type" : "object",
    "properties" : {
        "profile_pic" : {
            "type" : "image"
        }
    }
},
  "__v" : 0
  });

ResumeStructures.addResumeStructures(newResumeStructures, (err, ResumeStructures) => {
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

router.get('/resumestructures', function (req, res) {
    ResumeStructures.find(function (err, resumestructures) {
        if (err)
            res.send(err);
        res.json(resumestructures);
    });
});


module.exports = router;