(function() {
    "use strict";

    angular.module("app.common").
        config(["$stateProvider", "$urlRouterProvider", routeConfigurator]);

    function routeConfigurator($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise("/mercado");

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
                url: "/partidas",
                title: "paginas.proximaspartidas",
                controller: "partidasController",
                templateUrl: "partidas/partidas.html"
            },
            {
                state: "atletas",
                url: "/mercado",
                title: "paginas.atletas",
                controller: "atletasController",
                templateUrl: "atletas/atletas.html"
            }
        ];
    }
})();