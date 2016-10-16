"use strict";

let gulp = require("gulp");
let jshint = require("gulp-jshint");
let clean = require("gulp-clean");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let es = require("event-stream");
let htmlmin = require("gulp-htmlmin");
let runSequence = require("run-sequence");
let rename = require("gulp-rename");
//let watch = require("gulp-watch");
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let gutil = require('gulp-util');
let argv = require('yargs').argv;
let browserSync = require('browser-sync');
//let config = require('./gulp.config.js');

/************************************************
 * Variáveis
 ************************************************/

let deployPath      = "./dist",
	deploySrcApp    = "./app/**/*.html",
	deploySrcCSS    = "./css/**/*.*",
	deploySrcFonts  = "./fonts/**/*.*",
	deploySrcImage  = "./img/**/*.*",
	deploySrcJS     = "./js/**/*.*",
	deploySrcJSon   = "./json/**/*.*", /* TEMPORÁRIO */

	deployRoot      = deployPath + "/**/*.*",

	deployDestApp   = deployPath + "/app",
	deployDestCSS   = deployPath + "/css",
	deployDestFonts = deployPath + "/fonts",
	deployDestImage = deployPath + "/img",
	deployDestJS    = deployPath + "/js",
	deployDestJSon  = deployPath + "/json"; /* TEMPORÁRIO */

let sassOptions = {
	errLogToConsole: true,
  	sourceComments: (argv._[0] === "deploy") ? '' : true,
  	outputStyle: "compressed"//(argv._[0] === "deploy") ? 'compressed' : 'expanded'
};

let buildAppSrcJS   = "./app/**/*.js",
	buildAppSrcCSS  = "./scss/**/*.scss",
	buildAppFileJS  = "scripts.min.js",
	buildAppFileCSS = "styles.min.css",
	buildLibSrcJS   = [
		"./lib/angular/angular.min.js",
		"./lib/angular-animate/angular-animate.min.js",
		"./lib/angular-block-ui/dist/angular-block-ui.min.js",
		"./lib/angular-messages/angular-messages.min.js",
		"./lib/angular-route/angular-route.min.js",
		"./lib/angular-sanitize/angular-sanitize.min.js",
		"./lib/angular-translate/angular-translate.min.js",
		"./lib/angular-ui-notification/dist/angular-ui-notification.min.js",
		"./lib/angular-ui-router/release/angular-ui-router.min.js"],
	buildLibSrcCSS  = [
		"./lib/font-awesome/css/font-awesome.min.css",
		"./lib/angular-block-ui/dist/angular-block-ui.min.css",
		"./lib/angular-ui-notification/dist/angular-ui-notification.min.css"],
	buildLibFileJS  = "libs.min.js",
	buildLibFileCSS = "libs.min.css",
	buildFontsSrc = [
		"./lib/font-awesome/fonts/**/*.*"
	],
	buildFontsClean = "./fonts/*.*",
	buildDestJS     = "./js",
	buildDestCSS    = "./css",
	buildDestFonts  = "./fonts";

//let loginSrcJS = "./security/**/*.js",
//	loginSrcCSS = "./scss/css/login.css",
//	loginDestJS  = "./js",
//	loginDestCSS = "./css";

let _watch = {
	paths: [
		buildAppSrcJS,
		buildAppSrcCSS,
		buildLibSrcJS,
		buildLibSrcCSS//,
		//loginSrcJS,
		//loginSrcCSS
	]
};

/************************************************
 * Deploy
 ************************************************/

gulp.task("deploy:clean", function(){
	return gulp.src(deployPath).pipe(clean());
});

gulp.task("deploy:copy", function () {
	return es.merge([
		gulp.src(deploySrcApp).pipe(gulp.dest(deployDestApp)),
		gulp.src(deploySrcCSS).pipe(gulp.dest(deployDestCSS)),
		gulp.src(deploySrcFonts).pipe(gulp.dest(deployDestFonts)),
		gulp.src(deploySrcImage).pipe(gulp.dest(deployDestImage)),
		gulp.src(deploySrcJS).pipe(gulp.dest(deployDestJS)),
		gulp.src(deploySrcJSon).pipe(gulp.dest(deployDestJSon))
    ]);
});

gulp.task("deploy", ["deploy:clean"], function (cb) {
	return runSequence("build", ["deploy:copy"], cb);
});

/************************************************
 * Build
 ************************************************/

/** Build - Clean **/

gulp.task("build:clean", function(cb){
	return runSequence(		[
		"build:clean:js",
		"build:clean:css",
		"build:clean:fonts"
	], cb);
});

gulp.task("build:clean:js", function(){
	return gulp.src(buildDestJS).pipe(clean());
});

gulp.task("build:clean:css", function(){
	return gulp.src(buildDestCSS).pipe(clean());
});

gulp.task("build:clean:fonts", function(){
	return gulp.src(buildFontsClean).pipe(clean());
});

/** Build - Compile **/

gulp.task("build:app:js:hint", function () {
	return gulp.src(buildAppSrcJS)
	    .pipe(jshint())
	    .pipe(jshint.reporter("default"));
});

/** Build - App **/

gulp.task("build:app:js", ["build:app:js:hint"], function () {
	return gulp.src(buildAppSrcJS)
		//.pipe(uglify())
		.pipe(concat(buildAppFileJS))
		.pipe(gulp.dest(buildDestJS));
}); 

gulp.task("build:app:css", function () {
	return gulp.src(buildAppSrcCSS)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', onError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(rename(buildAppFileCSS))
		.pipe(gulp.dest(buildDestCSS))
		.pipe(browserSync.reload({stream:true}));	
});

function onError(err) {
	let message = new gutil.PluginError(err.plugin, err.message).toString();
  	process.stderr.write(message + '\n');
  	gutil.beep();
}

/** Build - Lib **/

gulp.task("build:lib:js", function () {
	return gulp.src(buildLibSrcJS)
		.pipe(concat(buildLibFileJS))
		.pipe(gulp.dest(buildDestJS));
}); 

gulp.task("build:lib:css", function () {
	return gulp.src(buildLibSrcCSS)
		.pipe(concat(buildLibFileCSS))
		.pipe(gulp.dest(buildDestCSS));
});

/** Build - Fonts **/

gulp.task("build:fonts", function () {
	return gulp.src(buildFontsSrc)
		.pipe(gulp.dest(buildDestFonts));
});

/** Build - Login **/
/*
gulp.task("build:login:hint", function () {
	return gulp.src(loginSrcJS)
	    .pipe(jshint())
	    .pipe(jshint.reporter("default"));
});

gulp.task("build:login:js", function(){
	return gulp.src(loginSrcJS)
		.pipe(uglify())
		.pipe(concat("login.min.js"))
		.pipe(gulp.dest(loginDestJS));
});

gulp.task("build:login:css", function(){
	return gulp.src(loginSrcCSS)
		.pipe(concat("login.min.css"))
		.pipe(gulp.dest(loginDestCSS));
});

gulp.task("build:login", function () {
	return runSequence("build:login:hint", [
		"build:login:js",
		"build:login:css"
	]);
});
*/

/** Build - All **/

gulp.task("build", function(cb) {
	return runSequence(
		"build:clean", [
			"build:app:js", 
			"build:app:css",
			"build:lib:js",
			"build:lib:css",
			"build:fonts"/*,
			"build:login"*/
		], cb);
});

/** Build - Watch **/

gulp.task("watch", ["build"], function(cb) {
	gulp.watch(buildAppSrcCSS, {}, ["build:app:css"]);
	gulp.watch(_watch.paths, { interval: 3000 }, ["build"]);
});