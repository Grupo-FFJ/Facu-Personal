import { Publicacion } from "./Publicacion.js";

const publicaciones = [
    new Publicacion("Vendo comida", "Tengo empanadas y facturas", "Manolo"),
    new Publicacion("Doy clases", "De tango", "Romina"),
    new Publicacion("Vendo auto", "Gol", "Joaquin"),
    new Publicacion("Particular de Mates", "Hasta analisi 2", "Mirko")
]

publicaciones[0].cambiarActiva()
publicaciones[2].cambiarActiva()

publicaciones.forEach(p => console.log(`${p.mostrarResumen()} Activa: ${p.estaActiva()}`))

publicaciones.push(new Publicacion("Otra publicacion", "No se me ocurre nada", "Yo"))
publicaciones[4].cambiarActiva()

console.log(publicaciones[4].mostrarResumen())


const publicacionesActivas = publicaciones.filter(p => p.estaActiva())
console.log(`Las publicaciones activas son ${publicacionesActivas.length}`)

publicacionesActivas.forEach(p => console.log(`Titulo: ${p.titulo}`))
