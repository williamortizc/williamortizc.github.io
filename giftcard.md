---
layout: default          # Usa el layout por defecto de Jekyll
permalink: /giftcard/    # Define la URL personalizada
---

<!-- Contenedor principal de la tarjeta -->
<div class="card-container">
  <div class="card" onclick="flipCard()">
    
    <!-- Parte FRONTAL de la tarjeta -->
    <div class="card-front">
      <!-- Efecto de "brillo" al presionar -->
      <div class="glitter"></div>
      
      <!-- Logo y detalles de la tarjeta -->
      <div class="bank-logo">💖 GiftForYou</div>
      <div class="chip"></div>
      <div class="fake-number">**** **** **** {{ site.data.data.balance | slice: 0,4 }}</div>  <!-- Ej: **** **** **** 0150 -->
    </div>

    <!-- Parte TRASERA de la tarjeta -->
    <div class="card-back">
      <!-- Saldo actualizado desde data.yml -->
      <div class="balance">{{ site.data.data.balance }} USD</div>
      
      <!-- Mensaje personalizado -->
      <div class="message">{{ site.data.data.message }}</div>
      
      <!-- Nombre de tu novia -->
      <div class="name">{{ site.data.data.name }}</div>
    </div>
  </div>
</div>

<!-- Enlace a los estilos CSS -->
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<!-- Script de animación -->
<script src="{{ '/assets/js/script.js' | relative_url }}"></script>