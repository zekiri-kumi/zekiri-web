import { COMPANY_CITY, COMPANY_COUNTRY, COMPANY_PHONE } from "@/lib/company";
import { ALL_PROJECTS, PROJECTS, type Project } from "@/lib/proyectos-content";

export const CONTACT_LOCATION = `${COMPANY_CITY}, ${COMPANY_COUNTRY}`;

/** WhatsApp number in international format without "+", as wa.me expects it. */
const WHATSAPP_NUMBER = COMPANY_PHONE.replace("+", "");
const WHATSAPP_GREETING = "Hola, quiero agendar un diagnóstico.";

export const CONTACT_WHATSAPP = {
  label: "+591 78337841",
  href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`,
} as const;

function projectBySlug(slug: string): Project {
  const project = ALL_PROJECTS.find((candidate) => candidate.slug === slug);
  if (!project) throw new Error(`home-content: unknown project slug "${slug}"`);
  return project;
}

/** For the slots that have no substitute: hiding the case they point to must fail the build. */
function publishedProjectBySlug(slug: string): Project {
  const project = projectBySlug(slug);
  if (project.hidden) throw new Error(`home-content: project "${slug}" is hidden but the home uses it`);
  return project;
}

/** Case shown next to the hero headline. */
export const HERO_PROJECT = publishedProjectBySlug("plataforma-distribucion-mayorista");

const FEATURED_COUNT = 4;

/** Candidates for the home cards, in priority order. A hidden case is skipped and the next one takes its slot. */
const FEATURED_SLUGS = [
  "tratamientos-cronicos",
  "distribucion-consumo-masivo",
  "estudios-juridicos",
  "credito-e-inversion",
  "servicio-tecnico",
];

/** Cases shown as cards on the home, in this order. */
export const FEATURED_PROJECTS: readonly Project[] = FEATURED_SLUGS.map(projectBySlug)
  .filter((project) => !project.hidden)
  .slice(0, FEATURED_COUNT);

/** Every case that is neither in the hero nor in a card, listed as text links. */
export const OTHER_PROJECTS: readonly Project[] = PROJECTS.filter(
  (project) => project !== HERO_PROJECT && !FEATURED_PROJECTS.includes(project),
);

export type ClientLogo = {
  name: string;
  src: string;
  /** Tile background the artwork was drawn for. Defaults to light. */
  tone?: "dark";
  /** Scale factor for files that ship with empty space around the artwork. */
  zoom?: number;
};

export const CLIENT_LOGOS: readonly ClientLogo[] = [
  { name: "Nume", src: "/assets/brands/nume.svg" },
  { name: "Cocredito", src: "/assets/brands/cocredito.png" },
  { name: "Kovar Viajes", src: "/assets/brands/kovar.jpg" },
  { name: "Arrieta Darrás", src: "/assets/brands/arrieta.png" },
  { name: "Softruck", src: "/assets/brands/softruck.png", zoom: 2.4 },
  { name: "Centro Móvil", src: "/assets/brands/centroMovil.svg" },
  { name: "Pista 8", src: "/assets/brands/pista8.png", tone: "dark" },
  { name: "Panal Fresh", src: "/assets/brands/panalfresh.png", tone: "dark" },
  { name: "Clicket", src: "/assets/brands/clicket.webp", zoom: 1.5 },
  { name: "QFix", src: "/assets/brands/qfix.jpg", tone: "dark", zoom: 1.5 },
  { name: "DUD", src: "/assets/brands/dud.jpg", tone: "dark" },
];

export type Service = {
  title: string;
  text: string;
  /** Case that shows this service in a real project. */
  example: Project;
};

export const SERVICES: readonly Service[] = [
  {
    title: "Sistemas a medida",
    text: "Back office, portales de clientes y plataformas multiempresa que reemplazan las planillas y los sistemas que ya no alcanzan.",
    example: publishedProjectBySlug("estudios-juridicos"),
  },
  {
    title: "Apps para tu equipo en campo",
    text: "Apps para vendedores, técnicos, almacén y supervisores de obra, conectadas al sistema central de la empresa.",
    example: publishedProjectBySlug("supervision-de-obra"),
  },
  {
    title: "Integraciones y automatización",
    text: "Conectamos lo que ya usas (ERP, facturación, pagos) y automatizamos los pasos que hoy se hacen a mano, con IA donde aporta.",
    example: HERO_PROJECT,
  },
];

export type ProcessStep = {
  title: string;
  text: string;
};

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Diagnóstico",
    text: "Mapeamos el proceso actual con tu equipo y medimos dónde están los cuellos de botella.",
  },
  {
    title: "Diseño de la solución",
    text: "Definimos pantallas, flujos e integraciones con lo que ya usas: ERP, facturación, pagos.",
  },
  {
    title: "Implementación",
    text: "Construimos por entregas cortas, con tu equipo probando desde la primera semana.",
  },
  {
    title: "Mejora continua",
    text: "Medimos el uso real y ajustamos. El sistema crece con la empresa.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "¿Por dónde se empieza?",
    answer:
      "Por un diagnóstico sin costo. Vemos cómo trabaja tu equipo hoy, qué conviene ordenar primero y qué se puede automatizar. Recién después hablamos de qué construir.",
  },
  {
    question: "¿Trabajan con empresas de toda Bolivia?",
    answer:
      "Sí. Estamos en Cochabamba y trabajamos con empresas de cualquier ciudad del país. El diagnóstico y el seguimiento del proyecto se pueden hacer por videollamada.",
  },
  {
    question: "¿Trabajan con los sistemas que ya tenemos?",
    answer:
      "Sí. En la etapa de diseño definimos las integraciones con lo que ya usas, como el ERP, la facturación o los pagos, para que el sistema nuevo no duplique trabajo.",
  },
  {
    question: "¿Mi equipo necesita conocimientos técnicos?",
    answer:
      "No. Construimos por entregas cortas y tu equipo prueba el sistema desde la primera semana, así llega a la puesta en marcha sabiendo usarlo.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Seguimos midiendo el uso real y ajustando. Varios de los sistemas del portafolio llevan años en operación y siguen creciendo con la empresa.",
  },
  {
    question: "¿Por qué los casos no nombran a sus clientes?",
    answer:
      "Por confidencialidad. En los casos cambiamos los nombres y las pantallas muestran datos de ejemplo, pero el problema y lo que construimos son reales.",
  },
];
