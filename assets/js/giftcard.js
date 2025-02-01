---
---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuración inicial
    const CONFIG = {
        CLAVE_CORRECTA: "{{ site.data.giftcard.palabra_secreta }}",
        SONIDO_ACTIVADO: {{ site.data.giftcard.efectos.sonido }}
    };

    // 2. Elementos del DOM
    const modal = new bootstrap.Modal(document.getElementById('modalPrincipal'));
    const formulario = document.getElementById('formularioAcceso');
    const inputClave = document.getElementById('claveAcceso');
    const mensajeError = document.getElementById('mensajeError');
    const contenidoTarjeta = document.getElementById('contenidoTarjeta');

    // 3. Sonidos pre-cargados
    const SONIDOS = {
        EXITO: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkle-902.mp3'], volume: 0.3 }),
        ERROR: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'], volume: 0.5 }),
        FLIP: new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-paper-flip-1936.mp3'], volume: 0.4 })
    };

    // 4. Mostrar modal al iniciar
    modal.show();

    // 5. Manejar envío del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validarClave(inputClave.value);
    });

    // 6. Función de validación
    function validarClave(clave) {
        if (clave === CONFIG.CLAVE_CORRECTA) {
            accesoExitoso();
        } else {
            accesoDenegado();
        }
    }

    // 7. Acceso correcto
    function accesoExitoso() {
        if (CONFIG.SONIDO_ACTIVADO) SONIDOS.EXITO.play();
        modal.hide();
        mostrarTarjeta();
        configurarFlip();
    }

    // 8. Acceso denegado
    function accesoDenegado() {
        inputClave.classList.add('is-invalid');
        mensajeError.classList.remove('d-none');
        if (CONFIG.SONIDO_ACTIVADO) SONIDOS.ERROR.play();
    }

    // 9. Mostrar tarjeta
    function mostrarTarjeta() {
        contenidoTarjeta.classList.remove('d-none');
        gsap.from(contenidoTarjeta, {
            duration: 1.5,
            scale: 0,
            rotationY: 180,
            ease: "elastic.out(1, 0.5)"
        });
    }

    // 10. Configurar efecto flip
    function configurarFlip() {
        const tarjeta = document.querySelector('.tarjeta');
        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('volteada');
            if (CONFIG.SONIDO_ACTIVADO) SONIDOS.FLIP.play();
        });
    }
});