(function() {
    "use strict";

    angular.module("app.controls")
        .filter('posicaoAbreviacao', [posicaoAbreviacao])
        .filter('posicaoNome', [posicaoNome]);

    function posicaoAbreviacao(lista, id)
    {
        return function (lista, id) {
            if (!lista || !id) return "";
            return lista[id].abreviacao;
        };
    }

    function posicaoNome(lista, id)
    {
        return function (lista, id) {
            if (!lista || !id) return "";
            return lista[id].nome;
        };
    }
})();