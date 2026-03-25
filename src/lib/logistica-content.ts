/**
 * Contenido reutilizable para la landing de logística / aduanas (SEO JSON-LD).
 */

export const LOGISTICA_FAQ = [
  {
    question: "¿Necesito reemplazar mi TMS o WMS actual?",
    answer:
      "No. Zékiri se integra sobre tus sistemas existentes vía API. En la mayoría de los casos, la implementación tarda entre 2 y 3 semanas sin desarrollo de tu parte. No tiras la infraestructura que ya tienes.",
  },
  {
    question: "¿Qué pasa si la IA comete un error en un documento crítico?",
    answer:
      "El sistema está diseñado para escalar al humano, no para reemplazarlo ciegamente. Cuando la confianza del modelo está por debajo del umbral configurado, el documento se envía automáticamente a revisión humana con el campo problemático ya marcado. Nunca cruza un documento con baja confianza de forma autónoma.",
  },
  {
    question: "¿Cómo se mantiene actualizado con los cambios del T-MEC 2026?",
    answer:
      "Tenemos un equipo de compliance que monitorea los cambios regulatorios binacionales y actualiza los modelos de validación. Tu operación recibe los cambios de forma automática, sin que tengas que rastrear normativas por tu cuenta.",
  },
  {
    question: "¿Funciona solo para el corredor México-EEUU?",
    answer:
      "Hoy tenemos cobertura completa para México-EEUU y estamos en beta para operaciones de Uruguay, Paraguay y Brasil bajo el régimen del Mercosur. Si tu operación es en LATAM, podemos evaluar juntos la factibilidad en una llamada.",
  },
  {
    question: "¿Cuánto tiempo tarda en verse el ROI?",
    answer:
      "La mayoría de los clientes ven un retorno medible en las primeras 4 a 6 semanas, principalmente en reducción de horas de camión detenido y en personal liberado de revisión manual. El piloto de 30 días genera suficientes datos para proyectar el ahorro anual con precisión.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Con una auditoría gratuita de tu proceso documental actual. En 45 minutos mapeamos tu flujo, identificamos los puntos de mayor riesgo y te entregamos un reporte con el costo estimado de los errores que hoy no estás viendo. Sin compromiso de compra.",
  },
] as const;
