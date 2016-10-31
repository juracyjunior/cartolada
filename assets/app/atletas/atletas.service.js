(function(){
    "use strict";

    angular.module("app").
        service("atletasService", ["apiService", atletasService]);

    function atletasService(apiService){
        return {
            getAllPosicoes: getAllPosicoes,
            getAllStatus: getAllStatus,
            get: get
        };

        function getAllPosicoes()
        {
            return apiService.getLocal("json/posicoes.json");
        }

        function getAllStatus()
        {
            return apiService.getLocal("json/status.json");
        }

        function get()
        {
            return apiService.get("atletas/mercado");
        }
    }
})();