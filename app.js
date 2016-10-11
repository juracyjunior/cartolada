(function(){
    "use strict";

    var app = angular.module("Cartolisse", []);

    app.controller("mainController", ["$http", mainController]);

    function mainController($http)
    {
        var vm = this;

        vm.call = call;

        init();

        function init()
        {
            
        }

        function call()
        {
            console.log("call");
            $http.get("/cartola/mercado/status").then(onSucess);
        }

        function onSucess(response)
        {
            console.log(response);
        }
    }

})();