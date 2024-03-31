// https://nodejs.org/api/os.html

import { platform, version, release, arch, cpus, freemem, totalmem, uptime, endianness } from 'node:os'

console.log('Información del sistema operativo:')
console.log('-----------------------------------')

console.log('Plataforma: ', platform())
console.log('Sistema operativo: ', version())
console.log('Versión del sistema operativo: ', release())
console.log('Arquitectura: ', arch())
console.log('CPUs: ', cpus()) // <-- con esto vamos a poder escalar procesos en Node
console.log('Memoria libre: ', (((freemem()/1024)/1024)/1024).toPrecision(4) , 'GB')
console.log('Memoria total: ', (((totalmem()/1024)/1024)/1024).toPrecision(4) , 'GB')
console.log('Uptime:', uptime()/60/60, 'horas')
console.log('Endian: ', endianness())


