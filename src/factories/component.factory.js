import _module from 'module'

let _contentFactory

class ComponentFactory {

    constructor (component, contentFactory) {

        this.id             = component.id
        this.name           = component.name
        this.areaId         = component.areaId
        this.subComponents  = component.subComponents
        this.damageType     = component.damageType
        this.action         = component.action
        this.view           = component.view
        this.isSaved        = component.isSaved
        _contentFactory     = contentFactory


    }

    save() {

        if (_.isEmpty(this)) {
            return
        }

        _contentFactory.map[this.id].component.isSaved = true;
    }

    delete () {
        _contentFactory.map[this.id].component.isSaved = false;
    }

    static factory () {
        'ngInject'

        return (component, contentFactory) => {
            return new ComponentFactory(component, contentFactory)
        }
            
    }

}

_module.factory('componentFactory', ComponentFactory.factory)