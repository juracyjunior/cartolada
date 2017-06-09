(function(){
    "use strict";

    angular.module("app").
        controller("atletasController", ["atletasService", "apiService", "orderByFilter", atletasController]);

    function atletasController(atletasService, apiService, orderBy)
    {
        /*jshint validthis:true*/
        var vm = this;
        
        vm.posicoes = [];
        vm.clubes = [];
        vm.status = [];
        vm.atletas = [];

        vm.ordenarPorCampo = "media_num";
        vm.tipoOrdem = true;
        vm.ordenarPor = ordenarPor;

        vm.pagina = [];
        vm.qtdPaginas = 0;
        vm.paginaAtual = 1;
        var tamanhoPagina = 20;

        vm.filtrar = filtrar;

        vm.statusFiltro = { id: 7 };   

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
            vm.data = response.data;
            vm.posicoes = vm.data.posicoes;
            vm.clubes = vm.data.clubes;
            vm.status = vm.data.status;
            vm.atletas = vm.data.atletas;
            filtrar();
        }

        function getItensPagina(pagina)
        {
            var fim = (pagina * tamanhoPagina) - 1;
            if (fim > vm.atletasFiltrado.length) { 
                fim = vm.atletasFiltrado.length - 1;
            }
            var inicio = (fim - tamanhoPagina) + 1;
            if (inicio < 0) { 
                inicio = 0;
            }
            delete vm.pagina;
            for (var i = inicio; i <= fim; i++)
            {
                if (!vm.pagina)
                    vm.pagina = [];
                vm.pagina.push(vm.atletasFiltrado[i]);
            }
        }

        function filtrar()
        {
            vm.atletasFiltrado = angular.copy(vm.atletas);
            if (vm.clubeFiltro)
            {
                vm.atletasFiltrado = vm.atletas.filterByField('clube_id', vm.clubeFiltro.id);
            }
            if (vm.posicaoFiltro)
            {
                if (vm.atletasFiltrado){
                    vm.atletasFiltrado = vm.atletasFiltrado.filterByField('posicao_id', vm.posicaoFiltro.id);
                } else {
                    vm.atletasFiltrado = vm.atletas.filterByField('posicao_id', vm.posicaoFiltro.id);
                }
            }
            if (vm.statusFiltro)
            {
                if (vm.atletasFiltrado){
                    vm.atletasFiltrado = vm.atletasFiltrado.filterByField('status_id', vm.statusFiltro.id);
                } else {
                    vm.atletasFiltrado = vm.atletas.filterByField('status_id', vm.statusFiltro.id);
                }
            }
            ordenar();
            vm.qtdPaginas = Math.round(vm.atletasFiltrado.length / tamanhoPagina) + 1;
            getItensPagina(vm.paginaAtual);
        }

        function ordenarPor(ordem)
        {
            if (vm.ordenarPorCampo !== ordem) {
                vm.tipoOrdem = true;
            } else {
                vm.tipoOrdem = !vm.tipoOrdem;
            }
            vm.ordenarPorCampo = ordem;
            filtrar();
        }

        function ordenar()
        {
            vm.atletasFiltrado = orderBy(vm.atletasFiltrado, vm.ordenarPorCampo, vm.tipoOrdem);
        }
    }
})();