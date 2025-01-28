---
# layout: card
permalink: /7kL!9pQ2-5mRgA/  # URL imposible de adivinar
---

<div class="card-container">
  <div class="card" onclick="flipCard()">
    <!-- Parte frontal -->
    <div class="card-front">
      <div class="glitter"></div>
      <div class="bank-logo">💝 GiftLove</div>
      <div class="chip"></div>
      <div class="fake-number">**** **** **** {{ site.data.giftcard.balance | slice: 0,4 }}</div>
    </div>
    
    <!-- Parte trasera -->
    <div class="card-back">
      <div class="balance">{{ site.data.giftcard.balance }} USD</div>
      <div class="message">{{ site.data.giftcard.message }}</div>
      <div class="name">{{ site.data.giftcard.name }}</div>
    </div>
  </div>
</div>

<!-- CSS y JS específicos de la tarjeta -->
<link rel="stylesheet" href="{{ '/assets/css/giftcard.scss' | relative_url }}">
<script src="{{ '/assets/js/giftcard.js' | relative_url }}"></script>