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
            Cadun.login(438, location.href, false, function(data) {
                console.log(data);
                //window.location.href = self.homeLogadaUrl;
            });
            
            
            /*Cadun.authorize(438, function(user) {
                if (user.status == 'authorized') {
                    //window.location.href = self.homeLogadaUrl;
                    console.log(user);
                } else {
                    Cadun.login(438, location.href, false, function(data) {
                        console.log("logoff");
                        //window.location.href = self.homeLogadaUrl;
                    });
                }
            });*/

            /*Cadun.authorize(Cadun.serviceId, function(h) {
                Cadun.user.me = h;
                if (h !== null && h.token !== null) {
                    Cadun.util.setCookie("GLBID", h.token)
                }
                if (typeof(Cadun.callback) == "function") {
                    Cadun.callback(h);
                    Cadun.callback = null
                }
            });*/
        }
    }
})();