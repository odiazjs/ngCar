import _module from './module'

export default class CarFactory {
    
    constructor () {
        
    }

    static factory () {
        return () => new CarFactory()
    }
}

_module.factory('carFactory', CarFactory.factory)