"use strict";

let gulp = require("gulp");
let config = require("./config.js");

gulp.task("watch", function(){
    console.log("Build dev...");
    console.log("watch sass...");
    gulp.watch(config.sourceCSS, ["sass"]);
    console.log("watch html...");
    gulp.watch(config.sourceHTML, ["copy:html"]);
    console.log("watch js...");
    gulp.watch(config.sourceJS, ["jsmin"]);
    console.log("Build dev...Pronto!");
});