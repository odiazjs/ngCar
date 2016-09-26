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
        this.isSaved        = component.isSaved
        _orderDetailFactory = orderDetailFactory


    }

    save() {

        if (_.isEmpty(this)) {
            return
        }

        _orderDetailFactory.map[this.id].component.isSaved = true;
    }

    delete () {
        _orderDetailFactory.map[this.id].component.isSaved = false;
    }

    static factory () {
        'ngInject'

        return (component, orderDetailFactory) => {
            return new ComponentFactory(component, orderDetailFactory)
        }
            
    }

}

_module.factory('componentFactory', ComponentFactory.factory)