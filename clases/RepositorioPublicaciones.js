import { Publicacion } from "./publicacion/Publicacion.js"

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

    publicacionMasReciente() {
        let pMasNueva = this.#publicaciones[0]
        for (const p of this.#publicaciones) {
            if (p.fechaPublicacion > pMasNueva.fechaPublicacion) {
                pMasNueva = p
            }
        }
        return pMasNueva
    }

    cantidadPorUsuario(nombre) {
        let cantidad = 0
        for (const p of this.#publicaciones) {
            if (p.autor.nombre == nombre) {
                cantidad++
            }
        }
        return cantidad
    }

    existePublicacionActiva(titulo) {
        let existe = false
        if (this.#publicaciones.find(p => (p.titulo == titulo) && (p.estaActiva()))) {
            existe = true
        }
        return existe
    }

    resumenGeneral() {
        this.filtrarActivas
    }
}