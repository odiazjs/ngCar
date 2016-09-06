import _module from './module'
import Component from './component'
import SubComponent from './subcomponent'
import Action from './action'
import DamageType from './damageType'

export class OrderDetailService {

    constructor () {
        
    }

    getComponents () {

        return [

            new Component(1, 'LFdoor', 'Puerta Frontal', [], {}, {}),
            new Component(2, 'LBdoor', 'Puerta Trasera', [], {}, {}),
            new Component(3, 'LFpanel', 'Panel Frontal', [], {}, {}),
            new Component(4, 'LBpanel', 'Panel Trasero', [], {}, {}),
            new Component(5, 'LFbumper', 'Bumper Frontal', [], {}, {}),
            new Component(6, 'LBbumper', 'Bumper Trasero', [], {}, {}),
            new Component(7, 'LFwheel', 'Llanta Frontal', [], {}, {}),
            new Component(8, 'LBwheel', 'Llanta Trasera', [], {}, {}),
            new Component(9, 'LFwindow', 'Ventana Frontal', [], {}, {}),
            new Component(10, 'LBwindow', 'Ventana Trasera', [], {}, {})
        ]

    }

    getSubComponents () {

        return [

            new SubComponent(1, 1, 'Mango'),
            new SubComponent(2, 1, 'Chapa'),
            new SubComponent(1, 2, 'Mango'),
            new SubComponent(2, 2, 'Chapa'),
            new SubComponent(3, 5, 'Luz'),
            new SubComponent(4, 5, 'Guarda Polvo'),
            new SubComponent(3, 6, 'Luz'),
            new SubComponent(3, 6, 'Luz'),
            new SubComponent(5, 7, 'Aro'),
            new SubComponent(5, 8, 'Aro'),
            new SubComponent(6, 7, 'Plato'),
            new SubComponent(6, 8, 'Plato'),
            new SubComponent(7, 7, 'Chuchos'),
            new SubComponent(7, 8, 'Chuchos')
        ]

    }

    getDamageTypes () {

        return [

            new DamageType(1, 'Dañado'),
            new DamageType(2, 'Falta'),
            new DamageType(3, 'Rayado'),
            new DamageType(4, 'Otro')

        ]

    }

    getActions () {

        return [

            new Action(1, 'Ninguna'),
            new Action(2, 'Revisar'),
            new Action(3, 'Reparar'),
            new Action(4, 'Pintar'),
            new Action(5, 'Cambiar'),
            new Action(6, 'Servicio')
        ]

    }

}

_module.service('orderDetailService', OrderDetailService)