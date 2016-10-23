(function(){
    "use strict";

    angular.module("app").
        service("destaquesMercadoService", ["apiService", destaquesMercadoService]);

    function destaquesMercadoService(apiService)
    {
        return {
            get: get
        };

        function get()
        {
            return apiService.get("cartola/mercado/destaques");
        }
    }
})();