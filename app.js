// LA HACKS


// ********** INIT **********

var express = require("express");
var app = express();

app.set("view engine", "ejs"); //expect ejs in rendering
app.use(express.static(__dirname + "/public")); //to access public folder (CSS STYLESHEET)


// new firebase stuff

const admin = require('firebase-admin');

var serviceAccount = require('../firebaseKeyLAHacks.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();


// setting smt

var docRef = db.collection('Restrictions').doc('Eric');

var setEric = docRef.set({
  cheese: false
});




// ********** ROUTES **********


// Home ROUTE
app.get("/",function(req,res){
    res.render("home");
});


// Second Page ROUTE
app.get("/results",function(req,res){
    res.render("results");
});


// Second Page ROUTE
app.get("/secondPage",function(req,res){
    res.render("secondPage");
});


// IF YOU WANT MORE WEBPAGES JUST FOLLOW FORMAT ABOVE




// ********** RUN SERVER **********



// START SERVER - to run use command "node app.js" then visit http://localhost:3000
app.listen(3000, '127.0.0.1', function(){
    console.log("LA Hacks Running");
});