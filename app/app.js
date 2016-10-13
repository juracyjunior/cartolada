(function(){
    "use strict";

    angular.module("app.base",[]);
    angular.module("app.common",[]);

    angular.module("app",[
        "ngSanitize",
        "ngMessages",

        "blockUI",
        "ui-notification",
        "pascalprecht.translate",
        "ui.router",

        "app.base",
        "app.common"
    ]);
})();