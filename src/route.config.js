import _module from 'module'

import OrderMasterCtrl from 'controllers/order.master.controller'
import OrderDetailCtrl from 'controllers/order.detail.controller'

import orderMasterTemplate from 'directives/order.master.template.html'
import orderDetailTemplate from 'directives/order.detail.template.html'

_module
    .config( ($locationProvider, $stateProvider, $urlRouterProvider ) => {
            
            // $locationProvider.html5Mode({
            //     enabled: true,
            //     requireBase: false
            // });

            // $locationProvider.hashPrefix( null )
            // $urlRouterProvider.otherwise( '/orden-maestra' )
            // $urlRouterProvider.deferIntercept()

            $urlRouterProvider.otherwise('/orden-maestra/orden/0')

            $stateProvider
                .state( 'root', {
                    url       : '',
                    template  : '<ui-view flex id="content" class="radial" flex></ui-view>'
                })

                .state( 'root.master', {
                    url       : '/orden-maestra/orden/:orderId',
                    template  : orderMasterTemplate,
                    controller: 'OrderMasterCtrl as ctrl'
                })

                .state( 'root.detail', {
                    url       : '/orden-detalle/orden/:orderId',
                    template  : orderDetailTemplate,
                    controller: 'OrderDetailCtrl as ctrl'
                })

    });