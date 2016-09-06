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

    }

    areaClick () {
        console.log('car part selected')
    }

}

_module.controller('ContentCtrl', ContentCtrl)