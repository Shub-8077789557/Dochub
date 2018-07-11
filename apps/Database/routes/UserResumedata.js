
/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const mongoose=require('mongoose');
const UserResumes = require('../models/UserResumesStructure');

 
// 
router.put('/basic',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"BasicDetailschema.data":req.body.basicformData}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/quali',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"qualificationDetailSchema.data":req.body.qualiformData}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});


router.put('/Work',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"WorkExpSchema.data":req.body.workdata}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/proj',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"ProjectDetailSchema.data":req.body.projectdata}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/achi',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"AchievementDetailSchema.data":req.body.achivedata}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/skill',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"SkillDetailSchema.data":req.body.skilldata}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/honor',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"HonorAwardSchema.data":req.body.honordata}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/hobby',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"HobbySchema.data":req.body.hobbydata}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/language',function(req,res,next){
    let id=req.body.id;
    console.log(req.body.id);
    UserResumes.collection.updateOne({id:id},{$set:{"languageSchema.data":req.body.languagedata}},function(err,post){
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;