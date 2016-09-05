import _module from './module'
import template from './content.template.html'

_module.directive('contentSection', function ($timeout) {
    'ngInject'

    return {
        restrict: 'AE',
        scope: true,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template,
        controller: 'ContentCtrl',

        link : (scope, el, attrs) => {

            $timeout(() => {

            // $('#car').mapster({
            //     staticState: true,
            //     fillOpacity: 0.4,
            //     fillColor: 'fadbb84',
            //     highlight: true,
            //     mapKey: 'name',
            //     showToolTip: true,
            //     scaleMap: false,
            //     toolTipClose: ["tooltip-click","area-mouseout"],
            //     areas: [{
            //         key: 'Car',
            //         toolTip: 'Puerta frontal lado izquierdo.'
            //     }],                   
            //     onClick: function (e) {
                    
            //     }
            // });

            }, 0)
            
        }
    }
})