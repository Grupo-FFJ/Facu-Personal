import { Usuario } from "../Usuario.js";
import { Publicacion } from "./Publicacion.js";

export class PublicacionServicio extends Publicacion {
    /** @type {string} */
    #modalidad
    /** @type {Number} */
    #duracionMinutos
    /** @type {Usuario} */
    #cliente

    constructor(titulo, descripcion, autor, modalidad, duracionMinutos) {
        super(titulo, descripcion, autor)
        this.#modalidad = modalidad
        this.#duracionMinutos = duracionMinutos
        this.#cliente = null
    }

    // hacer la asignacion de la modalidad para que solo se pueda asignar las modalidades Presencial o Virtual.

    /**
     * Devuelve un string formado por el resumen de Publicacion, y ademas los atributos modalidad y  duracion.
     * 
     * @returns {string}
     */
    mostrarResumen() {
        return super.mostrarResumen() + `\nModalidad: ${this.#modalidad} \nDuracion(minutos): ${this.#duracionMinutos}`
    }

    reservar(cliente) {
        this.#cliente = cliente
    }
}