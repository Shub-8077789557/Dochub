/*jshint esversion: 6 */
const fs = require('fs');
var express = require('express');
var router = express.Router();
var Entities = require('html-entities').AllHtmlEntities;
const config = require('../config/database');
const ExportNewsLetter = require('../models/exportNewsletter');
const pdf = require('html-pdf');
const http = require('http');
const path = require('path');
const url = require('url');
const NewsLetterStore = require('../models/newsletterstore');
const NewsLetterStrucure = require('../models/NewsletterStructure');
const NewsLetterTemplate = require('../models/NewsLetterTemplate');

var entities = new Entities();
//const html = fs.readFileSync('./routes/html/template.html', 'utf8');
var DecodedHeader;
var DecodedFooter;
var DecodedStructure;
var DecodedHRMarkup;
var DecodedAmarkup;
var DecodedMrmarkup;
var HRmarkup;
var Amarkup;
var Mrmarkup;
// let headData = 'Mycusomte hader';
// let FooterData = 'my footer';

// let head = '<style>.redText{color:red;}</style><div id="pageHeader">' + headData + '</div><div id="pageFooter">' + FooterData + '</div>';
// let body = '<p class="redText">sadik</p>';
// let html = head + body;
// var bufferfile = pdf.create(html).toBuffer(function (err, buffer) {
//     if (err) return console.log(err);
//     console.log('This is a buffer:');
//     console.log(buffer);
//     bufferfile = buffer;
// });

let bufferfile;
router.post('/newsletterpdf', function (req, res) {

  //newsLetter Template _id in request
  const Templateid = {
    _id: req.body._templateid
  }
  console.log(Templateid);
  NewsLetterTemplate.getNewsLetterTemplate(Templateid._id, (err, Template) => {
    if (err) {
      res.json({
        success: false,
        message: 'no Templates',
        err: err
      });

    } else {
      //console.log(Template[0]);
      DecodedHeader = entities.decode(Template[0].Header);
  
      DecodedFooter = entities.decode(Template[0].Footer);
 


      DecodedHeader = JSON.parse(JSON.stringify(DecodedHeader));
      DecodedHeader = DecodedHeader.replace(/\\/g, "");
     // console.log(DecodedHeader);
      
      DecodedFooter = JSON.parse(JSON.stringify(DecodedFooter));
      DecodedFooter = DecodedFooter.replace(/\\/g, "");
      //console.log(DecodedFooter);

    }
  });
  //newsLetter Structure _id in request
  const Structureid = {
    _id: req.body._structureid
  }
  NewsLetterStrucure.getStructureid(Structureid._id, (err, Structure) => {
    if (err) {
      res.json({
        success: false,
        message: 'no Templates',
        err: err
      });

    } else {
      // console.log(Structure[0]);
      DecodedStructure = entities.decode(Structure[0].StructureMarkup);
      DecodedStructure = JSON.parse(JSON.stringify(DecodedStructure));
      DecodedStructure = DecodedStructure.replace(/\\/g, "");
   //   console.log(DecodedStructure);


    }
  });
  //newsLetter content _id in request
  const NewsLetterid = {
    _id: req.body._newsletterid
  };
    let head;
    let body;
    let html;

  NewsLetterStore.getNewsLetterid(NewsLetterid._id, (err, Newsletter) => {
    if (err) {
      res.json({
        success: false,
        message: 'no Templates',
        err: err
      });

    } else {
      // console.log(Newsletter[0]);
        const documentname=Newsletter[0].documentname;
        console.log(documentname);
        HRmarkup = entities.decode(Newsletter[0].HRmarkup);
        Amarkup = entities.decode(Newsletter[0].Amarkup);
        Mrmarkup = entities.decode(Newsletter[0].Mrmarkup);

      DecodedHRMarkup = JSON.parse(JSON.stringify(HRmarkup));
      DecodedHRMarkup = DecodedHRMarkup.replace(/\\/g, "");
       console.log(DecodedHRMarkup);
    

      DecodedAmarkup = JSON.parse(JSON.stringify(Amarkup));
      DecodedAmarkup = DecodedAmarkup.replace(/\\/g, "");
      console.log(DecodedAmarkup);


      DecodedMrmarkup = JSON.parse(JSON.stringify(Mrmarkup));
      DecodedMrmarkup = DecodedMrmarkup.replace(/\\/g, "");
      console.log(DecodedMrmarkup);      

      //     console.log(DecodedMarkup);
      head = '<div id="pageHeader">' + DecodedHeader + '</div><div id="pageFooter">' + DecodedFooter + '</div>';

      var fHR = DecodedStructure.replace("HR",DecodedHRMarkup).replace("Admin",DecodedAmarkup).replace("Marketing",DecodedMrmarkup);
     
      console.log(fHR);

      body =fHR;
      html = head + body;
      //console.log(head);
      //console.log(html);
       pdf.create(html).toBuffer(function (err, buffer) {
        if (err) return console.log(err);
        console.log('This is a buffer:');
        //console.log(buffer);
        bufferfile = buffer;
        //console.log(bufferfile);

  let StoreNewsLetter = new ExportNewsLetter({
    Templateid: req.body._templateid,
    Structureid: req.body._structureid,
    NewsLetterid: req.body._newsLetterid,
    Userid: req.body.userid,
    ExportDate: Date.now(),
    ExportBy: req.body.exportedby
  });
  let filext = '.pdf';
  let filename = documentname + filext;
  ExportNewsLetter.storeExprtNewsLetter(StoreNewsLetter, (err, store) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Faild to Export'
      });
    } else {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment;filename=' + filename);
      res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
      res.send(bufferfile);
    }
  });
      });
    }
  });
     
});












