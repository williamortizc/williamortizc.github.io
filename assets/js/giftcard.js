---
---

document.addEventListener('DOMContentLoaded', () => {
    const config = {
        palabraSecreta: "{{ site.data.giftcard.palabra_secreta }}",
        sonido: {{ site.data.giftcard.efectos.sonido }},
        particulas: {{ site.data.giftcard.efectos.particulas }},
        colores: {{ site.data.giftcard.colores | jsonify }}
    };

    let sonidoFlip, currentTheme;

    // Sistema de Sonido
    const cargarSonidos = () => {
        sonidoFlip = new Howl({
            src: ['https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkle-902.mp3'],
            volume: 0.3
        });
    };

    // Validación de Contraseña
    const modal = new bootstrap.Modal('#passwordModal');
    modal.show();

    document.getElementById('passwordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('secretInput').value;
        if(input === config.palabraSecreta) {
            if(config.sonido) sonidoFlip.play();
            iniciarExperiencia();
            modal.hide();
        } else {
            document.getElementById('errorMessage').classList.remove('d-none');
            document.getElementById('secretInput').classList.add('is-invalid');
        }
    });

    // Toggle Visibilidad de Contraseña
    document.getElementById('togglePassword').addEventListener('click', () => {
        const input = document.getElementById('secretInput');
        input.type = input.type === 'password' ? 'text' : 'password';
    });

    // Experiencia Principal
    function iniciarExperiencia() {
        cargarSonidos();
        document.getElementById('mainContent').classList.remove('d-none');
        
        // Animación de Entrada
        gsap.from('.tarjeta', {
            duration: 2,
            scale: 0,
            rotationY: 180,
            ease: "elastic.out(1, 0.3)"
        });

        // Efecto Parallax
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth/2 - e.clientX)/30;
            const y = (window.innerHeight/2 - e.clientY)/30;
            gsap.to('.tarjeta', {rotationY: x, rotationX: y, duration: 2});
        });

        // Sistema de Flip
        let flipped = false;
        document.querySelector('.tarjeta').addEventListener('click', () => {
            if(config.sonido) sonidoFlip.play();
            
            gsap.to('.tarjeta', {
                rotationY: flipped ? 0 : 180,
                duration: 1.2,
                ease: "power4.out"
            });
            flipped = !flipped;
        });
    }
});