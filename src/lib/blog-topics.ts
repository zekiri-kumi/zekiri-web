/**
 * Blog topics: the kind of business each article is written for. Plain data, so both the
 * server helpers and the client components can import it.
 */
export const GENERAL_TOPIC = "Para cualquier negocio";

/** Topics in the order the index shows them. */
export const BLOG_TOPICS = [
  "Distribuidoras",
  "Estudios jurídicos",
  "Crédito",
  "Servicio técnico",
  "Alimentos a domicilio",
  "Construcción",
  "Mentoría y emprendimiento",
  "Eventos",
  "Tiendas",
] as const;

export type BlogTopic = (typeof BLOG_TOPICS)[number] | typeof GENERAL_TOPIC;

const TOPIC_BY_PROJECT: Record<string, BlogTopic> = {
  "plataforma-distribucion-mayorista": "Distribuidoras",
  "distribucion-consumo-masivo": "Distribuidoras",
  "estudios-juridicos": "Estudios jurídicos",
  "credito-e-inversion": "Crédito",
  "servicio-tecnico": "Servicio técnico",
  "alimentos-a-domicilio": "Alimentos a domicilio",
  "supervision-de-obra": "Construcción",
  mentorias: "Mentoría y emprendimiento",
  "aceleradora-de-startups": "Mentoría y emprendimiento",
  "control-de-acceso": "Eventos",
  "lista-de-bodas": "Tiendas",
};

/** Topic of an article from the case it draws on; articles without a case are general. */
export function topicForProject(projectSlug: string | undefined): BlogTopic {
  if (!projectSlug) return GENERAL_TOPIC;
  const topic = TOPIC_BY_PROJECT[projectSlug];
  if (!topic) throw new Error(`No blog topic for project "${projectSlug}"; add it to TOPIC_BY_PROJECT`);
  return topic;
}

/** Position of a topic in the index; the general topic goes first. */
export function topicOrder(topic: BlogTopic): number {
  return topic === GENERAL_TOPIC ? -1 : BLOG_TOPICS.indexOf(topic);
}
