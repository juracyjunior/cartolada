"use strict";

let gulp = require("gulp");
let config = require("./config.js");

gulp.task("copy:html", function() {
    return gulp.src(config.sourceHTML)
        .pipe(gulp.dest(config.buildDir));
});