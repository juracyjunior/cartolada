(function() {
    "use strict";

    angular.module("app.common").
        service("alertService", ["pageService", "Notification", alertService]);

    function alertService(pageService, Notification) 
    {
        var service = {
            clear: clear,
            add: add,
            addSuccess: addSuccess,
            addError: addError,
            addErrorResoponse: addErrorResoponse,
            addWarning: addWarning,
            addInfo: addInfo,
            handleResponse: handleResponse
        };

        return service;

        function clear() 
        {
            Notification.clearAll();
        }

        function add(type, title, message) 
        {
            Notification({message: message, title: title}, type);
        }

        function addError(message) 
        {
            /*jshint validthis:true */
            var self = this;
            self.add("error", pageService.translate("alertas.erro"), message);
        }

        function addErrorResoponse(title, message) 
        {
            /*jshint validthis:true */
            var self = this;
            self.add("error", title, message);
        }

        function addSuccess(message) 
        {
            /*jshint validthis:true */
            var self = this;
            self.add("success", pageService.translate("alertas.sucesso"), message);
        }

        function addInfo(message) 
        {
            /*jshint validthis:true */
            var self = this;
            self.add("info", pageService.translate("alertas.informacao"), message);
        }

        function addWarning(message) 
        {
            /*jshint validthis:true */
            var self = this;
            self.add("warning", pageService.translate("alertas.aviso"), message);
        }

        function handleResponse(response, defaultMessage) 
        {
            var self = service;
            var data = response.data;
            var statusCode = response.status;

            if (statusCode === 401) {
                self.addErrorResoponse(pageService.translate("alertas.erro"), pageService.translate("alertas.naoautorizado"));
                return;
            }

            if (statusCode === 404) {
                self.addErrorResoponse(pageService.translate("alertas.erro"), pageService.translate("alertas.naoEncontrado"));
                return;
            }

            if (statusCode >= 200 && statusCode < 400) {
                self.addSuccess(defaultMessage || pageService.translate("alertas.sucesso"));
                return;
            }

            if (statusCode >= 400) {
                var details = getErrorDetails(data, defaultMessage, statusCode);
                self.addErrorResoponse(details.title, details.error);
            }
        }

        function getErrorDetails(data, defaultMessage, statusCode)
        {
            var statusCodeKey = statusCode >= 500 ? "alertas.ErroServidor" : "alertas.requisicaoInvalida";
            var title = pageService.translate(statusCodeKey);

            var message = "";
            var delay = 5000;

            if (data.messages.length)
            {
                message = data.messages.joinByField("message", "<br/>");
                delay = data.messages * 5000;
            }
            else
            {
                message = data.messages.message;
            }

            return {
                title: title,
                error: message,
                delay: delay
            };
        }
    }
})();