(function(){
    "use strict";

    angular.module("app").
        controller("destaquesMercadoController", ["destaquesMercadoService", "apiService", destaquesMercadoController]);

    function destaquesMercadoController(destaquesMercadoService, apiService)
    {
        /*jshint validthis:true*/
        var vm = this;

        init();

        function init(){
            getDestaquesMercado();
        }

        function getDestaquesMercado()
        {
            destaquesMercadoService.get().then(onSuccess, apiService.handleResponse);
        }

        function onSuccess(response)
        {
            console.log(response.data);
            vm.data = response.data;
        }
    }
})();