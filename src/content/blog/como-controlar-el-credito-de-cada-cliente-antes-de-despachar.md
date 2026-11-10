---
title: "Cómo controlar el crédito de cada cliente antes de despachar"
seoTitle: "Controlar el crédito de tus clientes"
description: "Vender a crédito es parte del negocio de una distribuidora. Cómo controlar el límite y la mora de cada cliente en el momento del pedido, y no a fin de mes."
project: "distribucion-consumo-masivo"
service: "automatizacion-de-procesos"
publishedAt: 2026-11-10
---

En una distribuidora el crédito se descontrola de una manera muy concreta. El vendedor toma el pedido sin saber cuánto debe el cliente, la oficina lo factura porque el pedido ya está hecho, y el problema aparece a fin de mes, cuando cobranzas revisa el saldo y encuentra un cliente que compró de nuevo con dos facturas vencidas.

Cada una decidió con la información que tenía, y esa información llegó tarde. Por eso el control del crédito funciona mejor cuando se hace en el momento del pedido, y para eso tiene que estar a la vista de quien lo toma.

## Tres datos por cliente

Para decidir si un pedido a crédito puede seguir hacen falta tres datos del cliente, al día: su límite de crédito, cuánto tiene usado y si tiene facturas vencidas.

Con eso se pueden escribir reglas sencillas que el sistema aplica solo; por ejemplo, que un pedido que pasa el límite no se confirme, o que un cliente con facturas vencidas solo pueda comprar al contado. Las reglas exactas las decide cada empresa, y lo que pesa es que estén escritas y se apliquen igual a todos los vendedores antes de despachar.

¿Quién tiene que ver esos datos? El vendedor, antes que nadie. En [una distribuidora de consumo masivo](/proyectos/distribucion-consumo-masivo) pasaba exactamente eso: el vendedor salía a ruta sin conocer el saldo ni el crédito disponible de cada cliente. Su app tiene el estado de cuenta de cada uno, junto a la agenda de visitas y los cobros.

Creemos que ver el saldo antes de sentarse con el cliente cambia la conversación. Le permite al vendedor cobrar primero y vender después, o explicarle al cliente por qué hoy el pedido va al contado, en lugar de que lo llame la oficina dos días más tarde con el pedido ya armado.

A la oficina le conviene verlo desde otro lugar: una lista de los pedidos que quedaron detenidos por crédito, para decidir caso por caso si se libera alguno.

## Lo que conviene evitar

Las excepciones de palabra. Si un vendedor puede saltarse la regla porque conoce al cliente, la regla pierde fuerza rápido. Es mejor que la excepción exista y quede registrada (quién la aprobó y por qué) a que se haga por fuera.

Y los límites que nadie revisa. Un límite de crédito que se puso cuando el cliente compraba poco y nunca se actualizó termina frenando a los buenos clientes, y el vendedor aprende a pedir excepciones para todo.

## Si lo llevas en una planilla

La versión mínima es una hoja con los clientes, su límite, su saldo y la fecha de su factura vencida más vieja, que cobranzas actualiza cada mañana y que cada vendedor recibe antes de salir. No impide nada, pero al menos todos deciden con el mismo dato.

Cuando el pedido pasa el control, empieza el trabajo del almacén. El recorrido completo de un pedido en esa distribuidora lo contamos en [control de pedidos](/blog/control-de-pedidos-en-una-distribuidora).
