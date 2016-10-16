"use strict";

let gulp = require("gulp");
let config = require("./config.js");

gulp.task("copy:resources", function () {
    return gulp
        .src(config.appDir + "/{img,fonts}/**/*")
        .pipe(gulp.dest(config.buildDir));
});