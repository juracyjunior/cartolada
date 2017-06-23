"use strict";

var gulp = require("gulp");
var zip = require("gulp-zip");
let config = require("./config.js");

gulp.task("zip", function() {
    return gulp
      .src(config.buildDir + '/**/*')
      .pipe(zip('dist.zip'))
      .pipe(gulp.dest(config.buildDir));
});