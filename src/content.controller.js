import _module from './module'

let _$rootScope, _orderDetailService, carMap

export class ContentCtrl {

    constructor (contentFactory, orderDetailService, $rootScope) {

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
        
    }

    areaClick (area) {

        this.car.component = _orderDetailService.getComponentByArea(area)

        if (this.map) {
            carMap = this.map[this.car.component.id]
        }

        if (carMap) {
            this.car.component = carMap.component
        }

        this.saveData(this.car)

    }

    selectSubComponent (subComponent) {
        this.subComponent = subComponent
    }

    saveData (car) {
        this.map[this.car.component.id] = new Object({component: car.component})
        console.log(this.map[this.car.component.id])
    }

}

_module.controller('ContentCtrl', ContentCtrl)