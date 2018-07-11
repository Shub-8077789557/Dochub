/*jshint esversion: 6 */
var express = require('express');
var path = require('path');
const app= express();
var router = express.Router();
var Entities = require('html-entities').AllHtmlEntities;
const config = require('../config/database');
const fs = require('fs');
const NewsLetterStrucure  = require('../models/NewsletterStructure');


//store the NewsLetter Structure

router.post('/savestructure',(req,res,next)=>{
    var st= req.body.structuremarkup;  
console.log(JSON.parse(JSON.stringify(st)));
  var entities = new Entities();
  var endocdedMarkup = entities.encode(JSON.parse(JSON.stringify(st)));
 console.log(endocdedMarkup); 

 let newStructure = new NewsLetterStrucure({
    StructureName:req.body.structurename,
    CrearedDate:Date.now(),
    LastmodifiedDate:Date.now(),
    StructureMarkup:endocdedMarkup,
    CreatedBy:req.body.createdby
  });

  console.log(newStructure);
  
  NewsLetterStrucure.storeStructure(newStructure,(err,structure)=>{
    if (err) {
        res.json({
          err:err,
          success: false,
          msg: 'failed to strore'
        });
      } else {
        res.json({
          success: true,
          msg: 'NewsLetter Structure is Stored'
        });
  
      }
  });
});

// Retrive all NewsLetter
router.get('/structures',function(req,res){
NewsLetterStrucure.getNewsLetterStructures((err,Structures)=>{
    if (err) {
        res.json({
          success: false,
          Message: 'No Resumes'
        });
  
      } else {
        res.json({
          success: true,
          Structures:Structures 
  
        });
      }
  
});
});
// Update or edit Structure
router.put('/updatestructure',function(req,res){
    const Structureid = req.body._id;
    var entities = new Entities();
  var endocdedMarkup = entities.encode(req.body.structuremarkup);
let UpdatedStructure = new NewsLetterStrucure({
    _id: req.body._id,
    StructureName:req.body.structurename,
    LastmodifiedDate:Date.now(),
    StructureMarkup:endocdedMarkup,
    CreatedBy:req.body.createdby
  });
  NewsLetterStrucure.findByIdAndUpdate(Structureid,UpdatedStructure,function(err,Structure){
    if (err) {
        res.json({
          success: false,
          message: 'not updated',
          err: err
        });
  
      } else {
        res.json({
          success: true,
          Message: 'updated successfully',
          Structure: Structure,
        });
      }
  });
});

// Dupilctate or edit Newsletter
router.post('/duplicatstructure',function(req, res){
var Structureid = req.body._id;
console.log(Structureid);
NewsLetterStrucure.getStructureid(Structureid,(err,Structure)=>{
    if (err) {
        res.json({
          err: err,
          success: false,
          msg: 'No Newsletter'
        });
      } else {
          let DuplicatStructure = new NewsLetterStrucure({
            StructureName:Structure[0].StructureName,
            CrearedDate:Structure[0].CrearedDate,
            LastmodifiedDate:Structure[0].LastmodifiedDate,
            StructureMarkup:Structure[0].StructureMarkup,
            CreatedBy:Structure[0].CreatedBy
          });
          NewsLetterStrucure.storeStructure(DuplicatStructure,(err,Structure)=>{
            if (err) {
                res.json({
                  success: false,
                  msg: 'failed to strore',
                  err: err,
                });
              } else {
                res.json({
                  success: true,
                  msg: 'Structure Copied successfully',
                  Structure: Structure
                });
      
              } 
        
        });
      }
});
});



// View Structure
router.post('/viewstructure',function(req,res){
   var Structureid = req.body._id;
   console.log(Structureid);
   NewsLetterStrucure.viewStructure(Structureid,(err,Structure)=>{
    if (err) {
        res.json({
          err: err,
          success: false,
          msg: 'No Structure'
        });
  
      } else {
        var entities = new Entities();
        var decodedMarkup = entities.decode(Structure[0].StructureMarkup);
        console.log(decodedMarkup);
        //console.log(JSON.parse(JSON.stringify(decodedMarkup).replace(/\\/g,"")));
        
        let RetriveStructure = {
            StructureName:Structure[0].StructureName,
            CrearedDate:Structure[0].CrearedDate,
            LastmodifiedDate:Structure[0].LastmodifiedDate,
            StructureMarkup: decodedMarkup,
            CreatedBy:Structure[0].CreatedBy
        };
        console.log(RetriveStructure);
        res.json({
          success: true,
          Structure: RetriveStructure
        });
      }
   });
});

//delete structure
router.post('/deletestructure',(req,res)=>{
console.log(req.body_id);
NewsLetterStrucure.findByIdAndRemove(req.body._id,function(err,callback){
    if (err) {
        res.json({
          success: false,
          Message: 'Delete Unsuccessful',
          err: err
        });
      } else {
        res.json({
          success: true,
          Message: 'structure Deleted succesfully',
          _id: callback._id
  
        });
      }
});
});


module.exports = router;