"use strict";

let gulp = require("gulp");
let concat = require("gulp-concat");
let es = require("event-stream");
let config = require("./config.js");

gulp.task("copy:lib", function() {
    return es.merge([
        gulp.src(config.sourceLibJS)
            .pipe(concat("libs.min.js"))
            .pipe(gulp.dest(config.distJS)),

        gulp.src(config.sourceLibCSS)
            .pipe(concat("libs.min.css"))
            .pipe(gulp.dest(config.distCSS)),

        gulp.src(config.sourceLibFont)
            .pipe(gulp.dest(config.distLibFont))
    ]);
});