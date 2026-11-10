---
title: "Reporte fotográfico de obra: cada foto en su lugar del plano"
seoTitle: "Reporte fotográfico de obra sobre el plano"
description: "El avance de obra llegaba en fotos sueltas por mensajería. Cómo hicimos una app que ata cada foto, nota y estado a un punto marcado sobre el plano."
project: "supervision-de-obra"
service: "desarrollo-de-aplicaciones-moviles"
publishedAt: 2026-11-10
coverScreen: 1
---

Si diriges obras, seguramente recibes el avance en un grupo de WhatsApp. En la obra de este caso se reportaba así, con fotos sueltas por mensajería y notas en papel. Las fotos llegaban, pero no quedaba claro a qué parte del plano correspondía cada una ni qué faltaba, y para saberlo la supervisión tenía que ir en persona.

Creemos que es un defecto frecuente de los reportes fotográficos de obra armados a mano: la foto muestra una columna, y tiempo después cuesta decir cuál columna era.

La app que hicimos ([el caso está en el portafolio](/proyectos/supervision-de-obra)) parte de una decisión: la foto, la nota y el estado se asocian a un punto marcado sobre el plano. El equipo sube el plano desde el teléfono, marca puntos sobre él, y cada foto y cada nota pertenecen a uno de esos puntos. Al tocar un punto del plano se ve todo lo que se registró ahí.

Sobre la foto se puede escribir y dibujar. Cada punto tiene además un estado (empezó, en proceso o terminado) y cada proyecto puede definir estados propios, que es lo que permite que la app use las palabras de cada obra.

Con eso el avance se puede leer de dos maneras. Una es el plano, con sus puntos marcados y las fotos y notas de cada uno. La otra es el tiempo: la app muestra la actividad reciente y un calendario con lo que el equipo registró cada día.

La app funciona sin conexión y sincroniza con la nube.

## Si por ahora el reporte va a seguir saliendo por WhatsApp

Hay una convención que, a nuestro juicio, ayuda sin instalar nada: que ninguna foto se envíe sin un texto que diga, siempre en el mismo orden, el nivel, el eje o ambiente y el estado. «Nivel 3, eje C-4, encofrado terminado» ocupa una línea y convierte una galería de fotos en algo que se puede buscar.

Lo que esa convención no da es la vista de conjunto, la de abrir el plano y ver de un vistazo qué está empezado, qué está en proceso y qué falta. Para eso hace falta una herramienta, y en [desarrollo de aplicaciones móviles](/servicios/desarrollo-de-aplicaciones-moviles) contamos cómo las construimos. Cómo se usa ese registro para supervisar de lejos está en [controlar el avance de obra sin ir todos los días](/blog/controlar-el-avance-de-obra-sin-ir-todos-los-dias).
