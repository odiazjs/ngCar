import _module from './module'

let _$rootScope, _orderDetailService

export class ContentCtrl {

    constructor (contentFactory, orderDetailService, $rootScope) {

        this.contentFactory = contentFactory()
        _orderDetailService = orderDetailService
        _$rootScope         = $rootScope

        this.car = this.contentFactory.onViewChange({ view: 'front' })

        _$rootScope.$on('onViewChange:Event', (event, option) => {
            this.clearState()
            this.car = this.contentFactory.onViewChange(option)
            $('img[usemap]').rwdImageMaps();
        })

        this.damageTypes = _orderDetailService.getDamageTypes()
        this.actions     = _orderDetailService.getActions()
        
    }

    areaClick (area) {

        console.log(area)
        this.clearState()
        this.car.component = _orderDetailService.getComponentByArea(area)

    }

    selectSubComponent (subComponent) {
        this.subComponent = subComponent
    }

    clearState () {
        this.subComponent  = {}
        this.car.component.subComponents = []
    }

}

_module.controller('ContentCtrl', ContentCtrl)