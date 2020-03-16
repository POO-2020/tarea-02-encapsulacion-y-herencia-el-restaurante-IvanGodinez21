export default class Direccion {
    /**
     * @param {string} calle 
     * @param {number} numE 
     * @param {number} numI 
     * @param {string} colonia 
     */
    constructor(tipo, nombre, numE, numI, colonia) {
        this._tipo = tipo
        this._nombre = nombre
        this._numE = numE
        this._numI = numI
        this._colonia = colonia
    }
    getFormatoCorto() {
        let tipo = this._tipo
        if (tipo === "Avenida" || tipo === "avenida") {
            tipo = "Av."
        } else if (tipo === "Calle" || tipo === "calle") {
            tipo = "C."
        }
        return `${tipo} ${this._nombre} ${this._numE} ${this._numI}`
    }
    getFormatoExtendido() {
        return `${this._tipo} ${this._nombre} ${this._numE} ${this._numI} ${this._colonia}`
    }
}