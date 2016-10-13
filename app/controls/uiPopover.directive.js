(function() {
    "use strict";

    angular.module("app.controls")
        .directive('uiPopover', ["$document","$compile",uiPopover]);

    function uiPopover($document, $compile)
    {
        return {
            restrict: "A",
            scope: {
                uiPopoverOnshowClass: "@",
                uiPopoverOnhideClass: "@"
            },
            link: function (scope, $element, attributes)
            {
                angular.element(document).ready(function () 
                {
                    var elementPopover = angular.element(document.querySelector(attributes.uiPopover));
                    elementPopover.addClass("ng-hide");
                    var isPopShowing = false;
                    var showPopover = function ()
                    {
                        elementPopover.removeClass("ng-hide");
                        isPopShowing = true;
                        if (attributes.uiPopoverOnshowClass)
                        {
                            $element.addClass(attributes.uiPopoverOnshowClass);
                        }
                        if (attributes.uiPopoverOnhideClass)
                        {
                            $element.removeClass(attributes.uiPopoverOnhideClass);
                        }
                    };
                    var hidePopover = function ()
                    {
                        elementPopover.addClass("ng-hide");
                        isPopShowing = false;
                        if (attributes.uiPopoverOnshowClass)
                        {
                            $element.removeClass(attributes.uiPopoverOnshowClass);
                        }
                        if (attributes.uiPopoverOnhideClass)
                        {
                            $element.addClass(attributes.uiPopoverOnhideClass);
                        }
                    };
                    $element.on("click", function (event)
                    {
                        if (isPopShowing)
                        {
                            hidePopover();
                        }
                        else
                        {
                            showPopover();
                        }
                    });
                    $document.on("click", function (event)
                    {
                        var target = event.target;
                        var elemen = $element[0];

                        var targetIsElement = target === elemen;
                        var targetIsChildFromElement = elemen.contains(target);

                        var targetIsPopover = target === elementPopover;
                        var targetIsChildFromPopover = elementPopover[0] ? elementPopover[0].contains(target) : false;

                        if (!targetIsElement && !targetIsChildFromElement && !targetIsPopover && !targetIsChildFromPopover)
                        {
                            hidePopover();
                        }
                    });
                });
            }
        };
    }
})();