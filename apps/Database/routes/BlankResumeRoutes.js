/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const UserResumes= require('../models/BlankResumeStructure');
router.post('/generatedummy', (req, res, next) => {
let newDummy=new UserResumes({
  "data":{
    "type":"object",
    "properties":{
      "id":{
        "type":"string"
      },
      "BasicDetails":{
        "type":"object"
      }
    }
    
  }
  
}
);
router.post('/createdummy', (req, res, next) => {
  let resume = req.body;
  console.log(resume);
  DummyUseResumes.collection.insert(resume, function (err, docs) {
      if (err) {
          return console.error(err);
      } else {
          res.json({
              success: true,
              msg: 'Resume created',
          });
      }
  });
});

UserResumes.dummy(newDummy,(err,UserResumes)=>{
    if (err) {
        res.json(err);
    } else {
        res.json({
            success: true,
            msg: 'Structure created'
        });
    }
});

});

module.exports = router;
