"use strict";

var express = require("express");
var http = require("https");
var app = express();
var port = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res, next){
    res.sendFile(__dirname + "/main/main.html");
});

app.use(express.static('.'));

app.listen(port, "0.0.0.0", function() {
    console.log("Servidor executando na porta " + port + "...");
});