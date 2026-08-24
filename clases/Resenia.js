import { Usuario } from "./Usuario.js"

export class Resenia {
    /** @type {string} */
    #texto
    /** @type {Number} */
    #puntaje
    /** @type {Usuario} */
    #autor

    /**
     * 
     * @param {string} texto 
     * @param {Number} puntaje 
     * @param {Usuario} autor 
     */
    constructor(texto, puntaje, autor) {
        this.#texto = texto
        this.#puntaje = puntaje
        this.#autor = autor
    }

    // Getters
    get texto() {
        return this.#texto
    }

    get puntaje() {
        return this.#puntaje
    }

    get autor() {
        return this.#autor
    }
}