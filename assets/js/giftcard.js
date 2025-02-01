---
---

document.addEventListener('DOMContentLoaded', () => {
    const config = {
        contraseña: "{{ site.data.giftcard.palabra_secreta }}",
        sonido: {{ site.data.giftcard.efectos.sonido }},
        animaciones: {{ site.data.giftcard.efectos.animaciones }}
    };

    const modal = new bootstrap.Modal('#modalSeguridad');
    const formulario = document.getElementById('formContraseña');
    const inputContraseña = document.getElementById('inputContraseña');
    const mensajeError = document.getElementById('mensajeError');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');
    let tarjeta = null;

    modal.show();

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (inputContraseña.value === config.contraseña) {
            modal.hide();
            contenidoPrincipal.classList.remove('d-none');
            tarjeta = document.querySelector('.tarjeta');
            
            // Animación inicial
            if(config.animaciones) {
                gsap.from(tarjeta, {
                    duration: 1.5,
                    scale: 0,
                    rotationY: 180,
                    ease: "elastic.out(1, 0.5)"
                });
            }

            // Evento click para voltear
            tarjeta.addEventListener('click', () => {
                tarjeta.classList.toggle('volteada');
                
                // Sonido opcional
                if(config.sonido) {
                    new Howl({
                        src: ['https://assets.mixkit.co/sfx/preview/mixkit-paper-flip-1936.mp3'],
                        volume: 0.3
                    }).play();
                }
            });
            
        } else {
            inputContraseña.classList.add('is-invalid');
            mensajeError.classList.remove('d-none');
            if(config.sonido) {
                new Howl({
                    src: ['https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'],
                    volume: 0.3
                }).play();
            }
        }
    });

    document.getElementById('botonMostrarContraseña').addEventListener('click', () => {
        inputContraseña.type = inputContraseña.type === 'password' ? 'text' : 'password';
    });
});