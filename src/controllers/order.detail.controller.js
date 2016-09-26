import _module from 'module'
import _ from 'lodash'

let _$rootScope, _orderDetailService, carMap, _componentFactory

export class ContentCtrl {

    constructor (orderDetailFactory, orderDetailService, $rootScope, componentFactory) {

        _orderDetailService     = orderDetailService
        _$rootScope             = $rootScope
        _componentFactory       = componentFactory
        this.loading            = true
        this.orderDetailFactory = orderDetailFactory()
        this.car                = this.contentFactory.onViewChange({ view: 'side' })
        this.damageTypes        = _orderDetailService.getDamageTypes()
        this.actions            = _orderDetailService.getActions()
        this.getAsyncFilters()

        _$rootScope.$on('onViewChange:Event', (event, option) => {           
            this.car = this.contentFactory.onViewChange(option)
            $('img[usemap]').rwdImageMaps();
        })

    }

    areaClick (area) {

        this.car.component = 
            _componentFactory(_orderDetailService.getComponentByArea(area), 
                this.orderDetailFactory)

        if (this.orderDetailFactory.map) {
            carMap = this.orderDetailFactory.map[this.car.component.id]
        }

        if (carMap) {
            this.car.component = carMap.component
        }

        this.orderDetailFactory.cacheSave(this.car)

    }

    selectSubComponent (subComponent) {
        this.subComponent = subComponent
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

        let categoryId = component.category ? component.category.Id : undefined,
            brandId    = component.brand.Id,
            makeYearId = component.makeYear.Id

        _orderDetailService.getReplacements(categoryId, brandId, makeYearId).then((response) => {
            this.replacements = response.data
        })
    }

}

_module.controller('ContentCtrl', ContentCtrl)