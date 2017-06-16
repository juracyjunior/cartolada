"use strict";

let gulp = require("gulp");
let jshint = require("gulp-jshint");
let clean = require("gulp-clean");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let args = require("yargs");
let config = require("./config.js");

gulp.task("jshint", function () {
	console.log("jshint");
	return gulp.src(config.sourceJS)
	    .pipe(jshint())
	    .pipe(jshint.reporter("default"));
});

gulp.task("jsmin", ["jshint"], function () {
	if (config.prod){
		console.log("jsmin prod");
		return gulp.src(config.sourceJS)
			.pipe(uglify())
			.pipe(concat(config.fileJS))
			.pipe(gulp.dest(config.distJS));
	}
	else {
		console.log("jsmin dev");
		return gulp.src(config.sourceJS)
			.pipe(concat(config.fileJS))
			.pipe(gulp.dest(config.distJS));
	}
}); 