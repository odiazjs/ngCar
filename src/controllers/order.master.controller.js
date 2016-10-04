import _module from 'module'
import _ from 'lodash'

let _orderMasterService

export class OrderMasterCtrl { 

    constructor (orderMasterService) {
        _orderMasterService = orderMasterService
        this.order = {
            date: new Date(),
            customer: {},
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

    loadDefault () {
        this.getCustomers()
        this.getVehicles()
        this.getGasOptions()
        this.getEmployees()
    }

}

_module.controller('OrderMasterCtrl', OrderMasterCtrl)