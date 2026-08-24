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

    mostrarResumen() {
        return super.mostrarResumen() + `\nPrecio: ${this.#precio} \nStock: ${this.#stock}`
    }
}