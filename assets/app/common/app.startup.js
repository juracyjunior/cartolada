(function() {
    "use strict";

    angular.module("app.common").
        config(["$translateProvider", "blockUIConfig", "NotificationProvider", config]).
        run(["$translate", "blockUIConfig", "pageService", "apiService", "parametroService", "$locale", startup]);

    function config($translateProvider, blockUIConfig, NotificationProvider)
    {
        if (!localStorage.language)
        {
            localStorage.language = "pt-BR";
        }
        $translateProvider.preferredLanguage(localStorage.language);
        $translateProvider.useSanitizeValueStrategy(null);

        blockUIConfig.autoBlock = true;
        blockUIConfig.delay = 500;

        NotificationProvider.setOptions({
            delay: 5000,
            replaceMessage: true,
            startTop: 10,
            startRight: 10,
            verticalSpacing: 10,
            horizontalSpacing: 10,
            positionX: 'center',
            positionY: 'top',
            templateUrl: "app/base/html/notification.html",
            closeOnClick: false
        });
    }

    function startup($translate, blockUIConfig, pageService, apiService, parametroService, $locale) 
    {
        blockUIConfig.message = $translate.instant("carregando");
        parametroService.init();
        pageService.init();
        apiService.init();

        $locale.NUMBER_FORMATS.CURRENCY_SYM = $translate.instant("moeda.simbolo");
        $locale.NUMBER_FORMATS.DECIMAL_SEP = $translate.instant("moeda.separadorDecimal");
        $locale.NUMBER_FORMATS.GROUP_SEP = $translate.instant("moeda.separadorGrupo");
    }
})();