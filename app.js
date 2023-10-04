// Elementos del DOM

const modoDiaButton = document.getElementById("modoDia");
const body = document.body;
const navbar = document.getElementById("nav");
const logo = document.getElementById('logo');
const iconoModo = document.getElementById("iconoModo");
const textoColor = document.getElementById('textocolor');
const ventajas = document.getElementById('ventajas');

// Verificar la preferencia en el localStorage

const modoPreferencia = localStorage.getItem('modo-preferencia');

// Establecer el modo según la preferencia del usuario en el localStorage

if (modoPreferencia === 'noche') {
    body.classList.add("modo-dia");
    navbar.classList.add("modo-dia-navbar");
    textoColor.classList.add("texto-colorsito");
    ventajas.classList.add('blanco-texto');
    iconoModo.classList.remove("fa-sun");
    iconoModo.classList.add("fa-moon");
}

// Evento para cambiar el modo día/noche

modoDiaButton.addEventListener("click", () => {
    body.classList.toggle("modo-dia");
    navbar.classList.toggle("modo-dia-navbar");
    textoColor.classList.toggle("texto-colorsito");
    ventajas.classList.toggle('blanco-texto');

    if (iconoModo.classList.contains("fa-sun")) {
        iconoModo.classList.remove("fa-sun");
        iconoModo.classList.add("fa-moon");

        // Guardar la preferencia del usuario en el localStorage cuando se activa el modo noche

        localStorage.setItem('modo-preferencia', 'noche');
    } else {
        
        iconoModo.classList.remove("fa-moon");
        iconoModo.classList.add("fa-sun");

        // Guardar la preferencia del usuario en el localStorage cuando se activa el modo día

        localStorage.setItem('modo-preferencia', 'dia');
    }
});


