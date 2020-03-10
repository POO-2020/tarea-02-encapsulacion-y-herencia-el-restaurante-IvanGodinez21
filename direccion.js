export default class Direccion {
    /**
     * 
     * @param {string} calle 
     * @param {number} numE 
     * @param {number} numI 
     * @param {string} colonia 
     */
    constructor(tipo, nombre, numE, numI, colonia) {
        this.tipo = tipo
        this.nombre = nombre
        this.numE = numE
        this.numI = numI
        this.colonia = colonia
    }
    getFormatoCorto() {
        let tipo = this.tipo
        if (tipo === "Avenida" || tipo === "avenida") {
            tipo = "Av."
        } else if (tipo === "Calle" || tipo === "calle") {
            tipo = "C."
        }
        return `${tipo} ${this.nombre} ${this.numE} ${this.numI}`
    }
    getFormatoExtendido() {
        return `${this.tipo} ${this.nombre} ${this.numE} ${this.numI} ${this.colonia}`
    }
}