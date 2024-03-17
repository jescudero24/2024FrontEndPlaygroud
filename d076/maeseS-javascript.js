// cargarIMG.js

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.plusWiki a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace.
            
            // Obtiene la URL del enlace clicado y el texto alt.
            const href = this.getAttribute('href');
            const altText = this.getAttribute('alt');
            
            // Encuentra el elemento de imagen por su ID y actualiza su 'src' con la URL del enlace.
            document.getElementById('imgFrame').src = href;

            // Actualiza el figcaption con el valor del alt del enlace.
            document.querySelector('.plusIMGContent figcaption').textContent = altText;
        });
    });
});

// cargarWKP.js

document.addEventListener("DOMContentLoaded", function() {
    // Encuentra todos los enlaces dentro del contenedor 'plusWiki'.
    document.querySelectorAll('.plusWiki a').forEach(function(link) {
        // Añade un escuchador de eventos de clic a cada enlace.
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace.
            
            // Obtiene la URL del enlace clicado.
            const href = this.getAttribute('href');
            
            // Encuentra el iframe por su ID y actualiza su 'src' con la URL del enlace.
            document.getElementById('wikiFrame').src = href;
        });
    });
});

// cargarYTB.js

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