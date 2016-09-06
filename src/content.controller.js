import _module from './module'

let _$rootScope

export class ContentCtrl {

    constructor (contentFactory, $rootScope) {

        this.contentFactory = contentFactory()
        _$rootScope         = $rootScope

        this.car = this.contentFactory.onViewChange({ view: 'front' })

        _$rootScope.$on('onViewChange:Event', (event, option) => {
            this.car = this.contentFactory.onViewChange(option)
            $('img[usemap]').rwdImageMaps();
        })

        this.damageTypes = this.contentFactory.getDamageTypes()
        this.actions     = this.contentFactory.getActions()
        
    }

    areaClick (area) {
        
        console.log('car part selected => ', area)
        this.subComponent  = {}
        this.car.component.subComponents = []
        this.car.component = this.contentFactory.getComponentByArea(area)

    }

    selectSubComponent (subComponent) {
        this.subComponent = subComponent
    }

}

_module.controller('ContentCtrl', ContentCtrl)