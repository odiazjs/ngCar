import _module from 'module'

export class SideNavService {

    constructor () {
        
    }

    getOptions () {

        return [

            {
                id: 1,
                view: 'side',
                img: 'https://s18.postimg.org/im6m00rrd/carside.png',
                bgcolor: { 'background-color': '#bbf5cb' },
                default: true
            },

            {
                id: 2,
                view: 'front',
                img: 'https://s17.postimg.org/8jtrdq7tr/carfront.png',
                bgcolor: { 'background-color': '#fedfb5' },
                default: false
            },
            
            {
                id: 3,
                view: 'rear',
                img: 'https://s18.postimg.org/7ffgnjyrt/carback.png',
                bgcolor: { 'background-color': '#84d8fd' },
                default: false
            }
        ]

    }

}

_module.service('sideNavService', SideNavService)