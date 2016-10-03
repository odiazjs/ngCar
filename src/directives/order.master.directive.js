import _module from 'module'
import template from './order.master.template.html'

_module.directive('orderMaster', function () {
    'ngInject'

    return {
        restrict: 'AE',
        scope: true,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template,
        controller: 'OrderMasterCtrl'
    }
})