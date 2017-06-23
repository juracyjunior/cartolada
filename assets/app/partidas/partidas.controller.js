(function(){
    "use strict";

    angular.module("app").
        controller("partidasController", ["partidasService", "apiService", "$rootScope", partidasController]);

    function partidasController(partidasService, apiService, $rootScope)
    {
        /*jshint validthis:true*/
        var vm = this;

        $rootScope.$page.doRefresh = doRefresh;

        init();

        function init(){
            getPartidas();
        }

        function getPartidas()
        {
            partidasService.get().then(onSuccess, apiService.handleResponse);
        }

        function onSuccess(response)
        {
            vm.data = response.data;
        }

        function doRefresh()
        {
            getPartidas();
        }
    }
})();