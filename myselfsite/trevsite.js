const express = require("express");
const app = express();
//const greeting = require("./greet.js");
//const mysql = require("mysql");
const bodyparser = require("body-parser");
const path = require("path");

// app.set("views", __dirname + "/views");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public", {"extensions": ["css"]}));
app.use(express.static("media",{"extensions": ["png","jpg"]}));
app.use(express.static("vendor", {"extensions": ["css"]}))
app.use(express.static("js",{"extensions": ["js"]}))
app.use(express.urlencoded({ "extended": true}));
app.set("view engine", "ejs");

app.listen(8000, (err)=>{
    if (err) throw (err);
    console.log("server has started on port 8000");
});

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/details1", function(req,res){
    res.render("details1");
});
app.get("/details2", function(req,res){
    res.render("details2");
});

app.get("/details3", function(req,res){
    res.render("details3");
});

app.get("/details4", function(req,res){
    res.render("details4");
});

app.get("/details5", function(req,res){
    res.render("details5");
});

app.get("/details6", function(req,res){
    res.render("details6");
});

