(function() {
    "use strict";

    angular.module("app.controls")
        .filter('atletaFoto', [atletaFoto]);

    function atletaFoto(url)
    {
        return function (url) {
            if (!url) return "";
            return url.replace('FORMATO','140x140');
        };
    }
})();