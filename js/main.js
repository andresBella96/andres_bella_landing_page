// Espera a que el DOM esté completamente cargado antes de ejecutar el script.
// Esto asegura que todos los elementos estén disponibles para ser seleccionados.
document.addEventListener("DOMContentLoaded", () => {

  // Referencias a los elementos clave del lightbox
  const lightbox = document.getElementById('lightbox');       // Fondo oscuro a pantalla completa
  const lightboxImg = document.getElementById('lightbox-img'); // Imagen grande dentro del lightbox
  const img = document.querySelector('.sobremi-photo img');    // Imagen pequeña que se clicará

  // Verificamos que todos los elementos existen antes de añadir eventos
  if (img && lightbox && lightboxImg) {
    
    // Al hacer clic sobre la imagen pequeña, se activa el lightbox
    img.addEventListener('click', () => {
      // Se copia la ruta de la imagen pequeña a la grande
      lightboxImg.src = img.src;
      // Se muestra el lightbox (que estaba oculto por CSS)
      lightbox.style.display = 'flex';  // Usamos flex para centrarlo vertical y horizontalmente
    });

    // Al hacer clic en cualquier parte del lightbox (incluida la imagen),
    // se vuelve a ocultar
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }
  
  // Efecto en el header al hacer scroll

  const header = document.getElementById("main-header");

  // Si el header existe, activamos el evento scroll
  if (header) {
    window.addEventListener("scroll", () => {
      // Si hemos bajado más de 10px, añadimos una clase que le da fondo y sombra
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        // Si volvemos a la parte superior, se elimina ese fondo
        header.classList.remove("scrolled");
      }
    });
  }
});

