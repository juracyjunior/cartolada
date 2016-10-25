(function(){
    "use strict";

    angular.module("app").
        controller("statusMercadoController", ["$rootScope", "statusMercadoService", "apiService", statusMercadoController]);

    function statusMercadoController($rootScope, statusMercadoService, apiService)
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
            //console.log(response.data);
            vm.data = response.data;
            $rootScope.rodadaAtual = vm.data.rodada_atual;
        }
    }
})();