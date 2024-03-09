// THIS
// https://youtu.be/byirHCoSPFY


function getName(){
    console.log(this)
    console.log(this.nick)
}

globalThis.nick = 'global-nick'

getName() // global == globalThis == window --> Son variables globales que están disponibles en todos los contextos de ejecución

