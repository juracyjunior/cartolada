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
            var ano = obj.substring(0,4);
            var mes = obj.substring(5,7);
            var dia = obj.substring(8,10);

            var hor = obj.substring(11,13);
            var min = obj.substring(14,16);

            var dataObj = new Date(ano, mes-1, dia, hor, min, 0, 0);

            return semana[dataObj.getDay()] + " " + dataObj.getDate().toString().lpad(2, "0") + "/" + (dataObj.getMonth() + 1).toString().lpad(2, "0") + " " + hor + ":" + min;
        };
    }
})();