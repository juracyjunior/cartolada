"use strict";

let gulp = require("gulp");
let clean = require("gulp-clean");
var config = require("./config.js");

gulp.task("clean", function(){
	return gulp.src(config.buildDir).pipe(clean());
});
