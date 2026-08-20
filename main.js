import { Publicacion } from "./Publicacion.js";
import { RepositorioPublicaciones } from "./RepositorioPublicaciones.js";
import { Usuario } from "./Usuario.js";

const usuario1 = new Usuario("Manolo", "mail@1")
const usuario2 = new Usuario("Romina", "mail@2")
const usuario3 = new Usuario("Joaquin", "mail@3")

const publicaciones = [
    new Publicacion("Vendo comida", "Tengo empanadas y facturas", usuario1),
    new Publicacion("Doy clases", "De tango", usuario3),
    new Publicacion("Vendo auto", "Gol", usuario2),
    new Publicacion("Particular de Mates", "Hasta analisi 2", usuario3),
    new Publicacion("Otra publicacion", "No se me ocurre nada", usuario3)
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