import _module from 'module'
import template from './order.detail.template.html'

_module.directive('orderDetail', function ($timeout) {
    'ngInject'

    return {
        restrict: 'AE',
        scope: {},
        controllerAs: 'ctrl',
        bindToController: true,
        template: template,
        controller: 'ContentCtrl',

        link : (scope, el, attrs) => {

            $timeout(() => {

            $('img[usemap]').rwdImageMaps();
            console.log('ajustado!')

            // TODO: this messes up the responsive rwdImageMaps
            // $('#car-side').mapster({
            //     staticState: true,
            //     fillOpacity: 0.4,
            //     fillColor: 'fadbb84',
            //     highlight: true,
            //     mapKey: 'name',
            //     showToolTip: true,
            //     scaleMap: true,
            //     toolTipClose: ["tooltip-click","area-mouseout"],
            //     areas: [{
            //         key: 'LFdoor',
            //         toolTip: 'Puerta frontal lado izquierdo.'
            //     }],                   
            //     onClick: function (e) {
                    
            //     }
            // });

            }, 0)

            
            
        }
    }
})