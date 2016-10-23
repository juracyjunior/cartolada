(function() {
    "use strict";

    angular.module("app.controls")
        .filter('dataHora', [dataHora]);

    function dataHora()
    {
        return function (obj) {
            if (!obj) return "";
            return obj.dia.toString().lpad(2,"0") + "/" + 
                obj.mes.toString().lpad(2,"0") + "/" + 
                obj.ano + " " + 
                obj.hora.toString().lpad(2,"0") + ":" + 
                obj.minuto.toString().lpad(2,"0");
        };
    }
})();