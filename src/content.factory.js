import _module from './module'

export default class ContentFactory {
    
    constructor () {
        this.view   = 'frontview'
    }

    onViewChange (option) {
        this.view = option.view
    }

    static factory () {
        return (_$scope) => new ContentFactory(_$scope)
    }
}

_module.factory('contentFactory', ContentFactory.factory)