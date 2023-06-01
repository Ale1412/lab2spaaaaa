const links = document.querySelectorAll('.image-change');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundImage = `url(${getRandomImage()})`;
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundImage = '';
  });
});

function getRandomImage() {
  const images = ['CLÍNICA.png', 'Spa.png']; // Agrega aquí las rutas de tus imágenes
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
