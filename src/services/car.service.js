import _module from 'module'
import Car from 'model/car'
import Image from 'model/image'
import Area from 'model/area'

export default class CarService {

    constructor () {

    }

    getAll () {
        
        return [
            new Car(
                new Image('assets/carside.png',
                          'car-side',
                          '#car-map-side'),
                {
                    name: 'car-map-side',
                    areas: [
                        new Area('BackBumper',
                                 'BackBumper',
                                 '47,215,160,221,183,246,148,284,131,332,43,301,31,237',
                                 'poly'),
                        new Area('BackPanel',
                                 'BackPanel',
                                 '45,211,40,144,71,115,343,28,259,156,163,149,258,158,258,206,266,241,188,243,170,218,111,213',
                                 'poly'),
                        new Area('BackWheel',
                                 'BackWheel',
                                 '234,327,77',
                                 'circle'),
                        new Area('BackDoor',
                                 'BackDoor',
                                 '504,18,500,346,325,342,304,265,273,232,271,157,306,97,353,24',
                                 'poly'),
                        new Area('FrontDoor',
                                 'FrontDoor',
                                 '509,19,510,344,774,348,790,249,787,164,827,164,645,28',
                                 'poly'),
                        new Area('FrontPanel',
                                 'FrontPanel',
                                 '780,345,825,175,862,118,1067,175,1093,225,1088,303,1068,315,1007,315,987,263,926,231,866,240,824,281,802,347,790,351,779,349',
                                 'poly'),
                        new Area('FrontWheel',
                                 'FrontWheel',
                                 '908,328,76',
                                 'circle'),
                    ]
                },

                'side'
            ),

            new Car(
                new Image('assets/carfront.png',
                            'car-front',
                            '#car-map-front'),
                {
                    name: 'car-map-front',
                    areas: [
                        new Area('Windshield',
                                 'Windshield',
                                 '112,145,161,50,180,28,359,26,385,47,433,144',
                                 'poly'),
                        new Area('LeftRearView',
                                 'LeftRearView',
                                 '111,129,109,111,84,110,75,130,98,137,105,142',
                                 'poly'),
                        new Area('RightRearView',
                                 'RightRearView',
                                 '434,130,436,113,463,113,471,129,455,136,439,143',
                                 'poly'),
                        new Area('Hood',
                                 'Hood',
                                 '108,152,433,147,483,220,485,280,366,307,176,306,61,284,62,218',
                                 'poly'),
                        new Area('Bumper',
                                 'Bumper',
                                 '59,292,186,313,359,315,486,287,481,339,450,375,276,399,96,377,63,338',
                                 'poly'),
                    ]
                },

                'front'
            ),

            new Car(
                new Image('assets/carback.png',
                            'car-rear',
                            '#car-map-rear'),
                {
                    name: 'car-map-rear',
                    areas: [
                        new Area('LeftStop',
                                 'LeftStop',
                                 '66,168,39,173,16,206,9,320,45,332,117,339',
                                 'poly'),
                        new Area('RightStop',
                                 'RightStop',
                                 '495,168,518,173,541,192,551,234,554,320,514,332,447,337',
                                 'poly'),
                        new Area('Trunk',
                                 'Trunk',
                                 '147,26,66,136,73,167,125,333,434,334,486,169,501,143,420,26',
                                 'poly'),
                        new Area('RearBumper',
                                 'RearBumper',
                                 '14,338,27,350,530,351,549,343,522,424,280,444,40,420',
                                 'poly'),
                    ]
                },

                'rear'
            )
        ]

    }

}

_module.service('carService', CarService)