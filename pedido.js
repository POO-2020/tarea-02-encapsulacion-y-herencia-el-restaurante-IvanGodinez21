import Precio from "./precio.js";
export default class Pedido{

    constructor({fecha, hora, cliente}){
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._elementosPedidos = [];
    }

    getNumeroElementos(){
        return `${this._elementosPedidos.length}`
    }

    getNumeroProductos(){
        var productoNum = 0;
        this._elementosPedidos.forEach(elemento => {
            productoNum = elemento._cantidad
        })
        return productoNum;
    }

    getCostoTotal(){
        var costo = 0;
        this._elementosPedidos.forEach(elemento1 => {
            costo = elemento1._cantidad * elemento1._producto._costo._precio
        })
        return `${new Precio(costo).getPrecio()}`
    }

    agregarElemento(elemento1) {
        return `${this._elementosPedidos.push(elemento1)}`
    }
            
    listarElementos() {
        console.log("-----Listado de Platillos-----")
        this._elementosPedidos.forEach(elemento =>{
            console.log(elemento.getDescripcionpedido())
        })
    }

    getResumen() {
        return `${this._fecha.getFecha()} ${this._hora.getFormato12()} \n${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos.`
    }
    getCliente() {
        return `${this._cliente}`
    }
    esIgualA(pedido) {
        if (pedido.getCliente() === this._cliente) {
            return true
        }
    }
}