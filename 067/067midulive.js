// El reduce accepta un método como primer parámetro, es un callback que se va a ejecutar por cada uno de los elementos.
// Al callback le llega valorAnterior, valorActual, indice, array

/* suma */

let sumaArray

sumaArray=[0,1,2,3,4].reduce((valorAnterior,valorActual,indice,array)=>{
    console.log(valorAnterior,valorActual,indice,array)
    return valorAnterior + valorActual
})

console.log(sumaArray)

// Hay muy pocas veces en la vida que debes usar un reduce
// Casi no tienes ventajas de performance y tiene una carga cognitiva muy grande
// https://www.youtube.com/watch?v=qaGjS7-qWzg&ab_channel=ChromeforDevelopers
// Se puede usar en cuatro casos:
// 1 - Sum or sum-like
// 2 - Array methods (+Object.entries())
// 3 - It's a loop, innit?
// 4 - #IamSmarterThanYou

let maximoArray=0

maximoArray=Math.max (...[0,6,2,3,4])
console.log(maximoArray)

maximoArray = [0,6,2,3,4].reduce(
    (valorAnterior, valorAcumulado, indice, array)=>{
        if(valorAnterior < valorAcumulado){
            return valorAcumulado
        }
        return valorAnterior
    }
    ,[])

console.log(maximoArray)


/* solo devuelva los pares y los multiplica por 2*/

let duplosPares

duplosPares=[1,2,3,4,5,6].reduce (
    (prev,actual) =>{
        if (actual % 2 == 0){
            return [...prev, actual * 2 ]
        }
        return prev
    },[]
)

console.log(duplosPares)


duplosPares=[1,2,3,4,5,6].filter( n => n % 2 == 0).map( n => n*2 )

console.log(duplosPares)


// No se debe mutar un array si no lo tienes controlado
