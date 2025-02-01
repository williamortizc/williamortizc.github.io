---
---

document.addEventListener('DOMContentLoaded', () => {
    // Configuración
    const CONFIG = {
        CLAVE: "{{ site.data.giftcard.palabra_secreta }}",
        SONIDO: {{ site.data.giftcard.efectos.sonido }},
        ANIMACIONES: {{ site.data.giftcard.efectos.animaciones }}
    };

    // Elementos
    const modal = new bootstrap.Modal('#modalAcceso');
    const form = document.getElementById('formAcceso');
    const inputClave = document.getElementById('inputClave');
    const mensajeError = document.getElementById('mensajeError');
    const contenidoTarjeta = document.getElementById('contenidoTarjeta');
    let tarjeta = null;

    // Sonidos
    const SONIDOS = {
        exito: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkle-902.mp3'] }),
        error: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'] }),
        flip: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-paper-flip-1936.mp3'] })
    };

    // Inicialización
    modal.show();

    // Eventos
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validarAcceso();
    });

    // Funciones principales
    function validarAcceso() {
        if (inputClave.value === CONFIG.CLAVE) {
            accesoCorrecto();
        } else {
            accesoDenegado();
        }
    }

    function accesoCorrecto() {
        if (CONFIG.SONIDO) SONIDOS.exito.play();
        modal.hide();
        mostrarTarjeta();
        inicializarFlip();
    }

    function accesoDenegado() {
        inputClave.classList.add('is-invalid');
        mensajeError.classList.remove('d-none');
        if (CONFIG.SONIDO) SONIDOS.error.play();
    }

    function mostrarTarjeta() {
        contenidoTarjeta.classList.remove('d-none');
        if (CONFIG.ANIMACIONES) {
            gsap.from(contenidoTarjeta, {
                duration: 1.5,
                scale: 0,
                rotationY: 180,
                ease: "elastic.out(1, 0.5)"
            });
        }
    }

    function inicializarFlip() {
        tarjeta = document.querySelector('.tarjeta');
        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('volteada');
            if (CONFIG.SONIDO) SONIDOS.flip.play();
        });
    }
});