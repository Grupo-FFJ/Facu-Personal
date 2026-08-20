import { Publicacion } from "./Publicacion.js"

export class RepositorioPublicaciones {
    /** @type {Array <Publicacion>} */
    #publicaciones

    constructor() {
        this.#publicaciones = []
    }

    /**
     * @param {Publicacion}
     */
    agregar(publicacion) {
        this.#publicaciones.push(publicacion)
    }

    /**
     * Devuelve el Array de Usuarios que tenga el mismo nombre que el dado.
     * 
     * @param {string} nombre 
     * @returns {Array <Publicacion>}
     */
    buscarPorUsuario(nombre) {
        return this.#publicaciones.filter(p => p.autor.nombre == nombre)
    }

    /**
     * Devuelve un array con todas las publicaciones activas.
     * 
     * @returns {Array <Publicacion>}
     */
    filtrarActivas() {
        return this.#publicaciones.filter(p => p.estaActiva())
    }

    /**
     * Devuelve cuantas publicaciones hay en el repositorio.
     * 
     * @returns {Number}
     */
    cantidadTotal() {
        return this.#publicaciones.length
    }
}