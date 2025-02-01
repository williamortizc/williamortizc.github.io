---
---

document.addEventListener('DOMContentLoaded', () => {
    const CONFIG = {
        textos: {{ site.data.giftcard.textos | jsonify }},
        datos: {{ site.data.giftcard | jsonify }}
    };

    // Sonidos verificados
    const SONIDOS = {
        flip: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-paper-flip-1936.mp3'] }),
        error: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'] }),
        exito: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkle-902.mp3'] })
    };

    // Elementos
    const modal = new bootstrap.Modal(document.getElementById('modalAcceso'));
    const formulario = document.getElementById('formClave');
    const inputClave = document.getElementById('inputClave');
    const mensajeError = document.getElementById('mensajeError');
    const contenidoTarjeta = document.getElementById('contenidoTarjeta');

    // Mostrar modal al cargar
    modal.show();

    // Validar clave
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (inputClave.value === CONFIG.datos.palabra_secreta) {
            if (CONFIG.datos.efectos.sonido) SONIDOS.exito.play();
            modal.hide();
            mostrarTarjeta();
            configurarFlip();
        } else {
            inputClave.classList.add('is-invalid');
            mensajeError.classList.remove('d-none');
            if (CONFIG.datos.efectos.sonido) SONIDOS.error.play();
        }
    });

    function mostrarTarjeta() {
        contenidoTarjeta.classList.remove('d-none');
        gsap.from('.tarjeta', {
            duration: 1.5,
            scale: 0,
            rotationY: 180,
            ease: "elastic.out(1, 0.5)"
        });
    }

    function configurarFlip() {
        const tarjeta = document.querySelector('.tarjeta');
        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('volteada');
            if (CONFIG.datos.efectos.sonido) SONIDOS.flip.play();
        });
    }
});