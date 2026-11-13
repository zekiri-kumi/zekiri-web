---
title: "Vender entradas de cine en línea: la compra y la puerta de la sala"
seoTitle: "Venta de entradas de cine en línea"
description: "Un cine vendía solo en boletería y revisaba las entradas a ojo. Cómo es la web de compra con entrada QR y el panel que muestra quién entró a cada sala."
project: "venta-de-entradas-de-cine"
service: "sistemas-web-a-medida"
publishedAt: 2026-11-13
coverScreen: 0
---

Para un cine, cada función es un pequeño evento que se repite varias veces al día, todos los días. En el cine de este caso, en Chile, las entradas se vendían solo en boletería. El público hacía una fila para comprar y otra para entrar, y el cine recién sabía cuánta gente había tenido cada función al cerrar la caja.

Lo que construimos tiene dos partes ([las pantallas están en el portafolio](/proyectos/venta-de-entradas-de-cine)): una web donde el público compra su entrada y un panel para el cine.

## La compra

La web muestra la cartelera por complejo y por día, con los horarios de cada función. El público elige la función, cuántas entradas de cada tarifa quiere y paga en línea, desde la computadora o el celular.

<figure data-device="mobile">
  <img src="/assets/proyectos/venta-de-entradas-de-cine/02-mobile.webp" alt="Elección de la función y de la cantidad de entradas por tarifa antes de pagar" width="520" height="1125" loading="lazy" decoding="async" />
  <figcaption>El público elige la función y cuántas entradas de cada tarifa quiere. Pantalla con datos de ejemplo.</figcaption>
</figure>

Al terminar recibe una entrada digital con un código QR, que también le llega al correo. Un solo código vale para todas las personas de la compra, así una familia de cuatro no tiene que mostrar cuatro pantallas en la puerta.

## La puerta de la sala

La venta en línea resuelve la fila de la boletería, pero la fila de la sala depende de qué pasa con cada código. Por eso la lectura del QR no se queda en decir si el código existe: avisa si la entrada ya se usó o si es de otra función, que son justo los casos que antes pasaban sin que nadie los notara.

<figure data-device="mobile">
  <img src="/assets/proyectos/venta-de-entradas-de-cine/05-mobile.webp" alt="Lectura de la entrada en la puerta de la sala con el resultado y las últimas lecturas" width="520" height="1125" loading="lazy" decoding="async" />
  <figcaption>En la puerta de la sala se lee el QR y se ve si la entrada es válida. Pantalla con datos de ejemplo.</figcaption>
</figure>

## El panel

En el panel, el cine ve en vivo cada función del día: cuántas entradas se vendieron, cuántas personas ya entraron y qué funciones están por abrir. Desde ahí también se administran las películas, las salas, las funciones y los precios.

Creemos que el dato más útil es la diferencia entre entradas vendidas y personas que ya entraron. Si faltan diez minutos para la función y la mitad del público todavía está afuera, es el momento de abrir otra fila, no cuando la película ya empezó.

Si tienes un cine, un teatro o una sala y estás pensando en vender en línea, conviene decidir primero qué pasa en la puerta: quién lee las entradas, con qué equipo y qué se hace cuando una no se lee. Lo contamos con más detalle en [entradas de papel o digitales](/blog/entradas-de-papel-o-digitales-que-cambia-en-la-puerta).
