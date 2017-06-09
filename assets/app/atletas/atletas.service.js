(function(){
    "use strict";

    angular.module("app").
        service("atletasService", ["apiService", atletasService]);

    function atletasService(apiService){
        return {
            getAllPosicoes: getAllPosicoes,
            getAllStatus: getAllStatus,
            getMercado: getMercado,
            getScouts: getScouts
        };

        function getAllPosicoes()
        {
            return apiService.getLocal("json/posicoes.json");
        }

        function getAllStatus()
        {
            return apiService.getLocal("json/status.json");
        }

        function getMercado()
        {
            return apiService.get("atletas/mercado");
        }

        function getScouts()
        {
            return apiService.get("atletas/pontuados");
        }
    }
})();