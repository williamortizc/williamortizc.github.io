// ========== CONFIGURACIÓN ==========
const SECRET_PASSWORD = "avellana"; // Cambia esto
const MAX_ATTEMPTS = 3;
const HINTS = [
  "Pista: No eres nuez... 🌰", 
  "Pista: Tampoco almendra... 🥜",
  "¡Eres mi dulce avellana! ❤️ Pero no tienes acceso..."
];

// ========== LÓGICA PRINCIPAL ==========
document.addEventListener('DOMContentLoaded', () => {
  // Oculta la tarjeta inicialmente
  document.body.innerHTML = `
    <div class="loader">
      <div class="spinner"></div>
      <p>Cargando tu regalo especial...</p>
    </div>
  `;

  checkPassword(1);
});

async function checkPassword(attempt) {
  const userAnswer = prompt(getPromptMessage(attempt));
  
  if (userAnswer?.toLowerCase().trim() === SECRET_PASSWORD) {
    // Password correcto: muestra la tarjeta
    document.body.innerHTML = document.documentElement.innerHTML;
    await triggerConfetti();
    initializeCard();
  } else if (attempt < MAX_ATTEMPTS) {
    // Intento fallido con más oportunidades
    alert(HINTS[attempt - 1]);
    checkPassword(attempt + 1);
  } else {
    // Redirección final
    alert(HINTS[2]);
    window.location.href = "/";
  }
}

// ========== FUNCIONES AUXILIARES ==========
function getPromptMessage(attempt) {
  const emojis = ["🔒", "🔑", "❤️"];
  return `${emojis[attempt - 1]} Intento ${attempt}/${MAX_ATTEMPTS}:\n¿Cuál es nuestra palabra especial?`;
}

async function triggerConfetti() {
  try {
    const confetti = await import('https://cdn.skypack.dev/canvas-confetti');
    confetti.default({ 
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#00a3e0', '#ffffff']
    });
  } catch (error) {
    console.log("Confeti desactivado en modo de prueba");
  }
}

function initializeCard() {
  // Vuelve a adjuntar el evento de click
  document.querySelector('.card').addEventListener('click', flipCard);
}

function flipCard() {
  document.querySelector('.card').classList.toggle('flipped');
}