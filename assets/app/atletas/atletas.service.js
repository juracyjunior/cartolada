(function(){
    "use strict";

    angular.module("app").
        service("atletasService", ["apiService", atletasService]);

    function atletasService(){
        return {
            getAllPosicoes: getAllPosicoes,
            getAllStatus: getAllStatus
        };

        function getAllPosicoes()
        {
            return apiService.getLocal("json/posicoes.json");
        }

        function getAllStatus()
        {
            return apiService.getLocal("json/status.json");
        }
    }
})();