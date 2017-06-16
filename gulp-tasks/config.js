"use strict";

module.exports = {
    appDir: "app",
    buildDir: "dist",
    prod: false,

    sourceCSS: "assets/scss/**/*.scss",
    fileCSS: "styles.min.css",
    sassOutputStyle: "compressed",
    distCSS: "dist/css",

    sourceJS : "assets/app/**/*.js",
    fileJS : "scripts.min.js",
    distJS : "dist/js",

    sourceHTML : "assets/app/**/*.html",

    sourceLibJS: [
        "lib/angular/angular.min.js",
        "lib/angular-block-ui/dist/angular-block-ui.min.js",
        "lib/angular-messages/angular-messages.min.js",
        "lib/angular-sanitize/angular-sanitize.min.js",
        "lib/angular-translate/angular-translate.min.js",
        "lib/angular-ui-notification/dist/angular-ui-notification.min.js",
        "lib/angular-ui-router/release/angular-ui-router.min.js"
    ],
    sourceLibCSS: [
        "lib/angular-block-ui/dist/angular-block-ui.min.css",
        "lib/angular-ui-notification/dist/angular-ui-notification.min.css",
        "lib/font-awesome/css/font-awesome.min.css"
    ],
    sourceLibFont: "lib/font-awesome/fonts/**/*",
    distLibFont: "dist/fonts"
};