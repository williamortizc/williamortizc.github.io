---
---
document.addEventListener('DOMContentLoaded', function() {
    // Se obtiene la palabra secreta desde el YAML
    var giftCardSecret = "{{ site.data.giftcard.secret }}";
    
    var submitButton = document.getElementById("submit-password");
    submitButton.addEventListener("click", function() {
        var inputPassword = document.getElementById("secret-password").value;
        if (inputPassword !== giftCardSecret) {
            alert("Contraseña incorrecta.");
            return;
        }
        // Contraseña correcta: animamos la apertura del sobre
        var envelope = document.getElementById("envelope");
        envelope.classList.add("open");
        
        // Después de 500ms iniciamos el confeti
        setTimeout(function() {
            launchConfetti();
        }, 500);

        // Después de 1500ms (tiempo para la animación del sobre) ocultamos el sobre y mostramos la tarjeta
        setTimeout(function() {
            document.getElementById("envelope-container").style.display = "none";
            document.getElementById("gift-card-container").style.display = "block";
        }, 1500);
    });

    // Agregamos el evento para el efecto flip en la tarjeta
    var card = document.getElementById('gift-card');
    if(card) {
      card.addEventListener('click', function() {
          card.classList.toggle('flipped');
      });
    }
});

// Función para lanzar confeti: crea múltiples elementos que caen animadamente
function launchConfetti() {
    var confettiContainer = document.getElementById("confetti-container");
    var colors = ['#FFC700', '#FF0000', '#2E3192', '#41BBC7', '#66A6FF'];
    var confettiCount = 50;
    for (var i = 0; i < confettiCount; i++) {
        var confetti = document.createElement("div");
        confetti.classList.add("confetti");
        // Asigna un color aleatorio
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        // Posición y tamaño aleatorios
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        var size = Math.random() * 8 + 4; // entre 4px y 12px
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";
        // Asigna una animación con duración y retraso aleatorios
        confetti.style.position = "absolute";
        confetti.style.zIndex = "1000";
        confetti.style.animation = "fall " + (Math.random() * 3 + 2) + "s linear " + (Math.random() * 0.5) + "s forwards";
        confettiContainer.appendChild(confetti);
    }
    // Se eliminan los elementos de confeti pasados 5 segundos
    setTimeout(function() {
        confettiContainer.innerHTML = "";
    }, 5000);
}
