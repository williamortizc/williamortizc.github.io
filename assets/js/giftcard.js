---
---

document.addEventListener('DOMContentLoaded', () => {
    const CONFIG = {
        textos: {{ site.data.giftcard.textos | jsonify }},
        datos: {{ site.data.giftcard | jsonify }},
        sonido: {{ site.data.giftcard.efectos.sonido }}
    };

    // Sonidos
    const SONIDOS = {
        flip: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-paper-flip-1936.mp3'], volume: 0.5 }),
        error: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'], volume: 0.7 }),
        exito: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkle-902.mp3'], volume: 0.4 })
    };

    // Elementos
    const modal = new bootstrap.Modal(document.getElementById('modalPrincipal'));
    const formulario = document.getElementById('formAcceso');
    const inputClave = document.getElementById('inputClave');
    const mensajeError = document.getElementById('mensajeError');
    const contenidoTarjeta = document.getElementById('contenidoTarjeta');

    // Inicialización
    modal.show();

    // Eventos
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        if (inputClave.value === CONFIG.datos.palabra_secreta) {
            accesoCorrecto();
        } else {
            accesoIncorrecto();
        }
    });

    function accesoCorrecto() {
        if (CONFIG.sonido) SONIDOS.exito.play();
        modal.hide();
        mostrarTarjeta();
        configurarFlip();
    }

    function accesoIncorrecto() {
        inputClave.classList.add('is-invalid');
        mensajeError.classList.remove('d-none');
        if (CONFIG.sonido) SONIDOS.error.play();
    }

    function mostrarTarjeta() {
        contenidoTarjeta.classList.remove('d-none');
        if (CONFIG.datos.efectos.animaciones) {
            gsap.from(contenidoTarjeta, {
                duration: 1.5,
                scale: 0,
                rotationY: 180,
                ease: "elastic.out(1, 0.5)"
            });
        }
    }

    function configurarFlip() {
        const tarjeta = document.querySelector('.tarjeta');
        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('volteada');
            if (CONFIG.sonido) SONIDOS.flip.play();
        });
    }
});