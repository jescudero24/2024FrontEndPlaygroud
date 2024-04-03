
// https://forms.office.com/e/GXQTWRnyYb


function pulsaSiguiente() {
    var boton = document.querySelector('.css-182');
    if (boton) {
        boton.click();
        setTimeout(function() {
            console.log('Han pasado 2 segundos después de hacer clic en el botón');
        }, 2000);
    } else {
        console.log('El botón no se encontró');
    }
}


function seleccionarEstudianteDeGrado() {
    // Busca el span que directamente contiene el texto "Estudiante de grado"
    let opciones = document.querySelectorAll('span[data-automation-value]');
    let objetivo;

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].getAttribute('data-automation-value') === 'Estudiante de grado') {
            objetivo = opciones[i];
            break;
        }
    }

    if (objetivo) {
        // Intenta disparar un evento de clic en el elemento encontrado
        objetivo.click();
    } else {
        console.log('No se encontró la opción "Estudiante de grado".');
    }
}


function seleccionarEstudianteDePosGrado() {
    let opciones = document.querySelectorAll('span[data-automation-value]');
    let objetivo;
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].getAttribute('data-automation-value') === 'Estudiante de posgrado') {
            objetivo = opciones[i];
            break;
        }
    }
    if (objetivo) {

        objetivo.click();
    } else {
        console.log('No se encontró la opción "Estudiante de posgrado".');
    }
}

seleccionarEstudianteDePosGrado();
pulsaSiguiente();



//-----------------------------------------------------------------------------------------


function seleccionarOpcionesAleatorias() {
    // Encuentra todos los grupos de opciones
    const grupos = document.querySelectorAll('div[role="radiogroup"]');

    // Itera sobre cada grupo de opciones
    grupos.forEach((grupo) => {
        // Encuentra todas las opciones dentro del grupo
        const opciones = grupo.querySelectorAll('input[type="radio"]');

        if (opciones.length > 0) {
            // Selecciona un índice aleatorio dentro del rango de opciones disponibles
            const indiceAleatorio = Math.floor(Math.random() * opciones.length);

            // Selecciona la opción correspondiente al índice aleatorio
            // Utiliza click() para simular la selección como un usuario
            opciones[indiceAleatorio].click();
        }
    });
}


function seleccionarRespuestaLikertAleatoria() {
    // Encuentra todas las filas de la tabla Likert que contienen opciones de respuesta
    const filasRespuestas = document.querySelectorAll('table.-fM-91 tbody tr[role="radiogroup"]');

    filasRespuestas.forEach((fila) => {
        // Encuentra todas las opciones (inputs de tipo radio) dentro de la fila
        const opciones = fila.querySelectorAll('input[type="radio"]');

        if (opciones.length > 0) {
            // Selecciona un índice aleatorio dentro del rango de opciones disponibles
            const indiceAleatorio = Math.floor(Math.random() * opciones.length);

            // Selecciona la opción correspondiente al índice aleatorio
            // Utiliza click() para simular la selección como un usuario
            opciones[indiceAleatorio].click();
        }
    });
}



function abrirMenuDesplegable() {
    // Selector que apunta al elemento que actúa como botón para desplegar el menú
    const botonDesplegable = document.querySelector('div.-a-261');
    
    // Verifica si el botón fue encontrado antes de intentar hacer clic
    if (botonDesplegable) {
        botonDesplegable.click();
    } else {
        console.log('Botón desplegable no encontrado.');
    }
}


function rellena() {
    // Llama a la primera función inmediatamente
    seleccionarRespuestaLikertAleatoria();

    // Programa la segunda función para ejecutarse después de 1 segundo
    setTimeout(() => {
        seleccionarOpcionesAleatorias();
    }, 1000);

    // Programa la tercera función para ejecutarse después de 2 segundos
    // (1 segundo después de la segunda función)
    setTimeout(() => {
        seleccionarRespuestaLikertAleatoria();
    }, 2000);

    // Programa la cuarta función para ejecutarse después de 3 segundos
    // (1 segundo después de la tercera función)
    setTimeout(() => {
        seleccionarOpcionesAleatorias();
    }, 3000);
}






