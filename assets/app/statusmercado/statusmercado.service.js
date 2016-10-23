(function(){
    "use strict";

    angular.module("app").
        service("statusMercadoService", ["apiService", statusMercadoService]);

    function statusMercadoService(apiService)
    {
        return {
            get: get
        };

        function get()
        {
            return apiService.get("cartola/mercado/status");
        }
    }
})();