import _module from './module'

export class SideNavService {

    constructor () {
        
    }

    getOptions () {

        return [
            {
                id: 1,
                display: 'Vista Lateral',
                img: 'https://s18.postimg.org/im6m00rrd/carside.png',
                bgcolor: { 'background-color': '#bbf5cb' }
            },
            {
                id: 2,
                display: 'Vista Frontal',
                img: 'https://s17.postimg.org/8jtrdq7tr/carfront.png',
                bgcolor: { 'background-color': '#fedfb5' }
            },
            {
                id: 3,
                display: 'Vista Trasera',
                img: 'https://s18.postimg.org/7ffgnjyrt/carback.png',
                bgcolor: { 'background-color': '#84d8fd' }
            }
        ]

    }

}

_module.service('sideNavService', SideNavService)