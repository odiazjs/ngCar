import _module from './module'
import template from './header.template.html'

_module.directive('headerSection', function () {
    'ngInject'

    return {
        restrict: 'AE',
        scope: true,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template,
        controller: 'HeaderCtrl'
    }
})