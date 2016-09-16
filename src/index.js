import angular from 'angular'
import _module from 'module'

import SideCtrl from 'controllers/side.controller'
import 'directives/side.directive'

import HeaderCtrl from 'controllers/header.controller'
import 'directives/header.directive'
import 'app.scss'

import ContentCtrl from 'controllers/content.controller'
import 'directives/content.directive'

//Services
import 'services/side.service'
import 'services/car.service'
import 'services/order.detail.service'

//Factories
import 'factories/option.factory'
import 'factories/content.factory'
import 'factories/car.factory'
import 'factories/component.factory'

angular.bootstrap(document, ['ngCar'])