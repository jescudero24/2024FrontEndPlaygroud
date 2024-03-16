// Espera a que el contenido del DOM esté completamente cargado.
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
