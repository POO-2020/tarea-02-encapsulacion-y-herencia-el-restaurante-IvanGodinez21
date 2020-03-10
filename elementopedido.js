export default class ElementoPedido {
    /**
     * @param {number} cantidad 
     * @param {number} precio
     * @param {string} producto 
     */
    constructor(cantidad, precio, producto) {
        this.cantidad = cantidad
        this.precio = precio
        this.producto = producto
    }
    getDescripcionpedido() {
        return `x${this.cantidad} ${this.producto.getDescripcion()}`
    }
}