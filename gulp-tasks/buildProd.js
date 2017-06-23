"use strict";

var gulp = require("gulp");
var runSequence = require("run-sequence");
let config = require("./config.js");

gulp.task("prod", function() {
    config.prod = true;
    runSequence(
        "clean",
        [
            "sass",
            "jsmin",
            "copy:html",
            "copy:lib",
            "copy:resources"
        ],
        "zip"
    )
});