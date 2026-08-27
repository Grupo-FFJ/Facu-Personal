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

    /**
     * Devuelve la publicacion con la fecha mas actual.
     * 
     * @returns {Publicacion}
     */
    publicacionMasReciente() {
        let pMasNueva = this.#publicaciones[0]
        for (const p of this.#publicaciones) {
            if (p.fechaPublicacion > pMasNueva.fechaPublicacion) {
                pMasNueva = p
            }
        }
        return pMasNueva
    }

    /**
     * Busca la cantidad de publicaciones que hay con el nombre del autor dado.
     * 
     * @param {string} nombre 
     * @returns {Number}
     */
    cantidadPorUsuario(nombre) {
        let cantidad = 0
        for (const p of this.#publicaciones) {
            if (p.autor.nombre == nombre) {
                cantidad++
            }
        }
        return cantidad
    }

    /**
     * Devuelve true si eiste una publicacion con el titulo dado que este activa y false de lo contrario.
     * 
     * @param {string} titulo 
     * @returns {boolean}
     */
    existePublicacionActiva(titulo) {
        let existe = false
        if (this.#publicaciones.find(p => (p.titulo == titulo) && (p.estaActiva()))) {
            existe = true
        }
        return existe
    }

    /**
     * Imprime por consola el resumen de todas las publicaciones activas, uno por linea.
     */
    resumenGeneral() {
        this.filtrarActivas().forEach(p => console.log(p.mostrarResumen()))
    }

    /**
     * Devuelve un array con todas las publicaciones que son de la misma clase que el objecto dado.
     * 
     * @param {Object} claseConstructor 
     * @returns {Array<Publicacion>}
     */
    listarPorTipo(claseConstructor) {
        return this.#publicaciones.filter(p => p instanceof claseConstructor)
    }

    listarResumenes() {
        // .map((currentValue, index[opcional], actualArray[opcional]) => function)
        // la funcion ya retorna un array con cada pocision siendo el callback que se llama. 
        return this.#publicaciones.map((p) => p.mostrarResumen())
    }
}