---
title: "Controlar repuestos en varias sucursales"
seoTitle: "Control de repuestos en varias sucursales"
description: "En un servicio técnico con varias sucursales, el repuesto no siempre está donde está el equipo. Cómo llevar el stock por sucursal y los envíos entre ellas."
project: "servicio-tecnico"
service: "sistemas-web-a-medida"
publishedAt: 2026-11-10
---

Con una sola sucursal, saber si hay un repuesto es cuestión de abrir un cajón. Con tres o cuatro, la pregunta cambia: hay que saber si hay, dónde está y cuánto tarda en llegar a la sucursal donde espera el equipo. Si eso se averigua por teléfono, el técnico espera, el cliente espera, y a veces se compra un repuesto que estaba en la sucursal de al lado.

En [el sistema de una cadena de servicio técnico](/proyectos/servicio-tecnico) el stock de repuestos se lleva por sucursal, con mínimos y máximos y pedidos a proveedores, y los despachos y entregas de repuestos entre sucursales quedan registrados.

<figure data-device="desktop">
  <img src="/assets/proyectos/servicio-tecnico/03-desktop.webp" alt="Stock de repuestos por sucursal con mínimos, máximos y pedidos a proveedores" width="1600" height="1000" loading="lazy" decoding="async" />
  <figcaption>Stock de repuestos por sucursal con mínimos, máximos y pedidos a proveedores. Pantalla con datos de ejemplo.</figcaption>
</figure>

El dato básico es cuántas unidades de cada repuesto hay en cada sucursal, y no un total de la empresa. Un total dice que hay cinco pantallas; el desglose dice que las cinco están en la sucursal que menos las necesita.

Los mínimos y máximos por sucursal sirven para decidir cuándo pedir. Si cada sucursal repara cosas distintas, conviene que tenga sus propios mínimos y máximos.

## El repuesto que viaja

Cuando el repuesto está en otra sucursal, el movimiento merece un registro propio: de dónde sale, a dónde va, para qué reparación es y cuándo se entregó. Con ese registro se contesta la pregunta del técnico («¿ya salió mi pantalla?») sin llamar a nadie.

Atar el envío a la reparación que lo necesita tiene otra ventaja: si la reparación se cancela, se sabe qué repuesto hay que devolver o reasignar.

Cuando un repuesto baja de su mínimo en todas las sucursales, toca comprar. Conviene que el pedido al proveedor quede registrado en el mismo lugar que el stock, con qué se pidió y cuándo, para que al recibirlo se sume a la sucursal que corresponde.

## Si hoy lo llevas en una planilla

Una hoja compartida con una fila por repuesto y una columna por sucursal ya resuelve la mitad. La otra mitad es una segunda hoja de movimientos (fecha, repuesto, desde, hacia, para qué orden), que cada sucursal llena cuando envía o recibe. Es poco trabajo si se hace en el momento.

El recorrido completo de un equipo, desde que entra hasta que sale, está en [seguimiento de reparaciones](/blog/seguimiento-de-reparaciones-en-un-servicio-tecnico-de-celulares).
