import _module from './module'

let _carService

export default class ContentFactory {
    
    constructor () {
        this.view = 'front'
    }

    onViewChange (option) {
        this.view = option.view
        return this.getCarByView(this.view)
    }

    getCarByView (view) {

        return _carService
                .getAll()
                .filter((car) => { 
                    return car.view === view 
                })[0]

    }

    static factory (carService) {

        _carService = carService
        return () => new ContentFactory()

    }
}

_module.factory('contentFactory', ContentFactory.factory)