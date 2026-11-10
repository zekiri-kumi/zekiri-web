import type { FaqItem } from "@/lib/home-content";
import { projectBySlug, type Project } from "@/lib/proyectos-content";

/** Service pages under /servicios. Every claim in the copy comes from a published case. */
export type ServiceDeliverable = {
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  /** Short name for the home card, the footer and the breadcrumb. */
  name: string;
  /** One-paragraph pitch shown on the home card. */
  summary: string;
  /** Page headline (h1). */
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  deliverablesHeading: string;
  deliverables: readonly ServiceDeliverable[];
  /** Cases that show the service in a real project. The first one illustrates the page. */
  cases: readonly Project[];
  faqs: readonly FaqItem[];
};

/** Resolves the slugs and leaves hidden cases out, so hiding a case never breaks a service page. */
function publishedCases(serviceSlug: string, caseSlugs: readonly string[]): readonly Project[] {
  const cases = caseSlugs.map(projectBySlug).filter((project) => !project.hidden);
  if (cases.length === 0) throw new Error(`Service "${serviceSlug}" has no published case left`);
  return cases;
}

const WEB_SYSTEMS_SLUG = "sistemas-web-a-medida";
const MOBILE_APPS_SLUG = "desarrollo-de-aplicaciones-moviles";
const AUTOMATION_SLUG = "automatizacion-de-procesos";

