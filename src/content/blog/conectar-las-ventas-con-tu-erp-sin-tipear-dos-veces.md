---
title: "Conectar las ventas con tu ERP sin tipear dos veces"
seoTitle: "Conectar tu sistema de ventas con el ERP"
description: "Ventas en un sistema, facturas en el ERP y alguien que copia de uno al otro. Qué preguntar antes de conectar un sistema de pedidos con tu ERP."
project: "plataforma-distribucion-mayorista"
service: "automatizacion-de-procesos"
publishedAt: 2026-11-10
---

Si en tu distribuidora hay una persona que dedica buena parte del día a copiar pedidos de un sistema a otro, esto es para ti. Los vendedores cargan en una app o en una planilla, y esa persona los pasa al ERP para que se puedan facturar. Cuando se enferma, la facturación se atrasa; cuando se equivoca, el cliente recibe una factura que no coincide con lo que pidió.

El tercer problema de [la plataforma para distribuidoras mayoristas](/proyectos/plataforma-distribucion-mayorista) que construimos era ese mismo, visto desde arriba: los datos de ventas no coincidían con los del ERP. La plataforma se integra con el ERP de cada empresa, y el panel muestra las ventas, las cobranzas y las facturas ya sincronizadas.

## Qué viaja y hacia dónde

Antes de hablar de tecnología conviene hacer una lista de qué datos tienen que moverse y en qué dirección. Es una lista corta y suele parecerse a esta:

- Del ERP al sistema de ventas: productos, precios, stock y clientes con su saldo.
- Del sistema de ventas al ERP: los pedidos confirmados y los cobros.
- Del ERP de vuelta: la factura emitida o anulada de cada pedido.

Lo que conviene acordar es cuál de los dos sistemas manda en cada dato. Si el precio se puede cambiar en los dos lados, en algún momento van a tener dos precios.

## Las preguntas que conviene hacer

A quien te proponga la integración, nos parece útil preguntarle tres cosas.

Cada cuánto se actualiza cada dato. Para el stock y los precios, unos minutos de diferencia suelen alcanzar; para saber si una factura ya se emitió, quizá también. Nos parece que «en tiempo real», sin más detalle, esconde la pregunta que importa.

Qué pasa cuando algo falla. Un pedido que no llega al ERP tiene que quedar a la vista de alguien, con un aviso, y volver a enviarse. Si la falla es silenciosa, vuelves a tener a una persona revisando a mano.

Qué hay que tocar del ERP. Algunos ERP tienen formas preparadas para recibir datos de otros sistemas y otros no; conviene saberlo antes, porque cambia el costo y el plazo.

<figure data-device="desktop">
  <img src="/assets/proyectos/plataforma-distribucion-mayorista/01-desktop.webp" alt="Panel de la empresa con las ventas, las cobranzas, la proyección del mes y el ranking de vendedores" width="1600" height="1000" loading="lazy" decoding="async" />
  <figcaption>Panel de la empresa: ventas del día y del mes, cobranzas, proyección de cierre y ranking de vendedores. Pantalla con datos de ejemplo.</figcaption>
</figure>

## Mientras tanto

Si hoy alguien copia pedidos a mano, hay una forma de que se equivoque menos: que el sistema de ventas exporte los pedidos en el mismo orden de columnas que pide el ERP para importarlos. Muchos ERP aceptan una importación desde Excel. Copiar un archivo es más seguro que tipear cien líneas, y es un buen paso intermedio mientras se decide la integración.

Si quieres ver los otros dos problemas que resolvimos junto con este, están en [sistema para distribuidoras: los tres problemas que se repiten](/blog/sistema-para-distribuidoras-tres-problemas-que-se-repiten).
