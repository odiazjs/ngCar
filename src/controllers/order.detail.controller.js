import _module from 'module'
import _ from 'lodash'

let _$rootScope, _orderDetailService, carMap, 
    _componentFactory, _sideNavService, _$stateParams,
    _$mdToast

export class OrderDetailCtrl {

    constructor ( orderDetailFactory, orderDetailService, $rootScope, 
                  componentFactory, sideNavService, $stateParams, 
                  $mdToast ) {

        _orderDetailService         = orderDetailService
        _sideNavService             = sideNavService
        _$rootScope                 = $rootScope
        _componentFactory           = componentFactory
        _$stateParams               = $stateParams
        _$mdToast                   = $mdToast
        this.loading                = true
        this.savingOrder            = false
        this.orderDetailFactory     = orderDetailFactory()
        this.car                    = this.orderDetailFactory.onViewChange({ view: 'side' })
        this.damageTypes            = _orderDetailService.getDamageTypes()
        this.actions                = _orderDetailService.getActions()
        this.getAsyncFilters()

        _$rootScope.$on('onViewChange:Event', (event, option) => {           
            this.car = this.orderDetailFactory.onViewChange(option)
            $('img[usemap]').rwdImageMaps()
        })

    }

    saveOrder () {

        this.savingOrder = true

        let json = []
        
        this.listMapToArray()
            .forEach( ( subComponent ) => {

                json.push( {  
                    "ORDEN_DE_TRABAJO"  : _$stateParams.orderId,
                    "COMPONENTE"        : subComponent.componentId,
                    "SUBCOMPONENTE"     : subComponent.id,
                    "TIPO"              : subComponent.damageType.id,
                    "ACCION"            : subComponent.action.id,
                    "SERVICIO"          : subComponent.category.Id,
                    "REPUESTO_GENERICO" : subComponent.genericReplacement,
                    "DETALLES"          : null,
                    "BORRADO"           :"0"
                } ) 

            } )

        return _orderDetailService
            .saveOrder( json )
            .then( ( response ) => {

                if ( response.status === 200 ) {
                    
                    _$mdToast.show(
                        _$mdToast
                            .simple()
                            .textContent('ORDEN GUARDADA!')
                            .parent(document.querySelectorAll('#toastSaveOrder'))
                            .position('bottom right')
                            .hideDelay(3000)
                    );

                    this.savingOrder = false
                } else {

                    _$mdToast.show(
                        _$mdToast
                            .simple()
                            .textContent('ERROR AL GUARDAR SU ORDEN.')
                            .parent(document.querySelectorAll('#toastSaveOrder'))
                            .position('bottom right')
                            .hideDelay(3000)
                    );

                    this.savingOrder = false

                }
            } )

    }

    disableSaveOrderBtn () {
        return this.listMapToArray().length === 0 || this.savingOrder
    }

    listMapToArray () {
        return $.map(this.orderDetailFactory.listMap, 
            function(value, index) {
                return [value];
            })
    }

    onInit () {

        let option = _sideNavService
            .getOptions()
            .filter((option) => {
                return option.view === 'side'
            })[0];

            _$rootScope.$broadcast('onMasterSaved:Event', option)
    }

    areaClick (ev, areaTitle) {

        ev.preventDefault();

        this.car.component = 
            _componentFactory(_orderDetailService.getComponentByArea(areaTitle), 
                this.orderDetailFactory)

        if (this.orderDetailFactory.map) {
            carMap = this.orderDetailFactory.map[this.car.component.id]
        }

        if (carMap) {
            this.car.component = carMap.component
        }

        this.orderDetailFactory.cacheSave(this.car)

    }

    onListMapSelect(ev, componentId) {

        let component = 
            _orderDetailService.getComponents()
                .filter((component) => {
                    return component.id === componentId
                })[0]

        this.areaClick(ev, component.areaId)

    }

    getAsyncFilters () {

        _orderDetailService.getAsyncFilters().then(response => { 

            this.categories = response[0].data
            this.brands = response[1].data
            this.loading = false
            _$rootScope.$apply()

            }, error => {
                alert('No se puedieron obtener los filtros (categoria, marca)' 
                    + JSON.stringify(error))

        })
    }

    getMakeYearByBrand (brand) {
        _orderDetailService.getMakeYearByBrand(brand.Id).then((response) => {
            this.makeYears = response.data
        })
    }

    getReplacements (component) {

        const categoryId = component.category ? component.category.Id : undefined,
            brandId    = component.subComponent.brand.Id,
            makeYearId = '' /*component.subComponent.makeYear.Id*/

        _orderDetailService.getReplacements(categoryId, brandId, makeYearId).then((response) => {
            this.replacements = response.data
        })
    }

}

_module.controller('OrderDetailCtrl', OrderDetailCtrl)