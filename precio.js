export default class Precio {
    
    constructor(precio){
    this._precio = parseFloat(precio).toFixed(2);
    }

    getPrecio(){
        return `$${this._precio}`
    }
}