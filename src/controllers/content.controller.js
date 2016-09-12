import _module from 'module'
import _ from 'lodash'

let _$rootScope, _orderDetailService, carMap

export class ContentCtrl {

    constructor (contentFactory, orderDetailService, $rootScope) {

        _orderDetailService = orderDetailService
        _$rootScope         = $rootScope
        this.loading        = true
        this.contentFactory = contentFactory()
        this.car            = this.contentFactory.onViewChange({ view: 'side' })
        this.damageTypes    = _orderDetailService.getDamageTypes()
        this.actions        = _orderDetailService.getActions()
        this.getAsyncFilters()

        _$rootScope.$on('onViewChange:Event', (event, option) => {           
            this.car = this.contentFactory.onViewChange(option)
            $('img[usemap]').rwdImageMaps();
        })

    }

    areaClick (area) {

        this.car.component = _orderDetailService.getComponentByArea(area)

        if (this.contentFactory.map) {
            carMap = this.contentFactory.map[this.car.component.id]
        }

        if (carMap) {
            this.car.component = carMap.component
        }

        this.contentFactory.cacheSave(this.car)

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