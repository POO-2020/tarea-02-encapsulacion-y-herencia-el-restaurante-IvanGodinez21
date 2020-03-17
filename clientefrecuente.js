import Cliente from "./cliente.js";

export default class ClienteFrecuente extends Cliente {
    /**
     * @param {number} numero 
     * @param {fecha} fecha 
     */
    constructor({nombre, direccion, telefono, numero, fecha}) {
        super({nombre, direccion, telefono})
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
        this._numero = numero
        this._fecha = fecha
    }
    getPerfil() {
        return `Numero de Cliente: #${this._numero}\nFecha de Registro: ${this._fecha.getFecha()}\nNombre: ${this._nombre}\nDirección: ${this._direccion.getFormatoCorto()}\nTelefono: ${this._telefono}`
    }
}