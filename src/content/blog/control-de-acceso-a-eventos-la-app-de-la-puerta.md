---
title: "Control de acceso a eventos: la app que va en la puerta"
seoTitle: "Control de acceso a eventos con el celular"
description: "El ingreso a los eventos se controlaba cortando boletos de papel. Cómo es la app con la que el personal de puerta lee las entradas con el celular."
project: "control-de-acceso"
service: "desarrollo-de-aplicaciones-moviles"
publishedAt: 2026-11-10
coverScreen: 1
---

Si organizas eventos, sabes que la noche se decide en la puerta. En los eventos de este caso el ingreso se controlaba cortando o marcando boletos de papel a mano. Cada boleto se revisaba a ojo, no había forma de saber qué puerta había recibido a quién, y en la entrada se armaban filas largas.

La app que hicimos es para la persona que está parada en esa puerta ([el caso](/proyectos/control-de-acceso) muestra las pantallas). Lee el código de barras del boleto con la cámara del celular, y tiene cuatro cosas pensadas para un acceso.

El operador no elige nada. El organizador le asigna de antemano un usuario que ya viene atado a un evento, una sucursal y una puerta, de modo que solo tiene que entrar y empezar a leer.

Cada lectura suena. El aviso sonoro confirma que el código se leyó, y creemos que eso ayuda a quien tiene la vista puesta en la fila.

Tiene linterna, para leer boletos en accesos con poca luz.

Y el último código leído queda siempre visible en la pantalla de control.

<figure data-device="mobile">
  <img src="/assets/proyectos/control-de-acceso/01-mobile.webp" alt="Pantalla de control del ingreso con el evento, la puerta asignada y el último boleto leído" width="520" height="1125" loading="lazy" decoding="async" />
  <figcaption>Control del ingreso con el evento, la puerta asignada y el último boleto leído. Pantalla con datos de ejemplo.</figcaption>
</figure>

Puede pasar que la puerta se quede sin señal, o que un usuario esté mal cargado. En esos casos la app avisa con claridad que no hay conexión o que las credenciales no son válidas.

## Antes de pasar del talonario al celular

Si estás organizando un evento y piensas dejar el boleto que se corta a mano, la app de la puerta es la parte fácil de imaginar. A nuestro juicio, las preguntas que conviene contestar primero son de operación: cuántas puertas va a haber y quién va a estar en cada una, qué hace el personal cuando una entrada no se puede leer, y cómo se entera el organizador de lo que pasa en cada acceso mientras el evento ocurre.

Esas preguntas las desarrollamos en [entradas de papel o digitales](/blog/entradas-de-papel-o-digitales-que-cambia-en-la-puerta).
