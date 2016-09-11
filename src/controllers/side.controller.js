import _module from 'module'

let _$rootScope

export class SideCtrl {

    constructor (sideNavService, optionFactory, contentFactory, $rootScope) {

        this.sideNavService = sideNavService
        this.optionFactory  = optionFactory
        this.contentFactory = contentFactory()
        _$rootScope         = $rootScope

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

}

_module.controller('SideCtrl', SideCtrl)