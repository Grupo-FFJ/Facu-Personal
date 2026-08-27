export class Reglas {
    /** @type {Number} */
    #minTitulo
    /** @type {Number} */
    #maxTitulo
    /** @type {Number} */
    #maxDescripcion

    /**
     * 
     * @param {Number} minTitulo 
     * @param {Number} maxTitulo 
     * @param {Number} maxDescripcion 
     */
    constructor(
        minTitulo,
        maxTitulo,
        maxDescripcion,
    ) {
        this.#minTitulo = minTitulo
        this.#maxTitulo = maxTitulo
        this.#maxDescripcion = maxDescripcion
    }

    // Getters
    get minTitulo() {
        return this.#minTitulo
    }

    get maxTitulo() {
        return this.#maxTitulo
    }

    get maxDescripcion() {
        return this.#maxDescripcion
    }

    /**
     * Devuelve si el string tiene la primera letra en mayuscula.
     * 
     * @param {string} string 
     * @returns {boolean}
     */
    primerLetraMayuscula(string) {
        return string[0] == string[0].toUpperCase()
    }
}