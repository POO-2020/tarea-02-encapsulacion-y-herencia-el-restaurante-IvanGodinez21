export default class Cliente {
    /**
     * @param {string} nombre 
     * @param {string} direccion 
     * @param {number} telefono 
     */
    constructor({nombre, direccion, telefono}) {
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    getPerfil() {
        return `Nombre: ${this._nombre}\nDirección: ${this._direccion.getFormatoCorto()}\nTelefono: ${this._telefono}`
    }
}