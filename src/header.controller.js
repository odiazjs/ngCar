import _module from './module'

export class HeaderCtrl {

    constructor () {
        this.greeting = 'asdfasdf'
    }

}

_module.controller('HeaderCtrl', HeaderCtrl)