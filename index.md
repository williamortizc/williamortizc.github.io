---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCUuRPwGXghD72GnY7Me9Up4_-Oa5gkres",
      authDomain: "zitrowzone-gh-jekyll.firebaseapp.com",
      projectId: "zitrowzone-gh-jekyll",
      storageBucket: "zitrowzone-gh-jekyll.firebasestorage.app",
      messagingSenderId: "576608592754",
      appId: "1:576608592754:web:47746068fecf540556b3eb",
      measurementId: "G-26T5HK5SLQ"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  </script>