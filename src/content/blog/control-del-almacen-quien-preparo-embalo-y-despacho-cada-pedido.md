---
title: "Control del almacén: quién preparó, quién embaló y quién despachó cada pedido"
seoTitle: "Control del almacén: quién preparó cada pedido"
description: "Cuando un pedido sale incompleto, saber en qué etapa falló es lo primero. Cómo organizar el almacén por roles, con QR y tiempos por etapa."
project: "plataforma-distribucion-mayorista"
service: "automatizacion-de-procesos"
publishedAt: 2026-11-10
coverScreen: 3
---

Cuando un cliente reclama que le llegó un pedido incompleto, la primera pregunta es en qué etapa se perdió el producto. Si el almacén trabaja con hojas impresas y nadie firma nada, la respuesta depende de quién se acuerde.

En [una plataforma para distribuidoras mayoristas](/proyectos/plataforma-distribucion-mayorista) uno de los tres problemas era justamente ese: almacenes sin control de quién preparó qué. La plataforma separa el trabajo del almacén en etapas, con un responsable cada una.

## Tres roles, tres momentos

El preparador junta los productos del pedido. El embalador revisa lo que se juntó y lo empaca. El despachador lo entrega al transporte. Pueden ser tres personas o una sola con tres sombreros; lo que importa es que cada etapa se marque como terminada por alguien, con su nombre y su hora.

Cada pedido lleva un código QR, que se lee con el celular. El control se hace producto por producto, y el preparador reporta los faltantes desde el celular.

<figure data-device="desktop">
  <img src="/assets/proyectos/plataforma-distribucion-mayorista/03-desktop.webp" alt="Detalle del pedido con su facturación, los tiempos de preparado y embalaje y el control de cada producto" width="1600" height="1000" loading="lazy" decoding="async" />
  <figcaption>Detalle del pedido con facturación, tiempos de preparado y embalaje y control de cada producto. Pantalla con datos de ejemplo.</figcaption>
</figure>

## El dato que no esperabas necesitar

Una vez que cada etapa tiene hora de inicio y de fin, aparece un dato nuevo: cuánto tarda cada una.

Nos parece el más útil para quien administra. Si los pedidos salen tarde, los tiempos dicen si el cuello de botella está en la preparación (faltan manos o el depósito está desordenado) o en el despacho (el transporte no alcanza). Son problemas con soluciones distintas, y nos parece que sin el dato es fácil reforzar el área equivocada.

Para que funcione, el registro tiene que ser rápido. Si marcar una etapa toma más tiempo que hacerla, la gente lo hace al terminar la jornada, de memoria, y el dato no sirve. Por eso el QR y el celular: abrir el pedido y marcarlo tiene que ser cuestión de segundos.

Y conviene que el sistema que elijas no deje saltarse etapas: un pedido que no fue revisado no debería poder despacharse, aunque alguien tenga apuro.

## Sin sistema

La versión en papel es una hoja que viaja con el pedido, con tres casilleros (preparó, embaló, despachó) y en cada uno un nombre y una hora. Es incómoda y se pierde, y aun así es bastante mejor que nada. Si después de un mes con esa hoja los reclamos bajan, ya sabes que el problema era de control y que vale la pena resolverlo bien.

El pedido despachado tiene que terminar facturado, y la factura suele vivir en otro sistema. De cómo conectarlos hablamos en [conectar las ventas con tu ERP](/blog/conectar-las-ventas-con-tu-erp-sin-tipear-dos-veces).
