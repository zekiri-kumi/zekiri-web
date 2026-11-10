---
title: "Seguimiento de procesos judiciales: cómo lo ordenamos en un estudio jurídico"
seoTitle: "Seguimiento de procesos judiciales en un estudio"
description: "Un estudio jurídico seguía decenas de procesos por cliente en carpetas y planillas. Cómo lo ordenamos, y qué se puede mejorar hoy mismo en la planilla."
project: "estudios-juridicos"
service: "sistemas-web-a-medida"
publishedAt: 2026-11-10
---

Si tu estudio lleva decenas de causas, sabes lo que cuesta contestar en qué etapa está cada una. Un estudio jurídico para el que trabajamos llevaba ese seguimiento en carpetas y planillas sueltas. Eran decenas de procesos por cliente, y no se sabía en qué etapa estaba cada causa, cuál era el próximo paso ni cuánto se había gastado. Los clientes, por su parte, pedían sus informes por teléfono.

Creemos que es un problema común, y que suele empezar con una planilla que funcionaba bien. Lo que sigue vale para las planillas en general.

## Dónde deja de alcanzar la planilla

Una planilla es buena para guardar una lista: una fila por proceso, con su expediente, su juzgado y su etapa. Lo que no guarda bien es la historia. Cada actuación nueva pisa a la anterior en la columna de «última actuación», y a los pocos meses nadie puede reconstruir qué se hizo en marzo sin ir a buscar la carpeta.

Con los gastos pasa lo mismo, en otra hoja. Los timbres, las fotocopias y los recibos se anotan cuando alguien se acuerda, lejos de la actuación que los causó, y el día que el cliente pide el detalle hay que armarlo a mano cruzando dos archivos. El informe para el cliente termina siendo un trabajo aparte, que se hace cuando el cliente llama.

Esto le pasa a cualquier herramienta de listas cuando varias personas necesitan mirar y actualizar lo mismo, y cuando lo que hay que guardar deja de ser una lista y pasa a ser un historial.

## Qué construimos

Armamos un sistema web con [dos entradas](/proyectos/estudios-juridicos): una para el estudio y otra, de solo lectura, para sus clientes.

Cada proceso tiene su ficha, con la contraparte, el expediente, el juzgado, el distrito, el tipo y la etapa. Lo importante es lo que cuelga de la ficha.

Lo que se hace en un proceso se registra como una actividad, con su próximo paso y su fecha. Creemos que es lo más útil del sistema, porque responde por adelantado la pregunta que todos hacen: qué sigue y cuándo. Las actividades que marcan un antes y un después en la causa se señalan como hitos, para poder leer un proceso largo sin recorrerlo entero.

<figure data-device="desktop">
  <img src="/assets/proyectos/estudios-juridicos/03-desktop.webp" alt="Lista de procesos de un cliente con estado, juzgado, etapa y próximo paso de cada uno" width="1600" height="1000" loading="lazy" decoding="async" />
  <figcaption>Procesos de un cliente con su estado, juzgado, etapa y próximo paso. Pantalla con datos de ejemplo.</figcaption>
</figure>

Los gastos se anotan dentro de la actividad que los generó, con su concepto y con el tipo de respaldo que tienen: factura, recibo o timbre. Así los gastos quedan registrados junto al trabajo que los causó, con su total. El reporte de gastos por cliente y por período sale a Excel, que es un formato cómodo para rendir cuentas.

Los documentos, contratos e informes quedan guardados por cliente y por proceso, junto con la opinión legal y las notas del abogado.

Y el cliente tiene su propio acceso, de solo lectura.

## Si tu estudio todavía no necesita un sistema

No todos los estudios lo necesitan, y preferimos decirlo antes de que alguien nos pida una cotización. Si son dos o tres abogados y cada uno lleva sus propias causas, hay dos cambios que se pueden hacer hoy en la planilla y que resuelven buena parte del problema.

El primero es agregar dos columnas, «próximo paso» y «fecha», y no dejarlas nunca vacías. Un proceso sin próximo paso anotado es un proceso que depende de la memoria de alguien.

El segundo es anotar cada gasto el mismo día, en una hoja que tenga la fecha, el proceso, el concepto y el tipo de comprobante, aunque el comprobante sea «ninguno». Los gastos sin papel existen, y conviene que figuren en algún lado.

El sistema empieza a valer la pena cuando varias personas actualizan los mismos procesos o cuando los clientes piden informes seguido. Si tu estudio está en ese punto, en [sistemas web a medida](/servicios/sistemas-web-a-medida) contamos cómo trabajamos. Los gastos tienen su propio artículo: [cómo rendir cuentas de los gastos de cada causa](/blog/como-rendir-cuentas-de-los-gastos-de-cada-causa).
