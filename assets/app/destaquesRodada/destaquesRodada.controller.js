(function(){
    "use strict";

    angular.module("app").
        controller("destaquesRodadaController", ["destaquesRodadaService", "apiService", "$locale", destaquesRodadaController]);

    function destaquesRodadaController(destaquesRodadaService, apiService, $locale)
    {
        /*jshint validthis:true*/
        var vm = this;

        init();

        function init(){
            getDestaquesRodada();
        }

        function getDestaquesRodada()
        {
            destaquesRodadaService.get().then(onSuccess, apiService.handleResponse);
        }

        function onSuccess(response)
        {
            console.log(response.data);
            vm.data = response.data;
        }
    }
})();