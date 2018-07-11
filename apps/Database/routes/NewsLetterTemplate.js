/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();
var Entities = require('html-entities').AllHtmlEntities;
var NewsLetterTemplate = require('../models/NewsLetterTemplate');

var entities = new Entities();

//save templates
router.post('/savetemplate', (req, res) => {


    var EncodedHeader = entities.encode(req.body.Header);
    console.log(EncodedHeader);

    var EncodedFooter = entities.encode(req.body.Footer);
    console.log(EncodedFooter);

    let NewTemplate = new NewsLetterTemplate({
        TemplateName: req.body.Templatename,
        Header: EncodedHeader,
        Footer: EncodedFooter,
        CraetedBy: req.body.Createdby,
        CreatedDate: Date.now(),
        Userid: req.body.Userid
    });

    NewsLetterTemplate.StoreNewsLetterTemplate(NewTemplate, (err, newsletter) => {
        if (err) {
            res.json({
                err: err,
                success: false,
                message: 'please try again later'
            });

        } else {
            res.json({
                success: true,
                message: 'Template stored succesfully',
                _id: newsletter._id
            });
        }
    });

});

// all templates
router.get('/templates', (req, res) => {

    NewsLetterTemplate.getNewsLetterTemplates((err, Templates) => {
        if (err) {
            res.json({
                message: 'No Resumes',
                err: err,
                success: false
            });

        } else {
            res.json({
                success: true,
                Templates: Templates
            });
        }
    });


});

//view Template
router.post('/viewtemplate', (req, res) => {

    NewsLetterTemplate.getNewsLetterTemplate(req.body._id, (err, Template) => {
        if (err) {
            res.json({
                err: err,
                success: false,
            });
        } else {

         
                var DecodedHeader = entities.decode(Template[0].Header);
                console.log(DecodedHeader);

                var DecodedFooter = entities.decode(Template[0].Footer);
                console.log(DecodedFooter);

                res.json({
                    TemplateName: Template[0].TemplateName,
                    Header: DecodedHeader,
                    Footer: DecodedFooter,
                    CreatedDate: Template[0].CreatedDate,
                    CraetedBy: Template[0].Createdby,
                    Userid: Template[0].Userid,
                });
            
        }
    });

});

// Update or edit Tepmplate
router.put('/updatetemplate', function (req, res) {
    const Templateid = req.body._id;

    var EncodedHeader = entities.encode(req.body.Header);
    console.log(EncodedHeader);

    var EncodedFooter = entities.encode(req.body.Footer);
    console.log(EncodedFooter);

    let UpdatedTemplate = new NewsLetterTemplate({
        _id:req.body._id,
        TemplateName: req.body.Templatename,
        Header: EncodedHeader,
        Footer: EncodedFooter,
        CreatedBy: req.body.Createdby,
        CreatedDate: Date.now(),
        Userid: req.body.Userid
    });

    NewsLetterTemplate.findByIdAndUpdate(Templateid, UpdatedTemplate, function (err, Template) {
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
                Template: Template._id,
            });
        }
    });
});

// delete the Template
router.post('/deletetemplate', (req, res) => {
    console.log(req.body._id);
    NewsLetterTemplate.findByIdAndRemove(req.body._id, function (err, callback) {
        if (err) {
            res.json({
                success: false,
                Message: 'Delete Unsuccessful',
                err: err
            });
        } else {
            res.json({
                success: true,
                Message: 'Template Deleted succesfully',
                _id: callback._id

            });
        }
    });
});

//Duplicate Template

router.post('/duplicatetemplate', function (req, res) {
    var Templateid = req.body._id;
    console.log(Templateid);
    NewsLetterTemplate.getNewsLetterTemplate(Templateid, (err, Template) => {
      if (err) {
        res.json({
          err: err,
          success: false,
          msg: 'No Templates'
        });
  
      } else {
        let DuplicateNewsletterTemplate = new NewsLetterTemplate({
        TemplateName:Template[0].TemplateName,
        Header: Template[0].Header,
        Footer: Template[0].Footer,
        CraetedBy: Template[0].CreatedBy,
        CreatedDate: Template[0].CreatedDate,
        Userid: Template[0].Userid
        });
        NewsLetterTemplate.StoreNewsLetterTemplate(DuplicateNewsletterTemplate, (err, newsletter) => {
          if (err) {
            res.json({
              success: false,
              msg: 'failed to strore',
              err: err,
            });
          } else {
            res.json({
              success: true,
              msg: 'Newsletter Template Copied successfully',
              Template: Template
            });
  
          }
        });
  
      }
    });
  });




module.exports = router;