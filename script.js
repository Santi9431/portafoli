let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Ocultar el menú una vez que se selecciona una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanciaSkills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detectar el scroll para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}
