function crearAnimaciones() {
    const fondo = document.querySelector('.fondo');
    
    // Función para generar corazones y rosas cayendo
    function crearElemento(clase) {
        const elemento = document.createElement('div');
        elemento.classList.add(clase);
        elemento.style.left = `${Math.random() * 100}vw`;
        elemento.style.animationDuration = `${Math.random() * 5 + 5}s`;
        elemento.style.opacity = `${Math.random() * 0.5 + 0.5}`;
        fondo.appendChild(elemento);

        // Eliminar el elemento después de la animación
        setTimeout(() => {
            elemento.remove();
        }, 10000);
    }

    setInterval(() => {
        crearElemento('corazon');
        crearElemento('rosa');
    }, 1000);
}

function abrirCarta() {
    const sobre = document.getElementById('sobre');
    sobre.classList.toggle('abierto');
}

// Iniciar las animaciones al cargar la página
window.onload = crearAnimaciones;

// Abrir la carta al hacer clic en el botón del corazón
const botonCorazon = document.getElementById('boton-corazon');
botonCorazon.addEventListener('click', abrirCarta);
