(function() {
    "use strict";
    
    angular.module("app.common").
        service("parametroService", [parametroService]);

    function parametroService(apiService)
    {
        var params = {
            "baseUrl": { "value": "/json/" },
            "baseUrlBackEnd": {"value" : "http://localhost:3000/" },
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
