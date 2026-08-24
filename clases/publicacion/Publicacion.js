import { Resenia } from "../Resenia.js"
import { Usuario } from "../Usuario.js"

export class Publicacion {
    /** @type {string} */
    #titulo
    /** @type {string} */
    #descripcion
    /** @type {Usuario} */
    #autor
    /** @type {Date} */
    #fechaPublicacion
    /**@type {boolean} */
    #activa
    /**@type {Array <Resenia>} */
    #resenias

    /**
     * 
     * @param {string} titulo 
     * @param {string} descripcion 
     * @param {Usuario} autor 
     */
    constructor(titulo, descripcion, autor) {
        this.#titulo = titulo
        this.#descripcion = descripcion
        this.#autor = autor
        this.#fechaPublicacion = new Date()
        this.#activa = true
        this.#resenias = []
    }

    // Getters
    /**
     * @returns {string}
     */
    get titulo() {
        return this.#titulo
    }

    /**
     * @returns {Usuario}
     */
    get autor() {
        return this.#autor
    }

    get fechaPublicacion() {
        return this.#fechaPublicacion
    }

    // Metodos
    /**
     * Devuelve un string corto combinando titulo y autor.
     * 
     * @returns {string}
     */
    mostrarResumen() {
        return `Titulo: ${this.#titulo} \nAutor: (${this.#autor.mostrarPerfil()})`
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

    /**
     * 
     * @param {Resenia} resenia 
     */
    agregarResenia(resenia) {
        this.#resenias.push(resenia)
    }

    promedioPuntaje() {
        return this.#resenias.reduce((total, r) => total + r.puntaje, 0) / this.#resenias.length
    }

    // enviarResumenPorEmail(servicioDeEmail) {
    //     servicioDeEmail.enviar(this.mostrarResumen())
    // }
}