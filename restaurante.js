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

    registrarPedido(pedido) {
        this._pedidos.push(pedido)

    }
    
    listarPedidos() {
        this._pedidos.forEach((pedido,i) =>{

            console.log(`Pedido #${i+1} ${pedido.getResumen()}`)
        })
    }

    listarProductos() {
        this._productos.forEach((producto) =>{
            console.log(`Producto: ${producto.getDescripcionpedido()}`)
        })
    }
       
}