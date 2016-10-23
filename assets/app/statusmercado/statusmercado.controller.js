(function(){
    "use strict";

    angular.module("app").
        controller("statusMercadoController", ["statusMercadoService", "apiService", statusMercadoController]);

    function statusMercadoController(statusMercadoService, apiService)
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