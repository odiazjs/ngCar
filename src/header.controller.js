import _module from './module'

export class HeaderCtrl {

    constructor () {
        this.greeting = 'Interactive Car'
    }

}

_module.controller('HeaderCtrl', HeaderCtrl)