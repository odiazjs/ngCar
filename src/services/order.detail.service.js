import _module from 'module'
import Component from 'model/component'
import SubComponent from 'model/subcomponent'
import Action from 'model/action'
import DamageType from 'model/damageType'
import memoize from 'memoized-decorator'

let _$http

export class OrderDetailService {

    constructor ($http) {
        _$http = $http
        this.baseUrl = 'http://gdsgt.net/jonasa'
    }

    getComponents () {

        return [

            new Component(1, 'LFdoor', 'Puerta Frontal', [], {}, {}, 'side'),
            new Component(2, 'LBdoor', 'Puerta Trasera', [], {}, {}, 'side'),
            new Component(3, 'LFpanel', 'Panel Frontal', [], {}, {}, 'side'),
            new Component(4, 'LBpanel', 'Panel Trasero', [], {}, {}, 'side'),
            new Component(5, 'LFbumper', 'Bumper Frontal', [], {}, {}, 'side'),
            new Component(6, 'LBbumper', 'Bumper Trasero', [], {}, {}, 'side'),
            new Component(7, 'LFwheel', 'Llanta Frontal', [], {}, {}, 'side'),
            new Component(8, 'LBwheel', 'Llanta Trasera', [], {}, {}, 'side'),
            new Component(9, 'LFwindow', 'Ventana Frontal', [], {}, {}, 'side'),
            new Component(10, 'LBwindow', 'Ventana Trasera', [], {}, {}, 'side'),
            new Component(11, 'windshield', 'Windshield', [], {}, {}, 'front'),
            new Component(12, 'leftrearview', 'Retrovisor Izquierdo', [], {}, {}, 'front'),
            new Component(13, 'rightrearview', 'Retrovisor Derecho', [], {}, {}, 'front'),
            new Component(14, 'hood', 'Capo', [], {}, {}, 'front'),
            new Component(15, 'leftlight', 'Luz Izquierda', [], {}, {}, 'front'),
            new Component(16, 'rightlight', 'Luz Derecha', [], {}, {}, 'front'),
            new Component(17, 'grill', 'Parrilla', [], {}, {}, 'front'),
            new Component(18, 'frontbumper', 'Bumper Frontal', [], {}, {}, 'front'),
        ]

    }

    getComponentByArea (area) {

        let component =
            this.getComponents()
                .filter((component) => { 
                    return component.areaId === (area.title || area.areaId) 
                })[0]
                
        if (!component) {
            return
        }

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
    
    @memoize
    getCategories () {
        const url = `${this.baseUrl}${'/categoria/apiLista'}`
        return _$http.get(url)
    }

    getBrands () {
        const url = `${this.baseUrl}${'/marca/apiLista'}`
        return _$http.get(url)
    }

    getAsyncFilters () {
        return Promise.all([this.getCategories(), this.getBrands()])
    }

    getMakeYearByBrand (brandId) {
        const url = `${this.baseUrl}${'/modelo/apiLista?'}${'marca='}${brandId}`
        return _$http.get(url)
    }

    getReplacements (categoryId = '', brandId, modelId) {
        const url = `${this.baseUrl}${'/stock_producto/apiRepuestoPrecio?'}
            ${'categoria='}${categoryId}${'&marca='}${brandId}${'&modelo='}${''}`
        return _$http.get(url)
    }

}

_module.service('orderDetailService', OrderDetailService)