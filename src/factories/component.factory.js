import _module from 'module'

let _orderDetailFactory

class ComponentFactory {

    constructor (component, orderDetailFactory) {

        this.id             = component.id
        this.name           = component.name
        this.areaId         = component.areaId
        this.subComponents  = component.subComponents
        this.damageType     = component.damageType
        this.action         = component.action
        this.view           = component.view
        _orderDetailFactory = orderDetailFactory


    }

    static factory () {
        'ngInject'

        return (component, orderDetailFactory) => {
            return new ComponentFactory(component, orderDetailFactory)
        }
            
    }

}

_module.factory('componentFactory', ComponentFactory.factory)