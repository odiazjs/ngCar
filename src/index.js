import angular from 'angular'
import _module from 'module'

import SideCtrl from 'side.controller'
import 'side.directive'

import HeaderCtrl from 'header.controller'
import 'header.directive'
import 'app.scss'

import ContentCtrl from 'content.controller'
import 'content.directive'

//Services
import 'side.service'
import 'car.service'

//Factories
import 'option.factory'
import 'content.factory'
import 'car.factory'

angular.bootstrap(document, ['ngCar'])