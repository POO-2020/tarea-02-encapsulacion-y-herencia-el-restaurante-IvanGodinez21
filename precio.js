export default class Precio {
    
    constructor(precio){
    this.precio = parseFloat(precio).toFixed(2);
    }

    getPrecio(){
        return `$${this.precio}`
    }
}