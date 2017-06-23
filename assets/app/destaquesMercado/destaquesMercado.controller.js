(function(){
    "use strict";

    angular.module("app").
        controller("destaquesMercadoController", ["destaquesMercadoService", "apiService", "$rootScope", destaquesMercadoController]);

    function destaquesMercadoController(destaquesMercadoService, apiService, $rootScope)
    {
        /*jshint validthis:true*/
        var vm = this;

        $rootScope.$page.doRefresh = doRefresh;

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
            vm.data = response.data;
            console.log(vm.data);
        }

        function doRefresh()
        {
            getDestaquesMercado();
        }
    }
})();