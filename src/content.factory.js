import _module from './module'

let _carService, _orderDetailService

export default class ContentFactory {
    
    constructor () {
        this.view = 'front'
    }

    onViewChange (option) {
        this.view = option.view
        return this.filterCarByView(this.view)
    }

    filterCarByView (view) {

        return _carService
                .getAll()
                .filter((car) => { 
                    return car.view === view 
                })[0]

    }

    static factory (carService, orderDetailService) {

        _carService         = carService
        _orderDetailService = orderDetailService

        return () => new ContentFactory()

    }
}

_module.factory('contentFactory', ContentFactory.factory)