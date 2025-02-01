---
---

document.addEventListener('DOMContentLoaded', () => {
    // Configuración desde YAML
    const config = {
        contraseña: "{{ site.data.giftcard.palabra_secreta }}",
        sonido: {{ site.data.giftcard.efectos.sonido }},
        animaciones: {{ site.data.giftcard.efectos.animaciones }}
    };

    // Elementos del DOM
    const modal = new bootstrap.Modal('#modalSeguridad');
    const formulario = document.getElementById('formContraseña');
    const inputContraseña = document.getElementById('inputContraseña');
    const mensajeError = document.getElementById('mensajeError');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');
    let tarjeta = null;

    // Mostrar modal al cargar
    modal.show();

    // Manejar envío del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (inputContraseña.value === config.contraseña) {
            modal.hide();
            contenidoPrincipal.classList.remove('d-none');
            tarjeta = document.querySelector('.tarjeta');
            if(config.animaciones) iniciarAnimaciones();
        } else {
            inputContraseña.classList.add('is-invalid');
            mensajeError.classList.remove('d-none');
            if(config.sonido) reproducirSonidoError();
        }
    });

    // Toggle visibilidad de contraseña
    document.getElementById('botonMostrarContraseña').addEventListener('click', () => {
        inputContraseña.type = inputContraseña.type === 'password' ? 'text' : 'password';
    });

    // Animaciones
    function iniciarAnimaciones() {
        gsap.from(tarjeta, {
            duration: 1.5,
            scale: 0,
            rotationY: 180,
            ease: "elastic.out(1, 0.5)"
        });

        // Evento click para el flip
        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('volteada');
        });
    }

    // Sonidos
    function reproducirSonidoError() {
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');
        audio.volume = 0.3;
        audio.play();
    }
});