// Animación de giro
function flipCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('flipped');
}

// Seguridad básica
document.addEventListener('DOMContentLoaded', () => {
  const answer = prompt("¿Palabra secreta?");
  if (answer?.toLowerCase() !== "avellana") {
    window.location.href = "/";
  }
});