(function(){
    "use strict";

    angular.module("app").
        controller("scoutsController", ["atletasService", "apiService", "orderByFilter", scoutsController]);

    function scoutsController(atletasService, apiService, orderBy)
    {
        /*jshint validthis:true*/
        var vm = this;

        vm.posicoes = [];
        vm.clubes = [];
        vm.atletas = [];

        vm.ordenarPorCampo = "pontuacao";
        vm.ordemCrescente = true;
        vm.ordenarPor = ordenarPor;
        
        vm.getItensPagina = getItensPagina;
        vm.paginacao = paginacao;
        vm.pagina = [];
        vm.qtdPaginas = 0;
        vm.paginaAtual = 1;
        var tamanhoPagina = 20;

        vm.filtrar = filtrar;

        init();

        function init(){
            getScouts();
        }

        function getScouts()
        {
            atletasService.getScouts().then(onSuccess, apiService.handleResponse);
        }

        function onSuccess(response)
        {
            vm.data = response.data;
            vm.posicoes = vm.data.posicoes;
            vm.clubes = vm.data.clubes;

            for (var a in vm.data.atletas) {
                vm.atletas.push(vm.data.atletas[a]);
            }

            //vm.atletas = vm.data.atletas;
            console.log(vm.data);
            filtrar();
        }

        function filtrar()
        {
            vm.atletasFiltrado = angular.copy(vm.atletas);
            ordenar();
            vm.qtdPaginas = Math.round(vm.atletasFiltrado.length / tamanhoPagina) + 1;
            getItensPagina(vm.paginaAtual);
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

            vm.paginaAtual = pagina;
        }

        function ordenarPor(ordem)
        {
            if (vm.ordenarPorCampo !== ordem) {
                vm.ordemCrescente = true;
            } else {
                vm.ordemCrescente = !vm.ordemCrescente;
            }
            vm.ordenarPorCampo = ordem;
            filtrar();
        }

        function ordenar()
        {
            vm.atletasFiltrado = orderBy(vm.atletasFiltrado, vm.ordenarPorCampo, vm.ordemCrescente);
        }

        function paginacao()
        {
            var paginas = [];
            for(var i = 1; i <= vm.qtdPaginas; i++)
            {
                paginas.push({index: i});
            }
            return paginas;
        }
    }
})();