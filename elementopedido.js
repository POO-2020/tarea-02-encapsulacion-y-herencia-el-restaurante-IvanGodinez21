export default class ElementoPedido {
    /**
     * @param {number} cantidad 
     * @param {number} precio
     * @param {string} producto 
     */
    constructor({cantidad, precio, producto}) {
        this._cantidad = cantidad
        this._precio = precio
        this._producto = producto
    }
    getDescripcionpedido() {
        return `x${this._cantidad} ${this._producto.getDescripcion()}`
    }
}