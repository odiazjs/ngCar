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
                new Image('https://s18.postimg.org/jnh06ham1/ngcarside.png',
                            'car-side',
                            '#car-map-side'),
                {
                    name: 'car-map-side',
                    areas: [
                        new Area('LFdoor',
                                 'LFdoor',
                                 '205,94,195,131,205,187,353,183,352,124,352,97,360,77,271,83',
                                 'poly'),
                        new Area('LFwheel',
                                 'LFwheel',
                                 '125,183,53',
                                 'circle'),
                        new Area('LBwheel',
                                 'LBwheel',
                                 '523,180,47',
                                 'circle'),
                        new Area('LBdoor',
                                 'LBdoor',
                                 '362,79,356,94,356,178,450,185,478,124,497,86,499,71',
                                 'poly'),
                        new Area('LFwindow',
                                 'LFwindow',
                                 '201,85,257,48,298,30,360,24,353,73',
                                 'poly'),
                        new Area('LBwindow',
                                 'LBwindow',
                                 '374,22,367,68,536,69,501,44,435,23',
                                 'poly'),
                        new Area('LFpanel',
                                 'LFpanel',
                                 '48,133,76,145,102,128,131,122,152,130,171,143,187,181,200,181,192,132,198,93,139,95,91,101,61,118',
                                 'poly'),
                        new Area('LBpanel',
                                 'LBpanel',
                                 '460,173,478,136,513,121,552,124,620,117,599,94,580,78,544,72,508,73',
                                 'poly'),
                        new Area('LFbumper',
                                 'LFbumper',
                                 '13,149,10,184,21,193,62,200,69,150,48,138',
                                 'poly'),
                        new Area('LBbumper',
                                 'LBbumper',
                                 '561,129,582,161,582,184,642,165,646,153,645,125,624,118',
                                 'poly'),
                    ]
                },

                'side'
            ),

            new Car(
                new Image('https://s21.postimg.org/nvvthpv53/ngcarfront.png',
                            'car-front',
                            '#car-map-front'),
                {
                    name: 'car-map-front',
                    areas: [
                        new Area('windshield',
                                 'windshield',
                                 '67,65,76,38,97,16,182,11,266,15,286,36,300,64',
                                 'poly'),
                        new Area('leftrearview',
                                 'leftrearview',
                                 '55,69,53,52,22,53,24,68,48,76',
                                 'poly'),
                        new Area('rightrearview',
                                 'rightrearview',
                                 '313,65,316,53,345,50,345,65,317,74',
                                 'poly'),
                        new Area('hood',
                                 'hood',
                                 '61,72,35,92,28,111,86,124,120,128,250,129,288,122,340,110,328,82,302,71',
                                 'poly'),
                        new Area('leftlight',
                                 'leftlight',
                                 '15,132,17,109,25,114,75,128,92,157',
                                 'poly'),
                        new Area('rightlight',
                                 'rightlight',
                                 '279,153,288,125,340,114,350,107,357,132',
                                 'poly'),
                        new Area('grill',
                                 'grill',
                                 '115,158,101,135,122,135,239,134,272,130,256,156,185,165',
                                 'poly'),
                        new Area('frontbumper',
                                 'frontbumper',
                                 '11,140,118,168,264,167,357,137,359,198,354,228,285,229,93,230,14,228,9,190',
                                 'poly')
                    ]
                },

                'front'
            )
        ]

    }

}

_module.service('carService', CarService)