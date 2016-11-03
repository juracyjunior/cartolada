(function(){
    "use strict";

    angular.module("app").
        service("partidasService", ["apiService", partidasService]);

    function partidasService(apiService)
    {
        return {
            get: get
        };

        function get()
        {
            return apiService.get("partidas");
        }
    }
})();