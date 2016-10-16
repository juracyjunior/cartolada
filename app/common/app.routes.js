(function() {
    "use strict";

    angular.module("app.common").
        config(["$stateProvider", "$urlRouterProvider", routeConfigurator]);

    function routeConfigurator($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise("/home");

        var routes = getRoutes();
        
        routes.forEach(function(r) {
            r.controllerAs = "vm";
            r.templateUrl = "../../" + r.templateUrl; 
            $stateProvider.state(r.state, r);
        });
    }

    function getRoutes()
    {
        return [
            {
                state: "home",
                url: "/home",
                controller: "mainController",
                templateUrl: "home/html/home.html",
                title: "paginas.home"
            }
        ];
    }
})();