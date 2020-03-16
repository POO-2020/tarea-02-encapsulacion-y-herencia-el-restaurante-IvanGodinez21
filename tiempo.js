export default class Tiempo {
    /**
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodos 
     */
    constructor(hora, minutos, periodos) {
        this._hora = hora
        this._minutos = minutos
        this._periodos = periodos.toLowerCase()
    }

    getFormato24() {
        let hora = this._hora
        let minutos = this._minutos
        let periodos = this._periodos
        if (periodos === "pm") {
            hora = hora + 12
            return `${hora}:${minutos}`
        }
        return `${hora}:${minutos}`
    }
    getFormato12() {
        let hora = this._hora
        let minutos = this._minutos
        let periodos = this._periodos
        if (hora >= 12) {
            periodos = "pm"
            hora = hora - 12
            return `${hora}:${minutos} ${periodos}`
        } else {
            periodos = "am"
            return `${hora}:${minutos} ${periodos}`
        }
    }

}