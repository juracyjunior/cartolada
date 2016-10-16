"use strict";

let gulp = require("gulp");
let config = require("./config.js");

gulp.task("watch", function(){
    console.log("Build dev...");
    gulp.watch(config.sourceCSS, ["sass"]);
    gulp.watch(config.sourceHTML, ["copy:html"]);
    gulp.watch(config.sourceJS, ["jsmin"]);
    console.log("Build dev...Pronto!");
});