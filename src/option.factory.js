import _module from './module'

export default class OptionFactory {
    
    constructor (model) {
        
        this.id       = model.id
        this.selected = false
        this.view     = model.view
        this.img      = model.img
        this.bgcolor  = model.bgcolor

    }

    static factory () {
        return (model) => new OptionFactory(model)
    }
}

_module.factory('optionFactory', OptionFactory.factory)