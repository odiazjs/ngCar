import _module from './module'
import template from './side.template.html'

_module.directive('sidenav', function () {
    'ngInject'

    return {
        restrict: 'AE',
        scope: true,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template,
        controller: 'SideCtrl'
    }
})