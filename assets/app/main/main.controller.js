(function(){
    "use strict";

    angular.module("app.common").
        controller("mainController", ["statusMercadoService", "apiService", mainController]);

    function mainController(statusMercadoService, apiService)
    {
        /*jshint validthis:true*/
        var vm = this;

        vm.loginGlobo = loginGlobo;

        init();

        function init(){
            getStatusMercado();
            //Cadun = {};
        }

        function getStatusMercado()
        {
            statusMercadoService.get().then(onSuccess, apiService.handleResponse);
        }

        function onSuccess(response)
        {
            vm.data = response.data;
        }

        function loginGlobo()
        {
            Cadun.authorize(438, function(user) {
                if (user.status == 'authorized') {
                    window.location.href = self.homeLogadaUrl;
                } else {
                    Cadun.login(438, location.href, false, function(data) {
                        window.location.href = self.homeLogadaUrl;
                    });
                }
            });
        }
    }
})();