import { Publicacion } from "./clases/publicacion/Publicacion";


/**
 * 
 * @param {Publicacion} publicaion 
 * @returns {boolean}
 */
export function validarPublicacion(publicaion, reglas) {
    let valido = true
    if (reglas.minTitulo < publicaion.titulo.length || reglas.maxTitulo > publicaion.titulo.length) {
        valido = false
    }
    else if (reglas.primerLetraMayuscula(publicaion.titulo)) {
        valido = false
    }

    return valido
}