import _module from './module'

let _$rootScope, _orderDetailService, carMap

export class ContentCtrl {

    constructor (contentFactory, orderDetailService, $rootScope) {

        this.loading = true
        this.contentFactory = contentFactory()
        _orderDetailService = orderDetailService
        _$rootScope         = $rootScope

        this.map = new Object()
        this.car = this.contentFactory.onViewChange({ view: 'side' })

        _$rootScope.$on('onViewChange:Event', (event, option) => {           
            this.car = this.contentFactory.onViewChange(option)
            $('img[usemap]').rwdImageMaps();
        })

        this.damageTypes = _orderDetailService.getDamageTypes()
        this.actions     = _orderDetailService.getActions()
        this.getFilters()
    }

    areaClick (area) {

        this.car.component = _orderDetailService.getComponentByArea(area)

        if (this.contentFactory.map) {
            carMap = this.contentFactory.map.get(this.car.component.id)
        }

        if (carMap) {
            this.car.component = carMap.component
        }

        this.contentFactory.memoizeData(this.car)

    }

    selectSubComponent (subComponent) {
        this.subComponent = subComponent
    }

    getFilters () {

        let getCategories = _orderDetailService.getCategories()
        let getBrands     = _orderDetailService.getBrands()

        Promise.all([getCategories, getBrands]).then(response => { 
            
            setTimeout(() => {

                this.categories = response[0].data
                this.brands = response[1].data
                this.loading = false
                _$rootScope.$apply()

            }, 1000)
            

        }, error => {
            alert('No se puedieron obtener los filtros (categoria, marca)' 
                + JSON.stringify(error))
        })

    }

}

_module.controller('ContentCtrl', ContentCtrl)