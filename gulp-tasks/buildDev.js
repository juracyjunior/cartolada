"use strict";

let gulp = require("gulp");
let runSequence = require("run-sequence");

gulp.task("build:dev", function() {
    runSequence(
        "clean",
        [
            "sass",
            "jsmin",
            "copy:html",
            "copy:lib",
            "copy:resources"
        ],
        "watch"
    )
});