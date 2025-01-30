// ========== CONFIGURACIÓN ==========
const SECRET_PASSWORD = "avellana";
const MAX_ATTEMPTS = 3;
const HINTS = [
  "Pista 1: 🌰 No eres una nuez...", 
  "Pista 2: 🥜 Tampoco una almendra...",
  "¡Eres mi av****** favorita! Vuelve a intentarlo..."
];

// ========== VARIABLES GLOBALES ==========
let originalHTML;

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
  originalHTML = document.body.innerHTML;
  showLoader();
  startAuthProcess();
});

// ========== LÓGICA PRINCIPAL ==========
function startAuthProcess(attempt = 1) {
  const userAnswer = prompt(getPromptMessage(attempt));
  
  if (validateAnswer(userAnswer)) {
    showCard();
    initCardInteraction();
    triggerConfetti();
  } else if (attempt < MAX_ATTEMPTS) {
    alert(HINTS[attempt - 1]);
    startAuthProcess(attempt + 1);
  } else {
    redirectToHome();
  }
}

// ========== FUNCIONES DE INTERFAZ ==========
function showLoader() {
  document.body.innerHTML = `
    <div class="loader">
      <div class="spinner"></div>
      <p>Cargando tu regalo especial...</p>
    </div>
  `;
}

function showCard() {
  document.body.innerHTML = originalHTML;
}

function initCardInteraction() {
  const card = document.querySelector('.card');
  card.style.transition = 'transform 0.6s'; // Fuerza la transición
  card.addEventListener('click', flipCard);
}

function flipCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('flipped');
  
  // Fuerza repintado para asegurar la animación
  void card.offsetWidth;
}

// ========== VALIDACIÓN Y EFECTOS ==========
function validateAnswer(answer) {
  return answer?.toLowerCase().trim() === SECRET_PASSWORD;
}

async function triggerConfetti() {
  try {
    const { default: confetti } = await import('https://cdn.skypack.dev/canvas-confetti');
    confetti({ 
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#00a3e0', '#ffffff']
    });
  } catch (error) {
    console.log("Confeti desactivado en modo de prueba");
  }
}

// ========== UTILIDADES ==========
function getPromptMessage(attempt) {
  const emojis = ["🔐", "🔑", "💝"];
  return `${emojis[attempt - 1]} Intento ${attempt}/${MAX_ATTEMPTS}:\nEscribe la palabra secreta`;
}

function redirectToHome() {
  alert(HINTS[2]);
  window.location.href = "/";
}