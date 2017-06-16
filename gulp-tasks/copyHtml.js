"use strict";

let gulp = require("gulp");
let rename = require("gulp-rename");
let config = require("./config.js");

gulp.task("copy:html", function() {
    console.log("copyHtml");

    if (config.prod) {
        gulp.src("server.prod.js")
            .pipe(rename("server.js"))
            .pipe(gulp.dest(config.buildDir));
    }

    return gulp.src(config.sourceHTML)
        .pipe(gulp.dest(config.buildDir));
});