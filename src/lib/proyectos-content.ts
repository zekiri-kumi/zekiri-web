/** Portfolio case studies for /proyectos. Client names and data are anonymized. */
export type ProjectScreen = {
  src: string;
  device: "desktop" | "mobile";
  width: number;
  height: number;
  caption: string;
};

export type Project = {
  slug: string;
  sector: string;
  headline: string;
  problem: string;
  features: readonly string[];
  platforms: readonly string[];
  stack: readonly string[];
  years: string;
  accent: string;
  screens: readonly ProjectScreen[];
  /** Set to true to take the case off the site: lists, home, sitemap and its own URL (404). */
  hidden?: boolean;
  /** Set to true to keep the case out of lists, home and sitemap while its own URL still works, with noindex. */
  unlisted?: boolean;
};

/** Every case, hidden ones included. Pages read PROJECTS instead. */
const ALL_PROJECTS: readonly Project[] = [
  {
    slug: "plataforma-distribucion-mayorista",
    sector: "Plataforma SaaS de distribución mayorista",
    headline: "Una sola plataforma donde cada distribuidora gestiona su fuerza de ventas, pedidos, políticas comerciales, facturación y almacén, con soporte de IA e integración con su ERP.",
    problem: "Las distribuidoras trabajaban con vendedores que tomaban pedidos por fuera del sistema, almacenes sin control de quién preparó qué y datos que no coincidían con el ERP. Todas necesitaban lo mismo, pero ninguna podía costear un desarrollo propio.",
    features: [
      "Panel por empresa con ventas, cobranzas y facturas sincronizadas con el ERP, proyección del mes y ranking de vendedores",
      "App del vendedor para armar el pedido del cliente con precios, descuentos y reserva de ítems sin stock",
      "Almacén por roles (preparador, embalador, despachador) con QR del pedido, control por ítem y tiempos por etapa",
      "Detalle del pedido con facturación, mapa de entrega y factura emitida o anulada",
      "Agente de soporte con IA y base de conocimiento que deriva al equipo lo que no resuelve",
      "Consola del operador para empresas, suscripciones, pagos e integración con el ERP",
    ],
    platforms: ["Web admin por empresa", "App vendedor", "App almacén", "Consola del operador"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "FusionAuth"],
    years: "2024–2026",
    accent: "#1c2b4a",
    screens: [
      {
        src: "/assets/proyectos/plataforma-distribucion-mayorista/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Panel de la empresa: ventas del día y del mes, cobranzas, proyección de cierre y ranking de vendedores",
      },
      {
        src: "/assets/proyectos/plataforma-distribucion-mayorista/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "El vendedor arma el pedido con precio, descuento y reserva de ítems sin stock",
      },
      {
        src: "/assets/proyectos/plataforma-distribucion-mayorista/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Detalle del pedido con facturación, tiempos de preparado y embalaje y control de cada producto",
      },
      {
        src: "/assets/proyectos/plataforma-distribucion-mayorista/04-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "El preparador marca cada producto y reporta faltantes desde el celular",
      },
      {
        src: "/assets/proyectos/plataforma-distribucion-mayorista/05-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Consola del operador: casos que el agente de IA derivó, con la conversación y la ficha del ticket",
      },
    ],
  },
  {
    slug: "tratamientos-cronicos",
    hidden: true,
    sector: "Salud y tratamientos crónicos",
    headline: "Una plataforma para tratamientos de uso continuo que conecta al médico que prescribe, a la farmacia que despacha y al paciente que recibe, con cada orden generada a tiempo.",
    problem: "En un tratamiento crónico, cada mes alguien tiene que renovar la receta, validar la cobertura y coordinar la entrega. Cuando eso depende de planillas y mensajes, los pedidos se atrasan y no queda claro quién tiene el siguiente paso.",
    features: [
      "Pacientes con estado de suscripción y datos de cobertura",
      "Etapa del tratamiento con el responsable del siguiente paso",
      "Confirmación del médico antes de generar cada orden",
      "Calendario mensual de órdenes al día, pendientes y atrasadas",
      "Historial de órdenes con estados de despacho y facturación",
      "Seguimiento del pedido, recetas e historial desde el celular",
    ],
    platforms: ["Web para médicos", "Portal de pacientes (PWA)", "App móvil"],
    stack: ["Next.js", "React", "Tailwind CSS", "Angular", "Ionic", "Firebase", "React Native"],
    years: "2022–2026",
    accent: "#0f7f8c",
    screens: [
      {
        src: "/assets/proyectos/tratamientos-cronicos/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Ficha del paciente: etapa del tratamiento, cobertura, medicamento actual e historial de órdenes",
      },
      {
        src: "/assets/proyectos/tratamientos-cronicos/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "El paciente ve la fecha estimada de entrega y el avance de su pedido",
      },
      {
        src: "/assets/proyectos/tratamientos-cronicos/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Pacientes con el estado de su suscripción y búsqueda por nombre, documento o email",
      },
      {
        src: "/assets/proyectos/tratamientos-cronicos/04-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Calendario del mes: qué se genera, qué espera confirmación y qué está atrasado",
      },
    ],
  },
  {
    slug: "citas-medicas-r7k2vq",
    unlisted: true,
    sector: "Salud: citas médicas y bandeja del médico",
    headline: "Las citas médicas que piden las pacientes al inscribirse llegan ordenadas al equipo médico, y cada una termina con el medicamento indicado y la primera orden generada.",
    problem: "Cada paciente nueva necesitaba una consulta antes de empezar su tratamiento, y los casos se repartían entre pestañas con nombres del sistema. El médico tenía que saber dónde buscar, las consultas con problemas graves no se distinguían del resto y la paciente no sabía qué le faltaba para empezar.",
    features: [
      "La paciente pide su cita al inscribirse, con el motivo y el turno que prefiere",
      "Agenda de citas por estado: pendientes, en proceso, finalizadas y rechazadas",
      "Alerta visible en las consultas con problemas médicos graves",
      "Detalle de la cita con datos de la paciente, historia clínica y prescripción",
      "Bandeja del médico con lo que espera su acción, lo vencido primero",
      "Resolver la cita elige el medicamento y genera la primera orden del tratamiento",
    ],
    platforms: ["Panel del equipo médico", "Back office", "Portal de pacientes (PWA)"],
    stack: ["Next.js", "React", "Tailwind CSS", "Angular", "Ionic"],
    years: "2022–2026",
    accent: "#6a3474",
    screens: [
      {
        src: "/assets/proyectos/citas-medicas-r7k2vq/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Bandeja del médico: pacientes que esperan un medicamento y entregas por confirmar, con lo vencido primero",
      },
      {
        src: "/assets/proyectos/citas-medicas-r7k2vq/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "La paciente ve el día y el turno de su cita y qué le falta a cada terapia para empezar",
      },
      {
        src: "/assets/proyectos/citas-medicas-r7k2vq/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Agenda de citas por estado, con alerta en los casos graves y el detalle de la paciente al costado",
      },
      {
        src: "/assets/proyectos/citas-medicas-r7k2vq/04-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Al resolver la cita, el médico elige el medicamento y se genera la primera orden",
      },
    ],
  },
  {
    slug: "distribucion-consumo-masivo",
    sector: "Distribución de consumo masivo",
    headline: "Conecta en un solo sistema los pedidos de los clientes, el trabajo de los vendedores en ruta, la preparación en almacén y el seguimiento desde la oficina.",
    problem: "Los pedidos llegaban por teléfono, mensajes y papel, sin ver el stock real ni en qué etapa estaba cada entrega. El cliente no sabía cuándo recibiría su mercadería y el vendedor salía a ruta sin conocer el saldo ni el crédito disponible de cada cliente.",
    features: [
      "Catálogo por marca con precio, unidad de venta, stock, ofertas y reservas",
      "Seguimiento del pedido para el cliente, desde la confirmación hasta la entrega",
      "App del vendedor con agenda de visitas, cobros y estado de cuenta",
      "App de almacén para preparar, embalar y despachar con lector QR y foto de respaldo",
      "Panel de oficina con filtros, impresión, exportación a Excel e integración con el ERP",
      "Promociones, puntos, pagos, facturas y reclamos",
    ],
    platforms: ["Web admin", "App cliente", "App vendedor", "App almacén"],
    stack: ["Angular", "Ionic", "Capacitor", "Socket.IO"],
    years: "2020–2026",
    accent: "#8a2433",
    screens: [
      {
        src: "/assets/proyectos/distribucion-consumo-masivo/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Panel de oficina: pedidos con estado, prioridad, almacén y vendedor, exportables a Excel",
      },
      {
        src: "/assets/proyectos/distribucion-consumo-masivo/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "El cliente arma su pedido desde el catálogo y ve el stock al instante",
      },
      {
        src: "/assets/proyectos/distribucion-consumo-masivo/03-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Seguimiento del pedido: etapa de la entrega, monto y guía de despacho",
      },
      {
        src: "/assets/proyectos/distribucion-consumo-masivo/04-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "App del vendedor en ruta: agenda del día, pedidos recientes y estado de cuenta",
      },
    ],
  },
  {
    slug: "estudios-juridicos",
    sector: "Estudios jurídicos",
    headline: "Centraliza los procesos judiciales de cada cliente del estudio, con su historial de actuaciones, gastos y documentos en un solo lugar.",
    problem: "El seguimiento de decenas de procesos por cliente vivía en carpetas y planillas sueltas: no se sabía en qué etapa estaba cada causa, cuál era el próximo paso ni cuánto se había gastado. El cliente además pedía informes por teléfono.",
    features: [
      "Ficha de cada proceso: contraparte, expediente, juzgado, distrito, tipo y etapa",
      "Registro de actividades con próximo paso, fecha y marca de hito",
      "Gastos por actividad con concepto, respaldo (factura, recibo, timbre) y total",
      "Documentos, contratos, informes y adjuntos por cliente y por proceso",
      "Opinión legal y notas del abogado por proceso",
      "Reporte de gastos exportable a Excel y acceso de lectura para el cliente",
    ],
    platforms: ["Web admin", "Portal del cliente"],
    stack: ["Angular", "TypeScript", "NestJS", "Firebase"],
    years: "2021–2023",
    accent: "#0d395d",
    screens: [
      {
        src: "/assets/proyectos/estudios-juridicos/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Detalle del proceso con el historial de actividades, hitos y gasto acumulado",
      },
      {
        src: "/assets/proyectos/estudios-juridicos/02-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Panel principal con clientes, abogado asignado y estado de cada proceso",
      },
      {
        src: "/assets/proyectos/estudios-juridicos/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Procesos de un cliente con su estado, juzgado, etapa y próximo paso",
      },
      {
        src: "/assets/proyectos/estudios-juridicos/04-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Reporte de gastos por cliente y período, listo para exportar a Excel",
      },
    ],
  },
  {
    slug: "credito-e-inversion",
    sector: "Crédito de consumo e inversión",
    headline: "Permite comprar productos a crédito, simular cuotas e inversiones y seguir el estado de cada solicitud desde la web o el celular.",
    problem: "Pedir un crédito de consumo obligaba a ir al banco y esperar días sin saber cuánto se iba a pagar. La plataforma muestra la cuota antes de pedirlo, compara la tasa con la de la banca y deja seguir la solicitud en línea.",
    features: [
      "Simulador de crédito con tasa y cuota comparadas con otros bancos",
      "Simulador de inversión por monto y plazo",
      "Tienda por categorías y proveedores para comprar a crédito",
      "Solicitud de crédito con carga de documentos",
      "Perfil con los créditos, su estado y las observaciones a corregir",
      "App móvil con productos, créditos, inversiones y notificaciones",
    ],
    platforms: ["Web", "App móvil"],
    stack: ["Angular", "Angular Universal (SSR)", "Firebase", "React Native", "Expo"],
    years: "2021–2022",
    accent: "#00282e",
    screens: [
      {
        src: "/assets/proyectos/credito-e-inversion/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Simulador de crédito: tasa y cuota mensual frente a la de otros bancos",
      },
      {
        src: "/assets/proyectos/credito-e-inversion/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "App móvil: ofertas, inversiones, solicitud de crédito y notificaciones",
      },
      {
        src: "/assets/proyectos/credito-e-inversion/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Perfil del cliente con sus créditos y el estado de cada solicitud",
      },
    ],
  },
  {
    slug: "servicio-tecnico",
    sector: "Servicio técnico multisucursal",
    headline: "Controla cada celular que entra a reparación, desde la recepción en sucursal hasta la entrega al cliente, con el técnico, los repuestos y las llamadas en un solo lugar.",
    problem: "Una cadena de sucursales de reparación no sabía en qué estado estaba cada equipo, quién lo tenía ni si había repuesto. Las confirmaciones con el cliente y los envíos entre sucursales se perdían en papeles y llamadas sin registro.",
    features: [
      "Recepción con cliente, IMEI, golpes, accesorios, garantía, prioridad y código QR",
      "Peritaje del técnico con diagnóstico, precio, tiempo estimado y repuestos",
      "Flujo de estados con plazos: peritaje, confirmación, repuesto, reparación, listo y entregado",
      "Contact center que registra cada llamada y la confirmación del cliente",
      "Stock de repuestos por sucursal con mínimos, máximos y pedidos a proveedores",
      "Despachos y entregas de repuestos entre sucursales",
    ],
    platforms: ["Web admin"],
    stack: ["Ember.js", "Node.js", "Express", "MySQL"],
    years: "2015–2016",
    accent: "#f26631",
    screens: [
      {
        src: "/assets/proyectos/servicio-tecnico/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Orden de reparación: equipo, peritaje, repuestos, técnico asignado e historial de estados",
      },
      {
        src: "/assets/proyectos/servicio-tecnico/02-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Tablero del técnico: equipos en reparación y listos, con el conteo por estado",
      },
      {
        src: "/assets/proyectos/servicio-tecnico/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Stock de repuestos por sucursal con mínimos, máximos y pedidos a proveedores",
      },
      {
        src: "/assets/proyectos/servicio-tecnico/04-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Contact center: llamadas al cliente y confirmación del presupuesto antes de reparar",
      },
    ],
  },
  {
    slug: "lista-de-bodas",
    sector: "Retail de hogar y lista de bodas",
    headline: "Sitio web para que las parejas armen la lista de regalos de su boda con productos de una tienda de hogar y la compartan con sus invitados.",
    problem: "Las listas de bodas se armaban en papel o en la tienda, con una asesora. Los invitados no sabían qué faltaba, se repetían regalos y la pareja tenía que ir varias veces a la tienda para ver productos y precios.",
    features: [
      "Lista de regalos en tres pasos: elegir, confirmar y compartir",
      "Lista sugerida de productos para empezar",
      "Catálogo por categoría y por marca, con precios en Bs.",
      "Contador de productos en la lista siempre visible",
      "Tarjetas de regalo para los invitados",
      "Pedido de cita con una asesora de la tienda",
    ],
    platforms: ["Web"],
    stack: ["Angular 7", "TypeScript", "SCSS", "RxJS"],
    years: "2019",
    accent: "#c0643a",
    screens: [
      {
        src: "/assets/proyectos/lista-de-bodas/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Inicio con los tres pasos para crear la lista de regalos y los requisitos para empezar",
      },
      {
        src: "/assets/proyectos/lista-de-bodas/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Catálogo por categoría y marca, con productos nuevos marcados y la lista a mano",
      },
      {
        src: "/assets/proyectos/lista-de-bodas/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Selección de regalos con filtros por categoría y marca y contador de la lista",
      },
      {
        src: "/assets/proyectos/lista-de-bodas/04-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Primer paso con video guía, lista sugerida de 104 productos y categorías",
      },
      {
        src: "/assets/proyectos/lista-de-bodas/05-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Inicio de la lista con pasos, lista sugerida, categorías y tarjetas de regalo",
      },
    ],
  },
  {
    slug: "alimentos-a-domicilio",
    sector: "Alimentos frescos a domicilio",
    headline: "Tienda en línea y app de productos frescos con recetas listas para comprar, packs semanales, pedidos para restaurantes y entrega en el día y horario que elige el cliente.",
    problem: "La venta de frutas, verduras y productos de granja se hacía por mensajes y llamadas: el cliente no veía precios ni disponibilidad, los pedidos se anotaban a mano y coordinar día, dirección y cobro tomaba más tiempo que preparar el pedido.",
    features: [
      "Catálogo por categorías y proveedores, con filtros, unidad de venta y precio en Bs.",
      "Recetas con ingredientes, pasos y botón para comprar todos los ingredientes",
      "Packs de la semana con el detalle de su contenido",
      "Checkout en pasos: dirección en el mapa, día y rango horario de entrega",
      "Pago contra entrega o con tarjeta, datos de factura, envío e IVA",
      "Historial de pedidos y cuenta propia para restaurantes",
    ],
    platforms: ["Tienda web", "App Android e iOS"],
    stack: ["Angular", "Ionic", "Cordova", "Firebase", "Google Maps"],
    years: "2018–2019",
    accent: "#8cc73e",
    screens: [
      {
        src: "/assets/proyectos/alimentos-a-domicilio/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Tienda con filtros, categorías, proveedores y el pack de la semana",
      },
      {
        src: "/assets/proyectos/alimentos-a-domicilio/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Elección de dirección, día y horario de entrega desde la app",
      },
      {
        src: "/assets/proyectos/alimentos-a-domicilio/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Receta con sus ingredientes listos para agregar al carrito en un clic",
      },
    ],
  },
  {
    slug: "supervision-de-obra",
    sector: "Construcción y supervisión de obra",
    headline: "App para que el equipo de obra registre fotos, notas y el estado de cada punto marcado sobre los planos, con el avance del proyecto ordenado por fecha.",
    problem: "El avance de obra se reportaba con fotos sueltas por mensajería y notas en papel: no quedaba claro a qué parte del plano correspondía cada foto ni qué faltaba, y la supervisión tenía que ir en persona para saberlo.",
    features: [
      "Proyectos con planos subidos desde el teléfono y archivos adjuntos",
      "Puntos marcados sobre el plano, cada uno con sus fotos y notas",
      "Foto con notas y dibujo encima, tomada desde la cámara",
      "Estado de cada punto (Empezó, En proceso, Terminado) y estados propios del proyecto",
      "Actividad reciente y calendario diario de lo registrado por el equipo",
      "Funciona sin conexión y sincroniza con la nube",
    ],
    platforms: ["App Android"],
    stack: ["NativeScript", "Angular", "Firebase", "SQLite"],
    years: "2019–2020",
    accent: "#fbc926",
    screens: [
      {
        src: "/assets/proyectos/supervision-de-obra/01-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Proyecto con el avance de los puntos de control y los registros recientes",
      },
      {
        src: "/assets/proyectos/supervision-de-obra/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Plano con los puntos marcados y las fotos y notas del punto elegido",
      },
      {
        src: "/assets/proyectos/supervision-de-obra/03-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Foto de avance a la que se le asigna un estado",
      },
    ],
  },
  {
    slug: "mentorias",
    sector: "Emprendimiento y mentorías",
    headline: "Plataforma web que conecta a emprendedores de Latinoamérica con mentores, desde la solicitud hasta la videollamada y la calificación.",
    problem: "Conseguir el consejo de alguien con experiencia dependía de contactos personales. No había un lugar para encontrar mentores por especialidad, coordinar horarios entre países ni dejar registro de cada sesión y de cómo resultó.",
    features: [
      "Catálogo de mentores filtrable por categoría y etiqueta, con país, idiomas y biografía",
      "Solicitud de mentoría con motivación, descripción y proyecto del emprendedor",
      "El mentor aprueba o rechaza con justificación y propone fechas tentativas",
      "El emprendedor elige el horario y ambos reciben avisos por correo y en la plataforma",
      "Sala de videollamada integrada y calificación con estrellas al terminar",
      "Panel de administración para aprobar mentores, revisar solicitudes y gestionar categorías, en español, inglés y portugués",
    ],
    platforms: ["Web", "Web adaptable a celular"],
    stack: ["Angular", "Node.js", "Sequelize", "MySQL", "OpenVidu (WebRTC)", "Cloudinary"],
    years: "2017-2018",
    accent: "#2a6b58",
    screens: [
      {
        src: "/assets/proyectos/mentorias/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Catálogo de mentores con filtros por categoría y etiqueta",
      },
      {
        src: "/assets/proyectos/mentorias/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "El emprendedor elige uno de los horarios que propuso el mentor",
      },
      {
        src: "/assets/proyectos/mentorias/03-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "El mentor revisa la solicitud, propone fechas y la aprueba o rechaza",
      },
      {
        src: "/assets/proyectos/mentorias/04-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Sala de reuniones con videollamada entre mentor y emprendedor",
      },
      {
        src: "/assets/proyectos/mentorias/05-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Seguimiento de cada mentoría con su estado y la acción que corresponde",
      },
    ],
  },
  {
    slug: "aceleradora-de-startups",
    sector: "Aceleradora de startups",
    headline: "Sitio de una aceleradora que presenta su programa, sus mentores y las startups aceleradas, y recibe postulaciones de emprendedores y mentores.",
    problem: "La aceleradora necesitaba captar emprendedores y mentores de varios países y mostrar su proceso con claridad, en español e inglés, sin depender de formularios sueltos.",
    features: [
      "Inicio con el programa y llamado a postular",
      "El proceso de aceleración explicado en cuatro pasos",
      "Directorio de mentores con país y perfil profesional",
      "Formulario de pre-postulación para emprendedores",
      "Formulario para que nuevos mentores se postulen",
      "Sitio bilingüe español e inglés",
    ],
    platforms: ["Web"],
    stack: ["Angular", "ngx-translate", "Firebase", "SCSS"],
    years: "2019–2022",
    accent: "#ff420a",
    screens: [
      {
        src: "/assets/proyectos/aceleradora-de-startups/01-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Inicio: invitación a postular y los tres pilares del programa",
      },
      {
        src: "/assets/proyectos/aceleradora-de-startups/02-desktop.webp",
        device: "desktop",
        width: 1600,
        height: 1000,
        caption: "Red de mentores nacionales e internacionales, con acceso para unirse",
      },
    ],
  },
  {
    slug: "control-de-acceso",
    sector: "Eventos y control de acceso",
    headline: "App para que el personal de puerta valide las entradas de un evento escaneando el código de barras del boleto con la cámara del celular.",
    problem: "En los eventos, el ingreso se controlaba cortando o marcando boletos de papel a mano. No había forma de saber qué puerta recibió a quién y cada boleto se revisaba a ojo, con filas largas en la entrada.",
    features: [
      "Usuario por operador, asignado de antemano a un evento, una sucursal y una puerta",
      "Escaneo del código de barras con la cámara, con aviso sonoro al leerlo",
      "Linterna para leer boletos en accesos con poca luz",
      "Último código leído siempre visible en la pantalla de control",
      "Aviso claro cuando no hay conexión o las credenciales no son válidas",
    ],
    platforms: ["App Android"],
    stack: ["Kotlin", "Android", "Retrofit", "RxJava", "ZXing"],
    years: "2018",
    accent: "#15173A",
    screens: [
      {
        src: "/assets/proyectos/control-de-acceso/01-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Control del ingreso con el evento, la puerta asignada y el último boleto leído",
      },
      {
        src: "/assets/proyectos/control-de-acceso/02-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Escaneo del boleto con la cámara y linterna para accesos oscuros",
      },
      {
        src: "/assets/proyectos/control-de-acceso/03-mobile.webp",
        device: "mobile",
        width: 520,
        height: 1125,
        caption: "Ingreso del operador con el usuario que le asignó el organizador",
      },
    ],
  },
];

/** Published cases. The whole site reads this list, so a hidden case disappears everywhere. */
export const PROJECTS: readonly Project[] = ALL_PROJECTS.filter((project) => !project.hidden && !project.unlisted);

/** The case a /proyectos/<slug> URL serves: published or unlisted, never hidden. */
export function projectForPage(slug: string): Project | undefined {
  return ALL_PROJECTS.find((candidate) => candidate.slug === slug && !candidate.hidden);
}

/** Looks a case up among all of them, hidden or not, so a typo fails instead of dropping the case. */
export function projectBySlug(slug: string): Project {
  const project = ALL_PROJECTS.find((candidate) => candidate.slug === slug);
  if (!project) throw new Error(`Unknown project slug "${slug}"`);
  return project;
}

/** For the slots that have no substitute: hiding the case they point to must fail the build. */
export function publishedProjectBySlug(slug: string): Project {
  const project = projectBySlug(slug);
  if (project.hidden) throw new Error(`Project "${slug}" is hidden but a page still uses it`);
  return project;
}
