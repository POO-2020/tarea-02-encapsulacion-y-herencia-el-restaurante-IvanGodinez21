export default class Producto {
    /**
     * @param {string} producto 
     * @param {string} tipo 
     * @param {string} tamaño 
     * @param {number} costo 
     */
    constructor(producto, tipo, tamaño, costo) {
        this._producto = producto
        this._tipo = tipo
        this._tamaño = tamaño
        this._costo = costo
    }
    getDescripcion() {
        return `${this._producto} ${this._tipo} ${this._tamaño} ${this._costo.getPrecio()}`
    }
}