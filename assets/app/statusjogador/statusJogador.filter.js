(function() {
    "use strict";

    angular.module("app.controls")
        .filter('statusJogador', [statusJogador])
        .filter('statusJogadorNome', [statusJogadorNome]);

    function statusJogador(lista, id)
    {
        return function (lista, id) {
            if (!lista || !id) return {};
            return lista[id];
        };
    }

    function statusJogadorNome(lista, id)
    {
        return function (lista, id) {
            if (!lista || !id) return {};
            return lista[id].nome;
        };
    }
})();