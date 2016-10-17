(function() {
    "use strict";
    
    angular.module("app.base").
        service("pageService", ["$rootScope", "$translate", "blockUI", "parametroService", "$document", pageService]);

    function pageService($rootScope, $translate, blockUI, parametroService, $document)
    {
        $rootScope.$page = 
        {
            systemTitle: "",
            title      : "",
            subtitle   : "",
            appLoaded  : false
        };

        return {
            init: init,
            setTitle: setTitle,
            getTitle: getTitle,
            setSubtitle: setSubtitle,
            translate: translate,
            resetForm: resetForm
        };

        function init()
        {
            $rootScope.$page.systemTitle = parametroService.byName("systemName");

            $rootScope.$on("$stateChangeStart", stateChangeStart);
            $rootScope.$on('$stateNotFound', stateNotFound);
            $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
            $rootScope.$on('$stateChangeError', stateChangeError);
            $rootScope.$on('$viewContentLoading', viewContentLoading);
            $rootScope.$on('$viewContentLoaded', viewContentLoaded);
        }

        function stateChangeStart(event, next, routeParams)
        {
            setTitle(translate(next.title));
            setSubtitle("");
            //$rootScope.$page.systemTitle = parametroService.byName("systemName") + " | " + getTitle();
        }

        function stateNotFound(event, unfoundState, fromState, fromParams) {}

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {}

        function stateChangeError(event, toState, toParams, fromState, fromParams, error) {}

        function viewContentLoading(event, viewConfig) {
            $rootScope.$page.appLoaded = false;
        }

        function viewContentLoaded(event) {
            $rootScope.$page.appLoaded = true;
        }

        function setTitle(title)
        {
            $rootScope.$page.title = title; 
        }

        function getTitle()
        {
            return $rootScope.$page.title;
        }

        function setSubtitle(subtitle)
        {
            $rootScope.$page.subtitle = subtitle; 
        }

        function translate(id)
        {
            return $translate.instant(id);
        }

        function resetForm(form) 
        {
            form.$setPristine();
            form.$setUntouched();
            form.$rollbackViewValue();
        }
    }
})();