import { Publicacion } from "./Publicacion.js";

export class PublicacionVenta extends Publicacion{
    /** @type {Number} */
    #precio
    /** @type {Number} */
    #stock

    constructor (titulo, descripcion, autor, precio) {
        super(titulo, descripcion, autor)
        this.#precio = precio
        this.#stock = 1
    }

    /**
     * Devuelve un string formado por el resumen de Publicacion, y ademas los atributos precio y stock.
     * 
     * @returns {string}
     */
    mostrarResumen() {
        return super.mostrarResumen() + `\nPrecio: ${this.#precio} \nStock: ${this.#stock}`
    }
}