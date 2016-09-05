import _module from './module'


export class SideCtrl {

    constructor (sideNavService, optionFactory) {

        this.sideNavService = sideNavService
        this.optionFactory  = optionFactory

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
    }

}

_module.controller('SideCtrl', SideCtrl)