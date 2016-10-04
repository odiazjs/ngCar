import _module from 'module'

let _$http, _httpConfig

export class OrderMasterService {

    constructor ($http, httpConfig) {
        _$http      = $http
        _httpConfig = httpConfig
    }

    getCustomers () {
        const url = `${_httpConfig.baseUrl}${'cliente/apiLista'}`
        return _$http.get(url)
    }

    getVehicles () {
        const url = `${_httpConfig.baseUrl}${'vehiculo/apiLista'}`
        return _$http.get(url)
    }

    getGasOptions () {
        return [
            {   
                id: '1/4',
                display: 'Un Cuarto de Tanque'
            },
            {
                id: '1/2',
                display: 'Medio Tanque'
            },
            {
                id: '3/4',
                display: 'Tres Cuartos de Tanque'
            },
            {
                id: '4/4',
                display: 'Tanque lleno'
            }
        ]
    }

    getEmployees () {
        const url = `${_httpConfig.baseUrl}${'empleado/apiLista'}`
        return _$http.get(url)
    }

}

_module.service('orderMasterService', OrderMasterService)