/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const fs = require('fs');
const app= express();
var FroalaEditor = require('./lib/froalaEditor.js');

app.use(express.static(__dirname + '/'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({
  extended:false
}));

// Connect To Database
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, {
    promiseLibrary: require('bluebird')
  })
  .then(() => console.log(`Connected to database ${config.database}`))
  .catch((err) => console.log(`Database error: ${err}`));
// API ROUTES
const users = require('./routes/userRoutes');
const resume = require('./routes/ResumeRoutes');
const newsletter = require('./routes/NewsletterRoutes');
const usersresumes = require('./routes/UserResumeRoutes');
const dummy = require('./routes/BlankResumeRoutes');
const updatedata = require('././routes/UserResumedata');
const updateprofile = require('././routes/profileupdate');
const role= require('././routes/userrole');
const news=require('./routes/newsletterroute');
const pdfexport  = require('./routes/exportNewsletter');
const NewsletterTemplate  = require('./routes/NewsLetterTemplate');
const NewsletterStructure  = require('./routes/NewsletterStructure');


//PORT Number
const port = 3000;
// var allowedorigin='localhost:4222';
// //CORS Middleware
// app.use(cors({
//   origin:function(origin,callback){
//     if(!origin) return callback(null, true);
//     if(allowedorigin.indexOf(origin)==-1){

//     }

//   }
// }));



//Set Static Folder
//app.use(express.static(path.join(__dirname, 'dist')));

//Body parser Middleware
app.use(bodyParser.json());

//
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/resume', resume);
app.use('/newsletter', newsletter);
app.use('/userresumes', usersresumes);
app.use('/dummy', dummy);
app.use('/update', updatedata);
app.use('/profile', updateprofile);
app.use('/getrole',role);
app.use('/newsletter',news);
app.use('/export',pdfexport);
app.use('/newslettertemplate',NewsletterTemplate);
app.use('/newsletterstructure',NewsletterStructure);
//index Route
// app.get('/', (req, res) => {
//   res.send('Invalid Endpoint');
// });
//
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });



//Start Server
app.listen(port, () => {
  console.log('Node Server Started on Port' + port);
});


/** Floara image configuration... */


var filesDir = path.join(path.dirname(require.main.filename), 'uploads');
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}


//upload user images in uploads folder
app.post('/upload_image', function (req, res) {
  FroalaEditor.Image.upload(req, '/uploads/', function (err, data) {

    if (err) {
      return res.send(JSON.stringify(err));
    }
   
    var thishost = req.protocol + '://' + req.get('host');
    console.log("thishost = " + thishost);
    var fullurl = thishost + data.link;
    console.log("fullurl = " + fullurl);
    // update the original data.link that contained only
    // the URI to the complete URL that includes hostname
    data.link = fullurl;
    console.log(data);
    res.send(data);
  });
});
