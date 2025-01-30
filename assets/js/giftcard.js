// ========== CONFIGURACIÓN ==========
const SECRET_PASSWORD = "avellana"; // Tu contraseña
const MAX_ATTEMPTS = 3;
const HINTS = [
  "Pista 1: No eres una nuez... 🌰", 
  "Pista 2: Tampoco una almendra... 🥜",
  "¡Eres av...! Vuelve a intentarlo"
];

// ========== ELEMENTOS DEL DOM ==========
let cardHTML; // Almacenará el HTML original

document.addEventListener('DOMContentLoaded', () => {
  // Guarda el HTML original y oculta la tarjeta
  cardHTML = document.body.innerHTML;
  document.body.innerHTML = `
    <div class="loader">
      <div class="spinner"></div>
      <p>Cargando tu regalo especial...</p>
    </div>
  `;
  
  startAuthProcess();
});

// ========== LÓGICA DE AUTENTICACIÓN ==========
async function startAuthProcess(attempt = 1) {
  const userAnswer = prompt(getPromptMessage(attempt));
  
  if (userAnswer?.toLowerCase().trim() === SECRET_PASSWORD) {
    showCard();
    triggerConfetti();
  } else if (attempt < MAX_ATTEMPTS) {
    alert(HINTS[attempt - 1]);
    startAuthProcess(attempt + 1);
  } else {
    alert(HINTS[2]);
    window.location.href = "/";
  }
}

// ========== FUNCIONES DE INTERFAZ ==========
function showCard() {
  document.body.innerHTML = cardHTML; // Restaura el HTML original
  document.querySelector('.card').addEventListener('click', flipCard);
}

function flipCard() {
  document.querySelector('.card').classList.toggle('flipped');
}

// ========== EFECTOS VISUALES ==========
async function triggerConfetti() {
  try {
    const confettiModule = await import('https://cdn.skypack.dev/canvas-confetti');
    const confetti = confettiModule.default;
    
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#00a3e0', '#ffffff']
    });
  } catch (error) {
    console.log("Confeti no disponible en este entorno");
  }
}

// ========== UTILIDADES ==========
function getPromptMessage(attempt) {
  const emojis = ["🔐", "🔑", "💌"];
  return `${emojis[attempt - 1]} Intento ${attempt}/${MAX_ATTEMPTS}:\n¿Cuál es nuestra palabra clave?`;
}