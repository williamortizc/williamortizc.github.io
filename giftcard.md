---
layout: card
permalink: /7kL!9pQ2-5mRgA/
---

<div class="card-container">
  <div class="card" onclick="flipCard()">
    <!-- Parte frontal -->
    <div class="card-front">
      <div class="glitter"></div>
      <div class="bank-logo">Tarjeta de regalo</div>
      <div class="chip"></div>
      <div class="name">{{ site.data.giftcard.name }}</div>
      <img src="{{ '/assets/images/stitch-float.png' | relative_url }}" class="stitch-float" alt="Stitch">
    </div>
    
    <!-- Parte trasera -->
    <div class="card-back">
      <div class="balance-label">Balance Disponible</div>
      <div class="balance">{{ site.data.giftcard.balance }} USD</div>
      <div class="message">{{ site.data.giftcard.message }}</div>
    </div>
  </div>
</div>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&family=Dancing+Script:wght@600&display=swap">
<link rel="stylesheet" href="{{ '/assets/css/giftcard.css' | relative_url }}">
<script src="{{ '/assets/js/giftcard.js' | relative_url }}"></script>