"use strict";

var express = require("express");
var http = require("https");
var port = 3000;
var gulp = require("gulp");
require("./gulpfile.js");

var app = express();

app.use(express.static('dist'));

var pages = {
    login: __dirname + "/security/html/login.html",
    app: __dirname + "/dist/main/html/main.html"
}

function getOptions(url, path)
{
    return {
        "method": "GET",
        "hostname": "api.cartolafc.globo.com",
        "port": null,
        "path": path,
        "headers": {
            "cache-control": "no-cache"
        }
    };
}

app.get("/cartola/mercado/status", function(req, res, next){
    var options = getOptions("/mercado/status");
    var rq = http.request(options, function (r) {
        var chunks = [];
        r.on("data", function (chunk) {
            chunks.push(chunk);
        });
        r.on("end", function () {
            var body = Buffer.concat(chunks);
            res.send(body.toString());
        });
    });
    rq.end();
});

app.get("/cartola/pos-rodada/destaques", function(req, res, next){
    var options = getOptions("/pos-rodada/destaques");
    var rq = http.request(options, function (r) {
        var chunks = [];
        r.on("data", function (chunk) {
            chunks.push(chunk);
        });
        r.on("end", function () {
            var body = Buffer.concat(chunks);
            res.send(body.toString());
        });
    });
    rq.end();
});

app.get("/", function(req, res, next){
    res.sendFile(__dirname + "/dist/main/html/main.html");
});

app.listen(port);

console.log("Servidor executando na porta " + port + "...");

/* Gulp */

if (gulp.hasTask("build:dev")) { 
    gulp.start("build:dev");
}