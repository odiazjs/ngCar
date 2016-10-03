import _module from 'module'

let _$rootScope

export class SideCtrl {

    constructor (sideNavService, optionFactory, orderDetailFactory, $rootScope) {

        this.sideNavService     = sideNavService
        this.optionFactory      = optionFactory
        this.orderDetailFactory = orderDetailFactory()
        _$rootScope             = $rootScope

        this.options = 
            this.sideNavService.getOptions()
                .map((option) => {
                    return this.optionFactory(option)
                })
    }

    onMdListClick (option) {
        this.options
            .reduce((boolean, item) => {
                item.selected = false, option.selected = true
            }, false)

        _$rootScope.$broadcast('onViewChange:Event', option)
              
    }

    getIco () {
        
    }

}

_module.controller('SideCtrl', SideCtrl)