import angular from 'angular'
import _module from 'module'
import 'angular-route'

import SideCtrl from 'controllers/side.controller'
import 'directives/side.directive'

import HeaderCtrl from 'controllers/header.controller'
import 'directives/header.directive'
import 'app.scss'

import ContentCtrl from 'controllers/order.detail.controller'
import 'directives/order.detail.directive'

//Services
import 'services/side.service'
import 'services/car.service'
import 'services/order.detail.service'

//Factories
import 'factories/option.factory'
import 'factories/order.detail.factory'
import 'factories/car.factory'
import 'factories/component.factory'

angular.bootstrap(document, ['ngCar'])