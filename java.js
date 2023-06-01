// cosa del menu
function myFunction(x) {
    x.classList.toggle("change");

}



// MENUUUUU
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


// intento de fondo

const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
  menuItems.classList.toggle('open');
});




function mostrarAlerta() {
  alert("Añadido correctamente");
}


