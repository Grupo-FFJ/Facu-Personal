import { Publicacion } from "./Publicacion.js";

export class PublicacionServicio extends Publicacion {
    /** @type {string} */
    #modalidad
    /** @type {Number} */
    #duracionMinutos

    constructor(titulo, descripcion, autor, modalidad, duracionMinutos) {
        super(titulo, descripcion, autor)
        this.#modalidad = modalidad
        this.#duracionMinutos = duracionMinutos
    }

    /**
     * Devuelve un string formado por el resumen de Publicacion, y ademas los atributos modalidad y  duracion.
     * 
     * @returns {string}
     */
    mostrarResumen() {
        return super.mostrarResumen() + `\nModalidad: ${this.#modalidad} \nDuracion(minutos): ${this.#duracionMinutos}`
    }
}