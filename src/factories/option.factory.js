import _module from 'module'

export default class OptionFactory {
    
    constructor (model) {
        
        this.id       = model.id
        this.selected = model.default
        this.view     = model.view
        this.img      = model.img
        this.bgcolor  = model.bgcolor
        this.default  = model.default
        this.navTo    = model.navTo

    }

    static factory () {
        return (model) => new OptionFactory(model)
    }
}

_module.factory('optionFactory', OptionFactory.factory)