document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');

    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    const radio = 100; // Radio del círculo
    const duracionAnimacionLinea = 2000; // Duración en milisegundos (2 segundos) para la línea
    const duracionAnimacionCirculo = 2000; // Duración en milisegundos (2 segundos) para el círculo
    let inicioAnimacion = performance.now();

    // Dibuja el punto blanco en el centro
    function dibujarPuntoCentral() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(centroX, centroY, 5, 0, 2 * Math.PI); // Punto de 10px de diámetro
        ctx.fill();

        // Comienza la animación de la línea después de dibujar el punto
        requestAnimationFrame(dibujarLinea);
    }

    // Dibuja la línea blanca
    function dibujarLinea(tiempoActual) {
        const tiempoTranscurrido = tiempoActual - inicioAnimacion;
        const progreso = tiempoTranscurrido / duracionAnimacionLinea;
        const longitudLinea = progreso * (canvas.width / 2 - centroX - 20); // Termina 20px antes del borde

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

        // Re-dibuja el punto central
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(centroX, centroY, 5, 0, 2 * Math.PI);
        ctx.fill();

        // Dibuja la línea
        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        ctx.lineTo(centroX + longitudLinea, centroY);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.stroke();

        if (tiempoTranscurrido < duracionAnimacionLinea) {
            requestAnimationFrame(dibujarLinea);
        } else {
            inicioAnimacion = performance.now(); // Restablece el tiempo de inicio para la circunferencia
            requestAnimationFrame(dibujarCircunferencia);
        }
    }

    // Dibuja la circunferencia
    function dibujarCircunferencia(tiempoActual) {
        const tiempoTranscurrido = tiempoActual - inicioAnimacion;
        const progreso = tiempoTranscurrido / duracionAnimacionCirculo;
        const anguloFinal = progreso * 2 * Math.PI;

        const xFinalLinea = centroX + (canvas.width / 2 - centroX - 20); // Posición final de la línea para iniciar la circunferencia

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

        // Re-dibuja el punto central y la línea
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(centroX, centroY, 5, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        ctx.lineTo(xFinalLinea, centroY);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.stroke();

        // Dibuja la circunferencia desde el final de la línea
        ctx.beginPath();
        ctx.arc(xFinalLinea, centroY, radio, 0, anguloFinal);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.stroke();

        if (tiempoTranscurrido < duracionAnimacionCirculo) {
            requestAnimationFrame(dibujarCircunferencia);
        }
    }

    // Inicia la secuencia con el punto central
    dibujarPuntoCentral();
});
