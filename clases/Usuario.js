export class Usuario {
    /** @type {string} */
    #nombre
    /** @type {string} */
    #email
    /** @type {Date} */
    #fechaRegistro
    /** @type {Array<Usuario>} */
    #contactos

    /**
     * 
     * @param {string} nombre  
     * @param {string} email
     */
    constructor(nombre, email) {
        this.#nombre = nombre
        this.#email = email
        this.#fechaRegistro = new Date()
        this.#contactos = []
    }

    // Getters
    /**
     * @returns {string}
     */
    get nombre() {
        return this.#nombre
    }

    /**
     * @returns {string}
     */
    get email() {
        return this.#email
    }

    /**
     * Devuelve un string corto combinando nombre y email.
     * 
     * @returns {string}
     */
    mostrarPerfil() {
        return `Nombre: ${this.#nombre}, Email: ${this.#email}`
    }

    cambiarEmail(newEmail) {
        this.#email = newEmail
    }

    agregarContacto(contacto) {
        this.#contactos.push(contacto)
    }
}