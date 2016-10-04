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

        _$rootScope.$on('onMasterSaved:Event', (event, option) => {           
            this.onMdListClick(option)
        })
    }

    onMdListClick (option) {
        this.options
            .reduce((prev, current) => {
                if (option.id === current.id) {
                    current.selected = true
                } else {
                    current.selected = false
                }
            }, false)

        _$rootScope.$broadcast('onViewChange:Event', option)
              
    }

    getIco () {
        
    }

}

_module.controller('SideCtrl', SideCtrl)