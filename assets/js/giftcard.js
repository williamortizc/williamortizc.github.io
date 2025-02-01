document.addEventListener('DOMContentLoaded', () => {
  const config = {
      sonido: {{ site.data.giftcard.sonido_activado | jsonify }},
      particulas: {{ site.data.giftcard.animacion_particulas | jsonify }}
  };

  // Sistema de Sonido
  const sound = new Howl({
      src: ['https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkle-902.mp3'],
      volume: 0.3
  });

  // Validación de Contraseña
  const modal = new bootstrap.Modal(document.getElementById('passwordModal'));
  modal.show();

  document.getElementById('passwordForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('secretInput').value;
      if(input === "{{ site.data.giftcard.palabra_secreta }}") {
          if(config.sonido) sound.play();
          iniciarExperiencia();
          modal.hide();
      } else {
          document.getElementById('errorMessage').classList.remove('d-none');
          document.getElementById('secretInput').classList.add('is-invalid');
      }
  });

  function iniciarExperiencia() {
      document.body.classList.remove('bg-galaxy');
      document.querySelector('.d-none').style.display = 'block';
      
      // Animación Inicial
      gsap.from('.tarjeta', {
          duration: 2,
          scale: 0,
          rotationY: 180,
          ease: "elastic.out(1, 0.3)",
          onComplete: () => {
              if(config.particulas) crearParticulasIniciales();
          }
      });

      // Efecto Parallax 3D
      document.addEventListener('mousemove', (e) => {
          const x = (window.innerWidth/2 - e.clientX)/30;
          const y = (window.innerHeight/2 - e.clientY)/30;
          gsap.to('.tarjeta', {rotationY: x, rotationX: y, duration: 2});
      });

      // Sistema de Flip
      let flipped = false;
      document.querySelector('.tarjeta').addEventListener('click', () => {
          if(config.sonido) sound.play();
          
          gsap.to('.tarjeta', {
              rotationY: flipped ? 0 : 180,
              duration: 1.2,
              ease: "power4.out",
              onComplete: () => {
                  if(config.particulas && !flipped) crearEfectoConfeti();
              }
          });
          flipped = !flipped;
      });
  }

  function crearParticulasIniciales() {
      for(let i = 0; i < 30; i++) {
          const p = document.createElement('div');
          p.className = 'particle';
          document.body.appendChild(p);
          
          gsap.fromTo(p, {
              x: window.innerWidth/2,
              y: window.innerHeight/2,
              opacity: 1
          }, {
              x: gsap.utils.random(-200, 200),
              y: gsap.utils.random(-200, 200),
              opacity: 0,
              duration: 2,
              onComplete: () => p.remove()
          });
      }
  }

  function crearEfectoConfeti() {
      for(let i = 0; i < 50; i++) {
          const p = document.createElement('div');
          p.className = 'particle';
          p.style.background = `hsl(${gsap.utils.random(0,360)}, 70%, 60%)`;
          document.body.appendChild(p);
          
          gsap.fromTo(p, {
              x: window.innerWidth/2,
              y: window.innerHeight/2,
              opacity: 1,
              scale: 0
          }, {
              x: gsap.utils.random(-300, 300),
              y: gsap.utils.random(-300, 300),
              scale: gsap.utils.random(0.5, 1.5),
              opacity: 0,
              duration: 3,
              ease: "power4.out",
              onComplete: () => p.remove()
          });
      }
  }
});

