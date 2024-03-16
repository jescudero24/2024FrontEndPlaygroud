/*
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.plusYTB a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Extrae el ID del video de YouTube desde la URL.
            // Asume que el formato de la URL es como "https://youtu.be/VIDEO_ID"
            const videoUrl = new URL(this.getAttribute('href'));
            const videoId = videoUrl.pathname.split('/')[1];
            
            // Construye la URL de incrustación con el ID del video.
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;

            // Actualiza el 'src' del iframe con la URL de incrustación.
            document.getElementById('ytbFrame').src = embedUrl;
        });
    });

        // Encuentra el botón de cerrar y añade un escuchador de eventos de clic.
        document.querySelector('.closeYTB').addEventListener('click', function() {
            // Encuentra el iframe.
            const ytbFrame = document.getElementById('ytbFrame');
    
            // Opción 1: Detener el video limpiando el src.
            // ytbFrame.src = "";
    
            // Opción 2: Detener el video recargando el src actual (comentada).
            ytbFrame.src = ytbFrame.src;
        });
});
*/


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.plusYTB a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const videoUrl = new URL(this.getAttribute('href'));
            const videoId = videoUrl.pathname.split('/')[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            
            document.getElementById('ytbFrame').src = embedUrl;
        });
    });

    // Añade un evento de clic para detener el video al cerrar el lightbox
    document.querySelector('.closeYTB').addEventListener('click', function() {
        const ytbFrame = document.getElementById('ytbFrame');
        // Guarda la URL actual (opcional, en caso de que quieras reanudarlo más tarde)
        const currentSrc = ytbFrame.src;
        // Reinicia la fuente del iframe para detener el video
        ytbFrame.src = "";
        // Puedes restaurar la URL aquí si es necesario, dependiendo de tu flujo de trabajo
        // ytbFrame.src = currentSrc;
    });
});
