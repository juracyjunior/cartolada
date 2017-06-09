"use strict";

var express = require("express");
var http = require("https");
var port = 3001;
var gulp = require("gulp");
require("./gulpfile.js");

var app = express();

var pages = {
    login: __dirname + "/security/html/login.html",
    app: __dirname + "/dist/main/html/main.html"
}

app.get("/", function(req, res, next){
    res.sendFile(__dirname + "/dist/main/main.html");
});

app.use(express.static('dist'));

app.listen(port, "0.0.0.0", function() {
    console.log("Servidor executando na porta " + port + "...");
});

/* Gulp */

if (gulp.hasTask("default")) { 
    gulp.start("default");
}