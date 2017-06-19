"use strict";

let gulp = require("gulp");
let config = require("./config.js");

gulp.task("copy:resources", function () {
    console.log("copyResources");
    return gulp
        .src("assets/app/{img,fonts,json}/**/*")
        .pipe(gulp.dest(config.buildDir));
});