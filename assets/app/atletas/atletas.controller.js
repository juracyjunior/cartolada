(function(){
    "use strict";

    angular.module("app").
        controller("atletasController", ["atletasService", "apiService", "orderByFilter", atletasController]);

    function atletasController(atletasService, apiService, orderBy)
    {
        /*jshint validthis:true*/
        var vm = this;
        vm.orderBy = 'apelido';

        vm.pagina = [];
        vm.qtdPaginas = 0;

        vm.posicoes = [];
        vm.clubes = [];
        vm.status = [];
        vm.atletas = [];

        var tamanhoPagina = 20;

        init();

        function init(){
            getAtletas();
        }

        function getAtletas()
        {
            atletasService.get().then(onSuccess, apiService.handleResponse);
        }

        function onSuccess(response)
        {
            console.log(response.data);
            vm.data = response.data;
            
            vm.posicoes = vm.data.posicoes;
            vm.clubes = vm.data.clubes;
            vm.status = vm.data.status;
            vm.atletas = orderBy(vm.data.atletas, vm.orderBy);
            
            vm.qtdPaginas = Math.round(vm.atletas.lenght / tamanhoPagina) - 1;
            getItensPagina(1);
        }

        function getItensPagina(pagina)
        {
            var fim = (pagina * tamanhoPagina) - 1;
            var inicio = (fim - tamanhoPagina);
            vm.pagina = [];
            for (var i = inicio; i <= fim; i++)
            {
                vm.pagina.push(vm.atletas[i]);
            }
        }
    }
})();