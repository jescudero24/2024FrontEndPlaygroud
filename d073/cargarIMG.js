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
