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
                templateUrl: "app/home/html/hom.html",
                title: "paginas.home"
            }
        ];
    }
})();