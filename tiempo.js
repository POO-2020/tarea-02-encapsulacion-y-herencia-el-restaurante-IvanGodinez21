export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodos 
     */
    constructor(hora, minutos, periodos) {
        this.hora = hora
        this.minutos = minutos
        this.periodos = periodos.toLowerCase()
    }

    getFormato24() {
        let hora = this.hora
        let minutos = this.minutos
        let periodos = this.periodos
        if (periodos === "pm") {
            hora = hora + 12
            return `${hora}:${minutos}`
        }
        return `${hora}:${minutos}`
    }
    getFormato12() {
        let hora = this.hora
        let minutos = this.minutos
        let periodos = this.periodos
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