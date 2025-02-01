---
---
document.addEventListener('DOMContentLoaded', function() {
    // Se obtiene la palabra secreta desde el archivo de datos (procesada por Liquid)
    var giftCardSecret = "{{ site.data.giftcard.secret }}";
    let entered = prompt("Ingresa la palabra secreta para ver la tarjeta:");
    if (entered !== giftCardSecret) {
       alert("Palabra secreta incorrecta.");
       document.getElementById("gift-card-container").innerHTML = "<p>Acceso denegado.</p>";
       return;
    }
    // Se añade el evento para el efecto flip
    const card = document.getElementById('gift-card');
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});
