---
layout: post
title: "Título de tu Entrada"
date: YYYY-MM-DD HH:MM:SS -0600
categories: [categoria1, categoria2]
tags: [etiqueta1, etiqueta2]
author: "Tu Nombre"
---

<!-- Resumen o introducción de tu entrada -->
_Escribe aquí un breve resumen de tu entrada. Este párrafo aparecerá en la página principal._

## Contenido Principal

Escribe aquí el contenido principal de tu entrada. Puedes usar diferentes elementos de Markdown:

### Subtítulos

- Lista de elementos
- Otro elemento
- Y otro más

### Código

{% highlight python %}
def hola_mundo():
    print("¡Hola, Mundo!")
{% endhighlight %}

### Imágenes

![Texto alternativo](/ruta/a/tu/imagen.jpg)

### Enlaces

[Texto del enlace](URL "Título opcional")

### Citas

> Texto citado aquí

## Referencias

<!-- Enlaces de referencia -->
[nombre-referencia]: https://ejemplo.com
[otra-referencia]: https://ejemplo2.com

---
<!-- Notas al pie o información adicional -->
*Última actualización: {{ page.date | date: "%d-%m-%Y" }}*