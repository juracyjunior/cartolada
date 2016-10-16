"use strict";

let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let sourcemaps = require("gulp-sourcemaps");
let gutil = require("gulp-util");
let browserSync = require("browser-sync");
let rename = require("gulp-rename");
let args = require("yargs");
let config = require("./config.js");

let sassOptions = {
  	outputStyle: args.prod ? "compressed" : "expanded"
};

gulp.task("sass", function() {
	console.log("sass");
    return gulp.src(config.sourceCSS)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on("error", onError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(rename(config.fileCSS))
		.pipe(gulp.dest(config.distCSS))
		.pipe(browserSync.reload({stream:true}));
});

function onError(err) {
	let message = new gutil.PluginError(err.plugin, err.message).toString();
  	process.stderr.write(message + "\n");
  	gutil.beep();
}