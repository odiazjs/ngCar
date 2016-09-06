import _module from './module'

let _$rootScope

export class ContentCtrl {

    constructor (contentFactory, $rootScope) {
        this.contentFactory = contentFactory()
        _$rootScope         = $rootScope

        _$rootScope.$on('onViewChange:Event', (event, option) => {
            this.contentFactory.onViewChange(option)
        })

    }

    areaClick () {
        console.log('car part selected')
    }

}

_module.controller('ContentCtrl', ContentCtrl)