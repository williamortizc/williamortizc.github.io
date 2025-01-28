// Animación de giro
function flipCard() {
  document.querySelector('.card').classList.toggle('flipped');
}

// Seguridad: Pregunta personalizada
document.addEventListener('DOMContentLoaded', () => {
  const answer = prompt("¿Quién eres?");
  
  if (answer?.toLowerCase().trim() !== "nuez") {  // Respuesta esperada
    window.location.href = "/"; // Redirige al blog si falla
    return;
  }

  // Opcional: Efecto de confeti si acierta
  if (typeof confetti === 'function') {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
});