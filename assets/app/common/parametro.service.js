(function() {
    "use strict";
    
    angular.module("app.common").
        service("parametroService", [parametroService]);

    function parametroService(apiService)
    {
        var params = {
            "baseUrl": { "value": "/json/" },
            "baseUrlBackEnd": {"value" : "https://api-jj.jelasticlw.com.br/" },
            "systemTitle": { "value": "Cartolada" },
            "systemSubtitle": { "value": "O portal que ajudar a mitar no Cartola FC" }
        };

        return {
            init: init,
            byName: byName
        };        

        function init()
        {
            //params = apiService.getlocal("parametros.json");
        }

        function byName(name)
        {
            if (!params || params.length <= 0)
            {
                return "";
            }
            return params[name].value;
        } 
    }
})();
