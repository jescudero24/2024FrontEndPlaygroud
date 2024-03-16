document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');

    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    const radio = 100; // Radio del círculo
    const duracionAnimacion = 2000; // Duración en milisegundos (2 segundos)
    const inicioAnimacion = performance.now();

    function dibujarCircunferencia(tiempoActual) {
        const tiempoTranscurrido = tiempoActual - inicioAnimacion;
        const progreso = tiempoTranscurrido / duracionAnimacion;

        const anguloFinal = progreso * 2 * Math.PI; // Completo sería 2 * PI

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

        ctx.beginPath();
        ctx.arc(centroX, centroY, radio, 0, anguloFinal);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.stroke();

        if (tiempoTranscurrido < duracionAnimacion) {
            requestAnimationFrame(dibujarCircunferencia);
        }
    }

    requestAnimationFrame(dibujarCircunferencia);
});
