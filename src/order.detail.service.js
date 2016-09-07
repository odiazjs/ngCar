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
            new Component(10, 'LBwindow', 'Ventana Trasera', [], {}, {}),
            new Component(11, 'windshield', 'Windshield', [], {}, {}),
            new Component(12, 'leftrearview', 'Retrovisor Izquierdo', [], {}, {}),
            new Component(13, 'rightrearview', 'Retrovisor Derecho', [], {}, {}),
            new Component(14, 'hood', 'Capo', [], {}, {}),
            new Component(15, 'leftlight', 'Luz Izquierda', [], {}, {}),
            new Component(16, 'rightlight', 'Luz Derecha', [], {}, {}),
            new Component(17, 'grill', 'Parrilla', [], {}, {}),
            new Component(18, 'frontbumper', 'Bumper Frontal', [], {}, {}),
        ]

    }

    getComponentByArea (area) {

        let component =
            this.getComponents()
                    .filter((component) => { 
                        return component.areaId === area.title 
                    })[0]
                

        component.subComponents = 
            this.getSubComponents()
                    .filter((subComponent) => {
                        return subComponent.componentId === component.id
                    })
                
        return component
                
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
            new SubComponent(5, 7, 'Aro'),
            new SubComponent(5, 8, 'Aro'),
            new SubComponent(6, 7, 'Plato'),
            new SubComponent(6, 8, 'Plato'),
            new SubComponent(7, 7, 'Chuchos'),
            new SubComponent(7, 8, 'Chuchos'),
            new SubComponent(8, 15, 'Pide vias'),
            new SubComponent(9, 15, 'Luz'),
            new SubComponent(8, 16, 'Pide vias'),
            new SubComponent(9, 16, 'Luz'),
            new SubComponent(10, 17, 'Insigna'),
            new SubComponent(11, 18, 'Parrilla Izquierda'),
            new SubComponent(12, 18, 'Parrilla Derecha'),
            new SubComponent(13, 18, 'Parrilla Central'),
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