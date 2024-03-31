// https://nodejs.org/api/os.html

const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('-----------------------------------')

console.log('Plataforma: ', os.platform())
console.log('Sistema operativo: ', os.version())
console.log('Versión del sistema operativo: ', os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus()) // <-- con esto vamos a poder escalar procesos en Node
console.log('Memoria libre: ', (((os.freemem()/1024)/1024)/1024).toPrecision(4) , 'GB')
console.log('Memoria total: ', (((os.totalmem()/1024)/1024)/1024).toPrecision(4) , 'GB')
console.log('Uptime:', os.uptime()/60/60, 'horas')
console.log('Endian: ', os.endianness())