router.post('/newsletterhtml', function (req, res) {

  //newsLetter Template _id in request
  const Templateid = {
    _id: req.body._templateid
  }
  console.log(Templateid);
  NewsLetterTemplate.getNewsLetterTemplate(Templateid._id, (err, Template) => {
    if (err) {
      res.json({
        success: false,
        message: 'no Templates',
        err: err
      });

    } else {
      console.log(Template[0]);
      DecodedHeader = entities.decode(Template[0].Header);
      console.log(DecodedHeader);
      DecodedFooter = entities.decode(Template[0].Footer);
      console.log(DecodedFooter);

    }
  });
  //newsLetter Structure _id in request
  const Structureid = {
    _id: req.body._structureid
  }
  NewsLetterStrucure.getStructureid(Structureid._id, (err, Structure) => {
    if (err) {
      res.json({
        success: false,
        message: 'no Templates',
        err: err
      });

    } else {
     // console.log(Structure[0]);
      DecodedStructure = entities.decode(Structure[0].StructureMarkup);
      // DecodedStructure = JSON.parse(JSON.stringify(DecodedStructure));
      // DecodedStructure = DecodedStructure.replace(/\\/g, "");
      sa = JSON.parse(JSON.stringify(DecodedStructure));      
      console.log(sa);
    }
  });
  //newsLetter content _id in request
  const NewsLetterid = {
    _id: req.body._newsletterid
  };
    let head;
    let body;
    let html;

  NewsLetterStore.getNewsLetterid(NewsLetterid._id, (err, Newsletter) => {
    if (err) {
      res.json({
        success: false,
        message: 'no Templates',
        err: err
      });

    } else {
      // console.log(Newsletter[0]);
        const documentname=Newsletter[0].documentname;
        console.log(documentname);
        Markup = entities.decode(Newsletter[0].markup);
      // console.log(Markup);
      DecodedMarkup = JSON.parse(JSON.stringify(Markup));
      DecodedMarkup = DecodedMarkup.replace(/\\/g, "");
      //     console.log(DecodedMarkup);
      head = '<div id="pageHeader">' + DecodedHeader + '</div><div id="pageFooter">' + DecodedFooter + '</div>';
      body = DecodedStructure + DecodedMarkup;
      html = head + body;
      // console.log(head);
      // console.log(html);
      //  pdf.create(html).toBuffer(function (err, buffer) {
      //   if (err) return console.log(err);
      //   console.log('This is a buffer:');
      //   console.log(buffer);
      //   bufferfile = buffer;
      //   console.log(bufferfile);

  let StoreNewsLetter = new ExportNewsLetter({
    Templateid: req.body._templateid,
    Structureid: req.body._structureid,
    NewsLetterid: req.body._newsLetterid,
    Userid: req.body.userid,
    ExportDate: Date.now(),
    ExportBy: req.body.exportedby
  });
  let filext = '.html';
  let filename = documentname + filext;
  ExportNewsLetter.storeExprtNewsLetter(StoreNewsLetter, (err, store) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Faild to Export'
      });
    } else {
      res.setHeader('Content-Type', 'text/html','charset=utf-8');
      res.setHeader('Content-Disposition', 'attachment;filename=' + filename);
      res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
      res.send(html);
    }
  });
    }
  });
     
});


// This APi IS OPtional for Storig And Retrive the API
router.get('/getpdf', function (req, res) {
  console.log(filepath.file);
  if (typeof filepath.file === "undefined") {
    res.json({
      success: false,
      message: 'File is already created'
    });
  } else {
    console.log(path.join(filepath.file));
    var file = fs.createReadStream(path.join(filepath.file));
    var stat = fs.statSync(path.join(filepath.file));
    var filename = path.basename(path.join(filepath.file));
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf', 'filename=' + filename);
    // console.log(file);
    //res.setHeader('Content-Disposition', 'attachment; filename=demo.pdf');
    // res.setHeader('Content-Disposition', 'attachment;filename='+filename);
    file.pipe(res);
  }
});


router.get('/gethtml', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/template.html'));
});

module.exports = router;
