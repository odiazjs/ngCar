import _module from 'module'
import _ from 'lodash'

let _orderMasterService, _$stateParams, _$state

export class OrderMasterCtrl { 

    constructor (orderMasterService, $stateParams, $state) {
        _orderMasterService = orderMasterService,
        _$stateParams       = $stateParams
        _$state             = $state
        this.order = {
            date: new Date(),
            customer: {},
            clientName: '',
            vehicle: {},
            gasOption: {},
            distance: 0,
            employeeReceptor: {},
            employeeResponsable: {},
            observation: ''
        }
        this.customers              = []
        this.vehicles               = []
        this.gasOptions             = []
        this.employeesReceptor      = []
        this.employeesResponsable   = []
        this.loadDefault()
    }

    getCurrentDate () {
        return new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }

    getCustomers () {
        _orderMasterService
            .getCustomers()
            .then((result) => {
                if(result.status === 200) {
                   this.customers = result.data
                }
            })
    }

    getVehicles () {
        _orderMasterService
            .getVehicles()
            .then((result) => {
                if(result.status === 200) {
                   this.vehicles = result.data
                }
            })
    }

    getGasOptions () {
        this.gasOptions = _orderMasterService.getGasOptions()
    }

    getEmployees () {
        _orderMasterService
            .getEmployees()
            .then((result) => {
                if(result.status === 200) {

                   this.employeesReceptor = result.data
                       .filter((employee) => {
                           return employee.PUESTO === '3'
                       })

                    this.employeesResponsable = result.data
                       .filter((employee) => {
                           return employee.PUESTO === '1'
                       })
                }
            })
    }

    saveOrder () {
        
        let json = {
            "FECHA": this.order.date.toISOString(),
            "ESTABLECIMIENTO":"4",
            "CAJA":"2",
            "CLIENTE": this.order.customer.ID,
            "NOMBRE_DEL_CLIENTE": this.order.clientName ,
            "VEHICULO": this.order.vehicle.ID,
            "COMBUSTIBLE": this.order.gasOption.id,
            "KM_O_MILLAS_ACTUALES": this.order.distance,
            "EMPLEADO_RECEPTOR": this.order.employeeReceptor.ID,
            "EMPLEADO_RESPONSABLE": this.order.employeeResponsable.ID,
            "OBSERVACIONES": this.order.observation,
            "SUBTOTAL": 0.0,
            "MANO_DE_OBRA":0.0,
            "TOTAL":0.0,
            "BORRADO":"0"
        }

            _orderMasterService
                .saveOrder(json)
                .catch((ex) => {
                    alert('No se pudo guardar la orden, intente de nuevo')
                })
                .then( (result) => {
                    if (result.data.ID) {
                        const id = parseInt(result.data.ID)
                        _$state.go('root.detail', { orderId: id })
                    } else {
                        alert('Deben seleccionarse todos los campos.')
                    }
                })

    }

    loadDefault () {
        this.getCustomers()
        this.getVehicles()
        this.getGasOptions()
        this.getEmployees()
        this.getCurrentDate()
    }

}

_module.controller('OrderMasterCtrl', OrderMasterCtrl)