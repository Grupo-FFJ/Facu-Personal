import { PublicacionServicio } from "./clases/publicacion/PublicacionServicio.js";
import { PublicacionVenta } from "./clases/publicacion/PublicacionVenta.js";
import { Publicacion } from "./clases/publicacion/Publicacion.js";
import { Usuario } from "./clases/Usuario.js";
import { RepositorioPublicaciones } from "./clases/RepositorioPublicaciones.js";
import { Reglas } from "./clases/Reglas";

const usuario1 = new Usuario("Manolo", "mail@1")
const usuario2 = new Usuario("Romina", "mail@2")
const usuario3 = new Usuario("Joaquin", "mail@3")

const publicaciones = [
    new PublicacionVenta("Vendo comida", "Tengo empanadas y facturas", usuario1, 3000),
    new PublicacionServicio("Doy clases", "De tango", usuario3, "Presencial", 120),
    new PublicacionVenta("Vendo auto", "Gol", usuario2, 2200),
    new PublicacionServicio("Particular de Mates", "Hasta analisis 2", usuario3, "Virtual", 60),
    new PublicacionServicio("Otra publicacion", "No se me ocurre nada", usuario3, "Presencial", 25)
]

publicaciones[0].cambiarActiva()
publicaciones[2].cambiarActiva()

publicaciones.forEach(p => console.log(`${p.mostrarResumen()} Activa: ${p.estaActiva()}`))

const publicacionesActivas = publicaciones.filter(p => p.estaActiva())
publicacionesActivas.forEach(p => console.log(`${p.mostrarResumen()} Activa: ${p.estaActiva()}`))

const primerPubli = publicaciones.find(p => p.autor.nombre == usuario3.nombre)
console.log(primerPubli.mostrarResumen())

const repositorioPublis = new RepositorioPublicaciones()
publicaciones.forEach(p => repositorioPublis.agregar(p))

console.log(repositorioPublis.cantidadTotal())
repositorioPublis.buscarPorUsuario("Joaquin").forEach(p => console.log(p.mostrarResumen()))

console.log(repositorioPublis.publicacionMasReciente().mostrarResumen())

repositorioPublis.resumenGeneral()


/** @type {Reglas} */
const reglasPublicaciones = new Reglas(
    3,
    12,
    300,
)