import angular from 'angular'
import _module from 'module'
import 'angular-ui-router'
import 'route.config'
import 'http.config'

import SideCtrl from 'controllers/side.controller'
import 'directives/side.directive'

import HeaderCtrl from 'controllers/header.controller'
import 'directives/header.directive'
import 'app.scss'

import 'directives/order.detail.directive'

//Services
import 'services/side.service'
import 'services/car.service'
import 'services/order.detail.service'
import 'services/order.master.service'

//Factories
import 'factories/option.factory'
import 'factories/order.detail.factory'
import 'factories/car.factory'
import 'factories/component.factory'

angular.bootstrap(document, ['ngCar'])