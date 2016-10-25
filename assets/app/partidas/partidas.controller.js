(function(){
    "use strict";

    angular.module("app").
        controller("partidasController", ["partidasService", "apiService", partidasController]);

    function partidasController(partidasService, apiService)
    {
        /*jshint validthis:true*/
        var vm = this;

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
            console.log(response.data);
            vm.data = response.data;
        }
    }
})();