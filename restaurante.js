export default class Restaurante {

    /**
     * @param {string} nombre 
     * @param {number} telefono 
     * @param {string} direccion 
     */

    constructor(nombre,telefono,direccion) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = new Array
        this._pedidos = new Array

    }
    
    registrarProducto(producto) {  
        this._productos.push(producto)
    }
    listarProductos() {
        this._productos.forEach((producto) =>{
            console.log(`Producto: ${producto.getDescripcionpedido()}`)
        })
    }
    buscarPedido(pedido) {
        let result = this._pedidos.find(p => p.esIgualA(pedido));
        if (result = this._pedidos) {
        return result
        } else {
            return null
        }
    }

    registrarPedido(pedido) {
        if (this.buscarPedido(pedido) != null) {
            return false
        }
        this._pedidos.push(pedido)
        return true
    }

    eliminarPedido(pedido) {
        let result = this.buscarPedido(pedido)

        if(result < 0) {
            return false
        }
        this._pedidos.splice(result, 1)
        return true
    }
    
    modificarPedido(pedido, nuevoPedido) {
        let result = this.buscarPedido(pedido)

        if(result < 0) {
            return false
        }
        this._pedidos.splice(result, 1, nuevoPedido)
        return true
    }

    listarPedidos() {
        this._pedidos.forEach((pedido,i) =>{

            console.log(`Pedido #${i+1} ${pedido.getResumen()}`)
        })
    }
}