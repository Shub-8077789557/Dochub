/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../config/database');
const UserResumes = require('../models/UserResumesStructure');

//comapre id
// router.post('/compareid', (req, res) => {
//     let id = req.body.id;
//     console.log(id);
//     UserResumes.find({
//         "id": id
//     }, (function (err, resume) {
//         if (err) {
//             res.send(err);
//         } else {
//             console.log('get it');
//         }

//     }));
// });

// get json if id is founded
router.get('/getid', function (req, res) {
    let id = req.body.id;
    console.log(req.body);
    // let resume = req.body;
    UserResumes.find(function (err, resumes) {
        if (err) {
            res.send(err);
            console.log("not found");

        } else {
            res.json(resumes);
        }
    });
});
// router.post('/getid', function (req, res) {
//     let id = req.body.id;
//     // let resume = req.body;
//     UserResumes.find({
//         'id': id
//     }, function (err, resumes) {
//         if (err) {
//             res.send(err);
//             console.log("not found");

//         } else {
//             res.json(resumes);
//         }
//     });
// });


//2...
router.post('/createresume', (req, res, next) => {
    let resume = req.body;
    console.log(resume);
    UserResumes.collection.insert(resume, function (err, docs) {
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

//3 store the Data in UserResumes
router.put('/updata', function (req, res) {
    let id = req.body.id;
    let Basicdetaildata = req.body.basicformData;
    let qualificationDetaildata=req.body.qualiformData;
    let WorkExpdata=req.body.workdata;
    let ProjectDetaildata=req.body.projectdata;
    let AchievementDetaildata=req.body.achivedata;
    let SkillDetaildata=req.body.skilldata;
    let HonorAwarddata= req.body.honordata;
    let Hobbydata=req.body.hobbydata;
    let languagedata=req.body.languagedata;
    let ProfilePicSchema=req.body;
    
    console.log(Basicdetaildata);
    UserResumes.collection.updateOne({
        id: id
    }, {
        $set: {
            "BasicDetailschema.data":Basicdetaildata,
            "qualificationDetailSchema.data":qualificationDetaildata,
            "WorkExpSchema.data":WorkExpdata,
            "ProjectDetailSchema.data":ProjectDetaildata,
            "AchievementDetailSchema.data":AchievementDetaildata,
            "SkillDetailSchema.data":SkillDetaildata,
            "HonorAwardSchema.data":HonorAwarddata,
            "HobbySchema.data":Hobbydata,
            "languageSchema.data":languagedata
        }
    }, function (err, numberAffected) {
        if (err) return next(err);
        res.json(numberAffected);
    });

});

// router.get('/genid', (req, res, next) => {
//     let id = req.param;
//     console.log(resume);
//     UserResumes.collection.insert(id, function (err, docs) {
//         if (err) {
//             return console.error(err);
//         } else {
//             res.json({
//                 success: true,
//                 msg: 'Resume created',
//             });
//         }
//     });
// });


// router.post('/genid', (req, res, next) => {
//     let id = req.body;
//     console.log(resume);
//     UserResumes.collection.insert(id, function (err, docs) {
//         if (err) {
//             return console.error(err);
//         } else {
//             res.json({
//                 success: true,
//                 msg: 'Resume created',
//             });
//         }
//     });
// });

//give all resumes from USerResumes
router.get('/resumes', function (req, res) {
    UserResumes.find(function (err, resumes) {
        if (err)
            res.send(err);
        res.json(resumes);
    });
});


//give User Resumes By its id....
router.post('/getid', function (req, res) {
    let id = req.body.id.json;
    // let resume = req.body;
    UserResumes.findOne(id, function (err, resumes) {
        if (err) {
            res.send(err);

        } else {
            res.json(resumes);
        }
    });
});

// //set id in userresume collection..
// router.post('/setid', function (req, res) {
//     let id = req.body.id;
// console.log(BasicDetailschema);
//    // let BasicDetaillayout=req.body.BasicDetaillayout;
//     //let data = req.body.BasicDetailschema.data;
//         console.log(Basicdetailschema);
//    // console.log(_id);
//     UserResumes.collection.insertOne({"id":id},{ $set:{"BasicDetailschema.properties":Basicdetailschema}}, function (err, numberAffected) {
//         if (err) throw err;
//         console.log("1 document updated");
//     });

// });


//store the whole json Structure in UserResumes.
router.post('/upschema', function (req, res) {
    let id = req.body.id;
    let BasicDetailschema = req.body;
    console.log(BasicDetailschema);
    // let BasicDetaillayout=req.body.BasicDetaillayout;
    //let data = req.body.BasicDetailschema.data;
    console.log(Basicdetailschema);
    // console.log(_id);
    UserResumes.collection.updateOne({
        "id": id
    }, {
        $set: {
            "BasicDetailschema.data": Basicdetailschema
        }
    }, function (err, numberAffected) {
        if (err) throw err;
        console.log("1 document updated");
    });

});




router.post('/upd', function (req, res) {
    let id = req.body.id;
    let resume = req.body;
    let name = req.body.First_Name;
    console.log(resume);
    // console.log(_id);
    dummyUserResumes.collection.updateOne({
        "id": id
    }, {
        $set: resume
    }, function (err, numberAffected) {
        if (err) throw err;
        console.log("1 document updated");
    });

});



module.exports = router;