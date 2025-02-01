---
---

document.addEventListener('DOMContentLoaded', () => {
    const CONFIG = {
        textos: {{ site.data.giftcard.textos | jsonify }},
        datos: {{ site.data.giftcard | jsonify }},
        efectos: {{ site.data.giftcard.efectos | jsonify }}
    };

    // Sonidos verificados
    const SONIDOS = {
        flip: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/1936/1936-preview.mp3'] }),
        error: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/946/946-preview.mp3'] }),
        exito: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/902/902-preview.mp3'] })
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
        if (CONFIG.efectos.sonido) SONIDOS.exito.play();
        modal.hide();
        mostrarTarjeta();
        configurarFlip();
    }

    function accesoIncorrecto() {
        inputClave.classList.add('is-invalid');
        mensajeError.classList.remove('d-none');
        if (CONFIG.efectos.sonido) SONIDOS.error.play();
    }

    function mostrarTarjeta() {
        contenidoTarjeta.classList.remove('d-none');
        if (CONFIG.efectos.animaciones) {
            gsap.from('.tarjeta', {
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
            if (CONFIG.efectos.sonido) SONIDOS.flip.play();
        });
    }
});