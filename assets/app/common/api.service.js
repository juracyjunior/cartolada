(function() {
    "use strict";
    
    angular.module("app.common").
        service("apiService", ["$rootScope", "$window", "$http", "parametroService", apiService]);

    function apiService($rootScope, $window, $http, parametroService)
    {
        var baseAddress = parametroService.byName("baseUrlBackEnd");
        var baseAddressLocal = parametroService.byName("baseUrl");

        var service = 
        {
            init: init,
            get: get,
            getLocal: getLocal,
            post: post,
            put: put,
            postFormData: postFormData
        };

        return service;

        function init()
        {
            var accessToken = localStorage.token;

            if (!accessToken) {
                //$window.location.href = "/security";
                return false;
            }

            $http.defaults.headers.common.Authorization = "Bearer " + accessToken;

            return true;
        }

        function getLocal(url) 
        {
            return $http.get(baseAddressLocal + url);
        }

        function get(url, data, config) 
        {
            return $http.get(handleUrl(url), { params: data }, config);
        }

        function post(url, data, config) 
        {
            return $http.post(handleUrl(url), data, config);
        }

        function put(url, data, config) 
        {
            return $http.put(handleUrl(url), data, config);
        }

        function postFormData(url, data, config) 
        {
            var configDefault = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };

            config = config || {};

            angular.extend(config, configDefault);

            return post(url, $.param(data), config);
        }

        function handleUrl(url) 
        {
            return baseAddress + url;
        }
    }
})();