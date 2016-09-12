import _module from 'module'

let _carService, _orderDetailService

export default class ContentFactory {
    
    constructor () {
        this.view = 'front'
        this.map = new Object()
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

    cacheSave (car) {
        this.map[car.component.id] =  new Object({
             component: car.component }
        )
        console.log(this.map)
    }

    static factory (carService, orderDetailService) {

        _carService         = carService
        _orderDetailService = orderDetailService

        return () => new ContentFactory()

    }
}

_module.factory('contentFactory', ContentFactory.factory)