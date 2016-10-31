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
            //r.templateUrl = "../../" + r.templateUrl; 
            $stateProvider.state(r.state, r);
        });
    }

    function getRoutes()
    {
        return [
            {
                state: "home",
                url: "/home",
                title: "paginas.home"
            },
            {
                state: "statusmercado",
                url: "/status-mercado",
                title: "paginas.statusmercado",
                controller: "statusMercadoController",
                templateUrl: "statusMercado/statusMercado.html"
            },
            {
                state: "destaquesMercado",
                url: "/destaques-mercado",
                title: "paginas.destaquesmercado",
                controller: "destaquesMercadoController",
                templateUrl: "destaquesMercado/destaquesMercado.html"
            },
            {
                state: "destaquesRodada",
                url: "/destaques-rodada",
                title: "paginas.destaquesrodada",
                controller: "destaquesRodadaController",
                templateUrl: "destaquesRodada/destaquesRodada.html"
            },
            {
                state: "proximaspartidas",
                url: "/proximas-partidas",
                title: "paginas.proximaspartidas",
                controller: "partidasController",
                templateUrl: "partidas/partidas.html"
            },
            {
                state: "atletas",
                url: "/atletas",
                title: "paginas.atletas",
                controller: "atletasController",
                templateUrl: "atletas/atletas.html"
            }
        ];
    }
})();