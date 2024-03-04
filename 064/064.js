
// https://youtu.be/kjCH7vvISsE

// callback :: es una función que se pasa a otra como argumento, y se ejecuta después de que se haya completado alguna operación.

function sayHello(parameter){}
sayHello(argument)

//ForEach, map y reduce son callbacks


function modify(array,callback){
    // hacemos algo
    array.push('midu')
    //despues de hacer algo
    callback(array)
}

const names = ['gartiel', 'vedaskies', 'tomimelo']

modify(names, function(array){
    console.log(`He modificado el array y ahora es de ${array.lengh} elementos`)})