"use strict";

let gulp = require("gulp");
let runSequence = require("run-sequence");

gulp.task("default", function() {
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