(function() {
    "use strict";

    angular.module("app.controls")
        .filter('clube', [clube])
        .filter('clubeEscudo', [clubeEscudo]);

    function clube(lista, id)
    {
        return function (lista, id) {
            if (!lista || !id) return {};
            return lista[id];
        };
    }

    function clubeEscudo(lista, id)
    {
        return function (lista, id) {
            if (!lista || !id) return {};
            return lista[id].escudos['60x60'];
        };
    }
})();