export default class Producto {
    /**
     * @param {string} producto 
     * @param {string} tipo 
     * @param {string} tamaño 
     * @param {number} costo 
     */
    constructor(producto, tipo, tamaño, costo) {
        this.producto = producto
        this.tipo = tipo
        this.tamaño = tamaño
        this.costo = costo
    }
    getDescripcion() {
        return `${this.producto} ${this.tipo} ${this.tamaño} ${this.costo.getPrecio()}`
    }
}