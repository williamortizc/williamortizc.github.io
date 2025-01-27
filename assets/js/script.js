// Animación de giro al hacer clic
function flipCard() {
    document.querySelector('.card').classList.toggle('flipped');
  }
  
  // Opcional: Añadir sonido al girar (si quieres)
  function playSound() {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.play();
  }
  
  // Vincular sonido (si lo usas)
  document.querySelector('.card').addEventListener('click', playSound);