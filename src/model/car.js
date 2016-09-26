export default class Car {

    constructor (image, map, view) {

        this.image = {
            url: '',
            id: '',
            usemap: ''
        }
        
        this.map = {
            name: '',
            areas: [
                {
                    alt: '',
                    title: '',
                    coords: [],
                    shape: ''
                }
            ]
        }

        this.component = {}

        this.image       = image
        this.map         = map
        this.view        = view

    }
    
}