import _module from './module'
import Car from './car'

let _car

export default class CarFactory {

    constructor (car) {
        _car     = car
        this.car = _car
    }

    static factory (car) {
        return (car) => new CarFactory(car)
    }
}

_module.factory('carFactory', CarFactory.factory)