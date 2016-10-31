(function(){
    "use strict";

    angular.module("app").
        service("destaquesRodadaService", ["apiService", destaquesRodadaService]);

    function destaquesRodadaService(apiService)
    {
        return {
            get: get
        };

        function get()
        {
            return apiService.get("pos-rodada/destaques");
        }
    }
})();