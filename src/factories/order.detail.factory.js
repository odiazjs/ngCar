import _module from 'module'

let _carService, _orderDetailService

export default class OrderDetailFactory {
    
    constructor () {
        this.view              = ''
        this.map               = new Object()
        this.listMap           = new Object()
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

    addToList (subComponent) {
        this.listMap[subComponent.id] = new Object(subComponent)
    }

    removeFromList (subComponent) {
        this.listMap[subComponent.id] = undefined
    }

    static factory (carService, orderDetailService) {

        _carService         = carService
        _orderDetailService = orderDetailService

        return () => new OrderDetailFactory()

    }
}

_module.factory('orderDetailFactory', OrderDetailFactory.factory)