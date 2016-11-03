(function(){
    "use strict";

    angular.module("app.common").
        controller("mainController", ["statusMercadoService", "apiService", mainController]);

    function mainController(statusMercadoService, apiService)
    {
        /*jshint validthis:true*/
        var vm = this;

        init();

        function init(){
            getStatusMercado();
        }

        function getStatusMercado()
        {
            statusMercadoService.get().then(onSuccess, apiService.handleResponse);
        }

        function onSuccess(response)
        {
            console.log(response.data);
            vm.data = response.data;
        }
    }
})();