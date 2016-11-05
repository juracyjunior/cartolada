(function() {
    "use strict";

    angular.module("app.controls")
        .filter('dataHora', [dataHora])
        .filter('dataHoraSrt', [dataHoraSrt]);

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

    var semana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    function dataHoraSrt(obj)
    {
        return function (obj)
        {
            var data = obj.toString().split(" ")[0].split("-");
            var hora = obj.toString().split(" ")[1];
            var dataObj = new Date(data);            
            return semana[dataObj.getDay()] + " " + dataObj.getDate().toString().lpad(2, "0") + "/" + (dataObj.getMonth() + 1).toString().lpad(2, "0") + " " + hora.substring(0, 5);
        };
    }
})();