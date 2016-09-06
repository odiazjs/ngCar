import _module from './module'

let _carService, _orderDetailService

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

    getComponentByArea (area) {

        let component =
            _orderDetailService
                .getComponents()
                    .filter((component) => { 
                        return component.areaId === area.title 
                    })[0]

        component.subComponents = 
            _orderDetailService
                .getSubComponents()
                    .filter((subComponent) => {
                        return subComponent.componentId === component.id
                    })

        return component
                
    }

    getDamageTypes () {
        return _orderDetailService
                    .getDamageTypes()
    }

    getActions () {
        return _orderDetailService
                    .getActions()
    }

    static factory (carService, orderDetailService) {

        _carService         = carService
        _orderDetailService = orderDetailService

        return () => new ContentFactory()

    }
}

_module.factory('contentFactory', ContentFactory.factory)