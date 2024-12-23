// Función para mostrar la imagen en el lightbox
function mostrarImagen(img) {
    var lightbox = document.getElementById("lightbox");
    var imgAmpliada = document.getElementById("imgAmpliada");
    imgAmpliada.src = img.src; // Asigna la fuente de la imagen seleccionada al lightbox
    lightbox.style.display = "flex"; // Muestra el lightbox
}

// Función para cerrar el lightbox
function cerrarLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Oculta el lightbox
}