export const SERVICES: readonly Service[] = [
  {
    slug: WEB_SYSTEMS_SLUG,
    name: "Sistemas web a medida",
    summary:
      "Back office, portales de clientes y plataformas multiempresa que reemplazan las planillas y los sistemas que ya no alcanzan.",
    title: "Sistemas web a medida para empresas en Bolivia",
    lead: "Construimos el sistema que tu empresa necesita para dejar las planillas: paneles de administración, portales de clientes y plataformas multiempresa, diseñados a partir de cómo trabaja tu equipo. Lo hacemos desde Cochabamba.",
    metaTitle: "Sistemas web a medida para empresas en Bolivia | Zékiri",
    metaDescription:
      "Sistemas web a medida en Bolivia: paneles de administración, portales de clientes y plataformas SaaS que reemplazan planillas. Diagnóstico sin costo.",
    deliverablesHeading: "Qué tipo de sistemas construimos",
    deliverables: [
      {
        title: "Paneles de administración",
        text: "El back office donde tu equipo registra y da seguimiento a pedidos, procesos, stock o reparaciones, con filtros, estados y exportación a Excel.",
      },
      {
        title: "Portales para tus clientes",
        text: "Un acceso propio para que tu cliente vea el estado de su pedido, su proceso o su solicitud sin tener que llamar.",
      },
      {
        title: "Plataformas SaaS multiempresa",
        text: "Una sola plataforma que usan varias empresas, cada una con sus datos y usuarios, administrada desde una consola con suscripciones y pagos.",
      },
      {
        title: "Tiendas y catálogos en línea",
        text: "Catálogos con precios en Bs., pedido, pago y entrega en el día y horario que elige el cliente.",
      },
    ],
    cases: publishedCases(WEB_SYSTEMS_SLUG, [
      "estudios-juridicos",
      "servicio-tecnico",
      "plataforma-distribucion-mayorista",
      "mentorias",
    ]),
    faqs: [
      {
        question: "¿En qué se diferencia de comprar un sistema ya hecho?",
        answer:
          "Un sistema ya hecho te pide adaptar tu proceso a sus pantallas. Uno a medida se diseña a partir de cómo trabaja tu equipo y se conecta con lo que ya usas, como el ERP o la facturación.",
      },
      {
        question: "¿Reemplaza a nuestro ERP?",
        answer:
          "No hace falta. En los casos de distribución, el sistema nuevo se integra con el ERP y cubre lo que el ERP no resuelve, como el trabajo del vendedor en ruta o la preparación en almacén.",
      },
      {
        question: "¿Se puede empezar con una parte y crecer después?",
        answer:
          "Sí. Construimos por entregas cortas, empezando por lo más urgente. Varios sistemas del portafolio llevan años en operación y siguieron creciendo con la empresa.",
      },
    ],
  },
  {
    slug: MOBILE_APPS_SLUG,
    name: "Aplicaciones móviles",
    summary:
      "Apps para vendedores, técnicos, almacén y supervisores de obra, conectadas al sistema central de la empresa.",
    title: "Desarrollo de aplicaciones móviles para empresas en Bolivia",
    lead: "Apps para el equipo que trabaja fuera de la oficina y apps para que tus clientes pidan y sigan su pedido desde el celular, conectadas al sistema central de la empresa. Las desarrollamos desde Cochabamba.",
    metaTitle: "Desarrollo de aplicaciones móviles en Bolivia | Zékiri",
    metaDescription:
      "Apps Android e iOS para tu equipo en campo y para tus clientes, conectadas al sistema de tu empresa. Desde Cochabamba, Bolivia. Diagnóstico sin costo.",
    deliverablesHeading: "Qué tipo de apps construimos",
    deliverables: [
      {
        title: "Apps para vendedores en ruta",
        text: "Agenda de visitas, pedido con precios, descuentos y stock, cobros y estado de cuenta de cada cliente.",
      },
      {
        title: "Apps de almacén y despacho",
        text: "Preparar, embalar y despachar por roles, con lector QR del pedido, control por ítem y foto de respaldo.",
      },
      {
        title: "Apps que funcionan sin conexión",
        text: "Para obra o lugares sin señal: el equipo registra fotos, notas y estados, y la app sincroniza cuando vuelve la conexión.",
      },
      {
        title: "Apps para tus clientes",
        text: "Catálogo, compra, seguimiento del pedido y notificaciones desde el celular.",
      },
    ],
    cases: publishedCases(MOBILE_APPS_SLUG, [
      "supervision-de-obra",
      "distribucion-consumo-masivo",
      "alimentos-a-domicilio",
      "control-de-acceso",
    ]),
    faqs: [
      {
        question: "¿Android, iOS o las dos?",
        answer:
          "Depende de quién la va a usar. En el portafolio hay apps solo para Android, pensadas para el equipo de la empresa, y apps para Android e iOS cuando las usan los clientes. Lo definimos en el diagnóstico.",
      },
      {
        question: "¿La app puede funcionar sin internet?",
        answer:
          "Sí, cuando el trabajo lo necesita. En la app de supervisión de obra el equipo registra sin conexión y los datos se sincronizan con la nube después.",
      },
      {
        question: "¿Se conecta con el sistema que ya tenemos?",
        answer:
          "Sí. Las apps del portafolio están conectadas al sistema central de la empresa. En distribución, por ejemplo, el vendedor arma el pedido con el stock y el estado de cuenta reales del cliente.",
      },
    ],
  },
  {
    slug: AUTOMATION_SLUG,
    name: "Automatización e integraciones",
    summary:
      "Conectamos lo que ya usas (ERP, facturación, pagos) y automatizamos los pasos que hoy se hacen a mano, con IA donde aporta.",
    title: "Automatización de procesos e integraciones para empresas en Bolivia",
    lead: "Conectamos los sistemas que ya usas y automatizamos los pasos que hoy dependen de planillas, mensajes y memoria, con inteligencia artificial donde ahorra trabajo real. Trabajamos desde Cochabamba.",
    metaTitle: "Automatización de procesos para empresas en Bolivia | Zékiri",
    metaDescription:
      "Integramos tu ERP, facturación y pagos, y automatizamos los pasos que hoy se hacen a mano, con IA donde aporta. Empresa de software en Cochabamba, Bolivia.",
    deliverablesHeading: "Qué automatizamos y conectamos",
    deliverables: [
      {
        title: "Integración con tu ERP",
        text: "Ventas, cobranzas y facturas sincronizadas, para que el sistema y el ERP muestren los mismos datos.",
      },
      {
        title: "Flujos con etapas y responsables",
        text: "Cada pedido, reparación o solicitud avanza por estados con su plazo y su responsable, en vez de depender de que alguien se acuerde.",
      },
      {
        title: "Avisos automáticos",
        text: "El cliente y el equipo se enteran cuando algo cambia de estado: por correo, en la plataforma o con una notificación en el celular.",
      },
      {
        title: "Soporte con IA",
        text: "Un agente con base de conocimiento que responde lo frecuente y deriva al equipo lo que no puede resolver.",
      },
    ],
    cases: publishedCases(AUTOMATION_SLUG, [
      "plataforma-distribucion-mayorista",
      "distribucion-consumo-masivo",
      "servicio-tecnico",
      "mentorias",
    ]),
    faqs: [
      {
        question: "¿Qué procesos conviene automatizar primero?",
        answer:
          "Los que se repiten todos los días y hoy dependen de planillas, mensajes o de la memoria de alguien. En el diagnóstico medimos dónde están los cuellos de botella y empezamos por ahí.",
      },
      {
        question: "¿Hay que cambiar el ERP o el sistema de facturación?",
        answer:
          "No. Nos conectamos con lo que ya usas. En los casos de distribución, las ventas, cobranzas y facturas se sincronizan con el ERP en vez de reemplazarlo.",
      },
      {
        question: "¿Dónde usan inteligencia artificial?",
        answer:
          "Donde ahorra trabajo real. En la plataforma de distribución mayorista hay un agente de soporte con IA y base de conocimiento, que deriva al equipo lo que no resuelve.",
      },
    ],
  },
];
