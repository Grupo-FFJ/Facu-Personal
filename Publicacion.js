export class Publicacion {
    /** @type {string} */
    #titulo
    /** @type {string} */
    #descripcion
    /** @type {string} */
    #autor
    /** @type {Date} */
    #fechaPublicacion
    /**@type {boolean} */
    #activa

    /**
     * 
     * @param {string} titulo 
     * @param {string} descripcion 
     * @param {string} autor 
     */
    constructor(titulo, descripcion, autor) {
        this.#titulo = titulo
        this.#descripcion = descripcion
        this.#autor = autor
        this.#fechaPublicacion = new Date()
        this.#activa = true
    }

    // Getters
    get titulo() {
        return this.#titulo
    }

    // Metodos
    /**
     * Devuelve un string corto combinando titulo y autor.
     * 
     * @returns {string}
     */
    mostrarResumen() {
        return `Titulo: ${this.#titulo} Autor: ${this.#autor}`
    }

    /**
     * Devuelve valor de activa.
     * 
     * @returns {boolean}
     */
    estaActiva() {
        return this.#activa
    }

    /**
     * Cambia el valor de activa al contrario del actual.
     */
    cambiarActiva() {
        this.#activa = !this.#activa
    }
}