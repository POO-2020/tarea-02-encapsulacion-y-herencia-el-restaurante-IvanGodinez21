export default class Fecha {
    /**
     * @param {number} dia
     * @param {number} mes
     * @param {number} año
     */
    constructor(dia, mes, año) {
        this._fecha = new Date(año, mes -1, dia);
        this._mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        this._diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    }
    getAños() {
        let restaAños = new Date(Date.now() - this._fecha);
        var msAño = 1000 * 60 * 60 * 24 * 365;
        let años = Math.trunc(restaAños/msAño);
        return `${años}`;
    }
    getMeses() {
        let restaMeses = new Date(Date.now() - this._fecha);
        let msMeses = (1000 * 60 * 60 * 24 * 365) / 12;
        let meses = Math.trunc(restaMeses/msMeses);
        return `${meses}`;
    }
    getSemanas() {
        let restaSemanas = new Date(Date.now() - this._fecha);
        let msSemanas = (1000 * 60 * 60 * 24 * 365) / 52.1429;
        let semanas = Math.trunc(restaSemanas/msSemanas)
        return `${semanas}`;
    }
    getDias() {
        let restaDias = new Date(Date.now() - this._fecha);
        let msDias = 1000 * 60 * 60 * 24;
        let dias = Math.trunc(restaDias/msDias)
        return `${dias}`;
    }
    getFecha() {
        return `${this._fecha.getDate()}/${this._mesesAño[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`;
    }
    getDiaFecha() {
        return `${this._diasSemana[this._fecha.getDay()-1]}`
    }
}