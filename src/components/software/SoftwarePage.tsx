import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  Check,
  ChevronDown,
  ClipboardCheck,
  Database,
  Headphones,
  LayoutTemplate,
  Monitor,
  Plug,
  Search,
  Smartphone,
  Star,
  Webhook,
  X,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Datos de página (contenido)
// -----------------------------------------------------------------------------

const BRAND_LOGOS = [
  "centroMovil.svg",
  "clicket.webp",
  "cocredito.png",
  "dud.jpg",
  "arrieta.png",
  "kovar.jpg",
  "panalfresh.png",
  "nume",
  "pista8.png",
  "qfix.jpg",
  "kumi.png",
  "softruck.png",
  "nume.svg",
] as const;

const TESTIMONIALS = [
  {
    quote:
      '"Reducimos 35% el tiempo operativo en 6 meses sin interrumpir el negocio."',
    author: "— COO, CM Autopartes",
  },
  {
    quote:
      '"Integraron nuestro ERP legacy sin API oficial y eliminamos duplicación de datos."',
    author: "— Founder, Retail",
  },
  {
    quote:
      '"Obtuvimos ROI en el primer año y mejoramos disponibilidad del sistema a 99.9%."',
    author: "— Founder, Startup B2B",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "¿Se puede integrar un sistema sin API oficial?",
    answer:
      "Sí, mediante conectores personalizados y arquitectura técnica especializada.",
  },
  {
    question: "¿Se pierden datos durante la migración?",
    answer: "No. Implementamos validación paralela y control de integridad.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Empresas reportan beneficios medibles en 12–18 meses.",
  },
  {
    question: "¿Es necesario reemplazar todo el sistema actual?",
    answer: "No. Integramos progresivamente lo que ya funciona.",
  },
] as const;

const PROCESS_STEPS: readonly {
  icon: LucideIcon;
  stepLabel: string;
  title: string;
}[] = [
  { icon: Search, stepLabel: "Paso 1", title: "Auditoría técnica" },
  { icon: LayoutTemplate, stepLabel: "Paso 2", title: "Diseño arquitectura" },
  { icon: Webhook, stepLabel: "Paso 3", title: "Integración APIs" },
  { icon: ArrowRightLeft, stepLabel: "Paso 4", title: "Migración faseada" },
  { icon: ClipboardCheck, stepLabel: "Paso 5", title: "Validación paralela" },
  { icon: Headphones, stepLabel: "Paso 6", title: "Soporte continuo" },
];

const SOLUTION_CARDS = [
  {
    icon: Plug,
    title: "Integración total incluso sin API oficial",
    description:
      "Conectamos sistemas legacy mediante APIs personalizadas o conectores técnicos seguros.",
  },
  {
    icon: Database,
    title: "Migración sin pérdida de datos críticos",
    description:
      "Modernizamos sistemas heredados y migramos Excel críticos sin interrumpir operaciones.",
  },
  {
    icon: Monitor,
    title: "Aplicaciones web que realmente usan tus equipos",
    description:
      "Desarrollamos aplicaciones web internas alineadas a tus flujos operativos reales.",
  },
  {
    icon: Smartphone,
    title: "Mobile (iOS/Android) integrado a tu operación actual",
    description:
      "Aplicaciones móviles conectadas a tu ERP o sistema interno para seguimiento en tiempo real.",
  },
] as const;

const STATS = [
  {
    value: "2.5X",
    caption: "Crecimiento en ingresos en empresas altamente integradas",
  },
  {
    value: "288-362%",
    caption: "ROI reportado en programas de modernización",
  },
  {
    value: "30-50%",
    caption: "Mejora de eficiencia operativa",
  },
] as const;

const INCLUYE_ITEMS = [
  "Auditoría de datos y arquitectura actual",
  "Roadmap estratégico",
  "Integración progresiva",
  "Validación antes de corte final",
  "Capacitación de equipos",
  "Soporte post implementación",
] as const;

// -----------------------------------------------------------------------------
// Utilidad: CSS inline desde string (export Figma)
// -----------------------------------------------------------------------------

function s(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of css.split(";")) {
    const trimmed = decl.trim();
    if (!trimmed) continue;
    const colon = trimmed.indexOf(":");
    if (colon === -1) continue;
    const prop = trimmed.slice(0, colon).trim();
    const val = trimmed.slice(colon + 1).trim();
    const camel = prop.replace(/-([a-z])/gi, (_: string, letter: string) =>
      letter.toUpperCase()
    );
    out[camel] = val;
  }
  return out as CSSProperties;
}

// -----------------------------------------------------------------------------
// Piezas reutilizables
// -----------------------------------------------------------------------------

function FiveStars() {
  const gold = "#F7C95C";
  return (
    <div
      style={s(
        `align-self: stretch; min-height: 16px; justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex`
      )}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={15} strokeWidth={1.5} fill={gold} color={gold} aria-hidden />
      ))}
    </div>
  );
}

function IconSlot24({ children }: { children: ReactNode }) {
  return (
    <div
      style={s(
        `width: 24px; height: 24px; display: flex; flex-shrink: 0; align-items: center; justify-content: center`
      )}
    >
      {children}
    </div>
  );
}

function IconSlot48({ children }: { children: ReactNode }) {
  return (
    <div
      style={s(
        `width: 48px; height: 48px; display: flex; flex-shrink: 0; align-items: center; justify-content: center`
      )}
    >
      {children}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const chevronWrap = s(
    `width: 40px; height: 40px; display: flex; flex-shrink: 0; align-items: center; justify-content: center`
  );
  return (
    <div
      style={s(
        `width: 100%; max-width: 1440px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex`
        )}
      >
        <div
          style={s(
            `align-self: stretch; padding: 1px; background: var(--Color-Background-White, white); overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex`
          )}
        >
          <div
            style={s(
              `align-self: stretch; padding-top: 32px; padding-left: 32px; padding-right: 32px; justify-content: space-between; align-items: flex-start; display: inline-flex`
            )}
          >
            <div
              style={s(
                `flex: 1 1 0; padding-bottom: 32px; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex; flex-wrap: wrap; align-content: flex-start`
              )}
            >
              <div
                style={s(
                  `flex: 1 1 0; color: var(--Color-Text-Primary, #2E3D4D); font-size: 28px; font-family: Plus Jakarta Sans; font-weight: 600; line-height: 36px; word-wrap: break-word`
                )}
              >
                {question}
              </div>
            </div>
            <div style={chevronWrap}>
              <ChevronDown size={26} strokeWidth={2} color="#2E3D4D" aria-hidden />
            </div>
          </div>
          <div
            style={s(
              `align-self: stretch; padding-left: 32px; padding-right: 32px; border-radius: 15px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex`
            )}
          >
            <div
              style={s(
                `align-self: stretch; height: 1px; position: relative; background: var(--Color-Icons-Blue, #52B1E1); border-radius: 33554400px`
              )}
            />
            <div
              style={s(
                `align-self: stretch; padding-bottom: 32px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex; flex-wrap: wrap; align-content: center`
              )}
            >
              <div
                style={s(
                  `flex: 1 1 0; color: var(--Color-Text-Primary, #2E3D4D); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
                )}
              >
                {answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessStepCard({
  icon: Icon,
  stepLabel,
  title,
}: {
  icon: LucideIcon;
  stepLabel: string;
  title: string;
}) {
  return (
    <div
      style={s(
        `width: 250px; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
      )}
    >
      <IconSlot48>
        <Icon size={28} strokeWidth={2} color="#52B1E1" aria-hidden />
      </IconSlot48>
      <div
        style={s(
          `align-self: stretch; padding-left: 134px; padding-right: 134px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `text-align: center; color: var(--Color-Text-Secondary, #848D8F); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
          )}
        >
          {stepLabel}
        </div>
      </div>
      <div
        style={s(
          `align-self: stretch; padding-left: 23px; padding-right: 23px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `width: 279px; text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
          )}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Secciones (orden = orden en pantalla)
// -----------------------------------------------------------------------------

function SectionTopBar() {
  return (
    <div
      style={s(
        `align-self: stretch; height: 90px; padding-left: 120px; padding-right: 120px; padding-top: 10px; padding-bottom: 10px; background: var(--Plomo-primario, #2E3D4D); justify-content: space-between; align-items: center; display: inline-flex; flex-wrap: wrap; align-content: center`
      )}
    >
      <a href="/" style={s(`display: flex; align-items: center`)}>
        <img
          style={s(`width: 100px; height: 35px; object-fit: contain`)}
          src="/assets/logo-w.png"
          alt="Zékiri"
          width={100}
          height={35}
        />
      </a>
      <div
        style={s(
          `padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--Color-CTA-Blue, #52B1E1); border-radius: 12px; justify-content: center; align-items: center; gap: 10px; display: flex`
        )}
      >
        <div
          style={s(
            `color: var(--Color-Text-CTA, white); font-size: 16px; font-family: Open Sans; font-weight: 600; line-height: 20px; word-wrap: break-word`
          )}
        >
          Agendar llamada
        </div>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 160px; padding-bottom: 160px; background-image: url(https://placehold.co/1440x704); flex-direction: column; justify-content: center; align-items: center; gap: 32px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; text-align: center; justify-content: center; display: flex; flex-direction: column`
        )}
      >
        <span
          style={s(
            `color: var(--Color-Text-Primary, #2E3D4D); font-size: 56px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 64px; word-wrap: break-word`
          )}
        >
          Moderniza tus sistemas legacy<br />
          y reduce hasta{" "}
        </span>
        <span
          style={s(
            `color: var(--Color-Text-Link, #52B1E1); font-size: 56px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 64px; word-wrap: break-word`
          )}
        >
          50%
        </span>
        <span
          style={s(
            `color: var(--Color-Text-Primary, #2E3D4D); font-size: 56px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 64px; word-wrap: break-word`
          )}
        >
          {" "}
          tus costos<br />
          operativos sin detener tu operación{" "}
        </span>
      </div>
      <div
        style={s(
          `align-self: stretch; padding: 10px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--Color-Text-Primary, #2E3D4D); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
          )}
        >
          Diseñamos Web Applications, Mobile (iOS/Android) y APIs para empresas enterprise que
          necesitan escalar,
          <br />
          eliminar procesos manuales y proteger datos críticos — con ROI reportado de hasta 362%.
        </div>
      </div>
      <div
        style={s(
          `padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--Color-CTA-Yellow, #F7C95C); border-radius: 12px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `color: var(--Color-Text-CTA-accent, #2E3D4D); font-size: 16px; font-family: Open Sans; font-weight: 600; line-height: 20px; word-wrap: break-word`
          )}
        >
          Agendar diagnóstico gratuito
        </div>
      </div>
    </div>
  );
}

function SectionTrustLogos() {
  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Color-Background-White, white); flex-direction: column; justify-content: center; align-items: center; gap: 32px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `width: 1280px; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--Color-Text-Secondary, #848D8F); font-size: 16px; font-family: Open Sans; font-weight: 400; line-height: 24px; word-wrap: break-word`
          )}
        >
          Empresas que ya confiaron en Zékiri
        </div>
      </div>
      <div
        style={s(
          `width: 100%; max-width: 1440px; min-width: 390px; padding-top: 30px; padding-bottom: 30px; justify-content: center; align-items: center; gap: 40px; row-gap: 24px; display: flex; flex-wrap: wrap; align-content: center`
        )}
      >
        {BRAND_LOGOS.map((name) => (
          <div
            key={name}
            style={s(`height: 48px; display: flex; align-items: center; justify-content: center`)}
          >
            <img
              src={`/assets/brands/${name}`}
              alt=""
              style={s(
                `max-height: 48px; max-width: 160px; width: auto; object-fit: contain; filter: grayscale(100%) brightness(0.85) contrast(1.1)`
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTestimonials() {
  const card = s(
    `width: 320px; padding: 24px; background: var(--Color-Background-White, white); border-radius: 14px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex`
  );
  const quoteWrap = s(`align-self: stretch; justify-content: center; align-items: center; display: inline-flex`);
  const quoteText = s(
    `flex: 1 1 0; color: var(--Color-Text-Primary, #2E3D4D); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
  );
  const footer = s(
    `align-self: stretch; height: 60px; padding-top: 8px; padding-bottom: 8px; border-top: 1px var(--Color-Text-Secondary, #848D8F) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex`
  );
  const author = s(
    `align-self: stretch; color: var(--Color-Text-Secondary, #848D8F); font-size: 14px; font-family: Open Sans; font-weight: 400; line-height: 20px; word-wrap: break-word`
  );

  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Color-Background-Default, #F1F3F4); flex-direction: column; justify-content: center; align-items: center; gap: 80px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; padding: 10px; justify-content: center; align-items: center; gap: 10px; display: inline-flex; flex-wrap: wrap; align-content: center`
        )}
      >
        <div
          style={s(
            `flex: 1 1 0; text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 40px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 48px; word-wrap: break-word`
          )}
        >
          Modernización con impacto medible y bajo riesgo
        </div>
      </div>

      <div
        style={s(
          `align-self: stretch; justify-content: center; align-items: flex-start; gap: 32px; display: inline-flex; flex-wrap: wrap; align-content: flex-start`
        )}
      >
        {TESTIMONIALS.map((t) => (
          <div key={t.author} style={card}>
            <div style={quoteWrap}>
              <div style={quoteText}>{t.quote}</div>
            </div>
            <div style={footer}>
              <div style={author}>{t.author}</div>
              <FiveStars />
            </div>
          </div>
        ))}
      </div>

      <div
        style={s(
          `padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--Color-CTA-White, white); border-radius: 12px; outline: 1px var(--Color-Icons-Default, #2E3D4D) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `color: var(--Color-Text-CTA-accent, #2E3D4D); font-size: 16px; font-family: Open Sans; font-weight: 600; line-height: 20px; word-wrap: break-word`
          )}
        >
          Ver más casos de éxito
        </div>
      </div>
    </div>
  );
}

function SectionProblemSolution() {
  const row = s(
    `align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex`
  );
  const body = s(
    `flex: 1 1 0; color: var(--Color-Text-Primary, #2E3D4D); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
  );
  const bodyInverse = s(
    `flex: 1 1 0; color: var(--Color-Text-Inverse, white); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
  );

  const painPoints = [
    "70% del presupuesto TI en mantenimiento legacy",
    "Procesos manuales con errores recurrentes",
    "Sistemas aislados sin interoperabilidad",
  ];
  const helpPoints = [
    "Integración completa mediante APIs",
    "Automatización que reduce tareas repetitivas hasta 50%",
    <>
      Arquitectura preparada para crecer sin duplicar
      <br />
      costos
    </>,
  ];

  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Color-Background-White, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 80px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex`
        )}
      >
        <div
          style={s(
            `align-self: stretch; padding: 10px; justify-content: center; align-items: center; gap: 10px; display: inline-flex; flex-wrap: wrap; align-content: center`
          )}
        >
          <div
            style={s(
              `flex: 1 1 0; text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 40px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 48px; word-wrap: break-word`
            )}
          >
            Si estás obligado a mantener sistemas costosos y procesos manuales, considera integrar
            todos tus sistemas en una arquitectura escalable
          </div>
        </div>
      </div>

      <div
        style={s(
          `align-self: stretch; justify-content: center; align-items: flex-start; gap: 32px; display: inline-flex; flex-wrap: wrap; align-content: flex-start`
        )}
      >
        <div
          style={s(
            `width: 500px; height: 272px; padding: 30px; background: var(--Color-Background-Default, #F1F3F4); border-radius: 15px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex`
          )}
        >
          <div
            style={s(
              `align-self: stretch; color: var(--Color-Text-Primary, #2E3D4D); font-size: 28px; font-family: Plus Jakarta Sans; font-weight: 600; line-height: 36px; word-wrap: break-word`
            )}
          >
            Si hoy tienes:
          </div>
          {painPoints.map((text) => (
            <div key={text} style={row}>
              <IconSlot24>
                <X size={18} strokeWidth={2.5} color="#2E3D4D" aria-hidden />
              </IconSlot24>
              <div style={body}>{text}</div>
            </div>
          ))}
        </div>

        <div
          style={s(
            `width: 500px; padding: 24px; background: var(--Color-Background-Inverse-Gray, #2E3D4D); border-radius: 15px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex`
          )}
        >
          <div
            style={s(
              `align-self: stretch; color: var(--Color-Icons-Accent, #F7C95C); font-size: 28px; font-family: Plus Jakarta Sans; font-weight: 600; line-height: 36px; word-wrap: break-word`
            )}
          >
            Te ayudamos con:
          </div>
          {helpPoints.map((content, i) => (
            <div key={i} style={row}>
              <IconSlot24>
                <Check size={18} strokeWidth={2.5} color="#F7C95C" aria-hidden />
              </IconSlot24>
              <div style={bodyInverse}>{content}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={s(
          `padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--Color-CTA-Blue, #52B1E1); border-radius: 12px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `color: var(--Color-Text-CTA, white); font-size: 16px; font-family: Open Sans; font-weight: 600; line-height: 20px; word-wrap: break-word`
          )}
        >
          Evaluar mi arquitectura actual
        </div>
      </div>
    </div>
  );
}

function SectionSolutions() {
  const card = s(
    `width: 500px; padding: 35px; background: var(--Color-Background-White, white); border-radius: 15px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex`
  );
  const titleStyle = s(
    `color: var(--Color-Text-Primary, #2E3D4D); font-size: 28px; font-family: Plus Jakarta Sans; font-weight: 600; line-height: 36px; word-wrap: break-word`
  );
  const spacer = s(`color: #2E3F51; font-size: 18px; font-family: Inter; font-weight: 400; line-height: 28px; word-wrap: break-word`);
  const desc = s(
    `color: var(--Color-Text-Secondary, #848D8F); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
  );

  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Color-Background-Default, #F1F3F4); flex-direction: column; justify-content: flex-start; align-items: center; gap: 80px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex`
        )}
      >
        <div
          style={s(
            `align-self: stretch; padding: 10px; justify-content: center; align-items: center; gap: 10px; display: inline-flex; flex-wrap: wrap; align-content: center`
          )}
        >
          <div
            style={s(
              `flex: 1 1 0; text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 40px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 48px; word-wrap: break-word`
            )}
          >
            Soluciones que conectan tu operación actual
            <br />
            sin reemplazarla abruptamente
          </div>
        </div>
      </div>

      <div
        style={s(
          `align-self: stretch; justify-content: center; align-items: flex-start; gap: 32px; display: inline-flex; flex-wrap: wrap; align-content: flex-start`
        )}
      >
        {SOLUTION_CARDS.map(({ icon: Icon, title, description }) => (
          <div key={title} style={card}>
            <IconSlot24>
              <Icon size={22} strokeWidth={2} color="#52B1E1" aria-hidden />
            </IconSlot24>
            <div style={s(`align-self: stretch`)}>
              <span style={titleStyle}>
                {title}
                <br />
              </span>
              <span style={spacer}>
                <br />
              </span>
              <span style={desc}>{description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionStats() {
  const col = s(
    `width: 300px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex`
  );
  const value = s(
    `align-self: stretch; text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 48px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 64px; word-wrap: break-word`
  );
  const caption = s(
    `flex: 1 1 0; text-align: center; color: var(--Color-Text-Secondary, #848D8F); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
  );

  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Color-Background-White, white); flex-direction: column; justify-content: flex-start; align-items: center; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; display: flex`
        )}
      >
        <div
          style={s(
            `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex`
          )}
        >
          <div
            style={s(
              `align-self: stretch; padding: 10px; justify-content: center; align-items: center; gap: 10px; display: inline-flex; flex-wrap: wrap; align-content: center`
            )}
          >
            <div
              style={s(
                `flex: 1 1 0; text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 40px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 48px; word-wrap: break-word`
              )}
            >
              Beneficios medibles en 12 a 18 meses
            </div>
          </div>
        </div>
      </div>

      <div
        style={s(
          `align-self: stretch; padding-top: 80px; justify-content: center; align-items: flex-start; gap: 120px; display: inline-flex; flex-wrap: wrap; align-content: flex-start`
        )}
      >
        {STATS.map((item) => (
          <div key={item.value} style={col}>
            <div
              style={s(
                `align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: flex`
              )}
            >
              <div style={value}>{item.value}</div>
            </div>
            <div
              style={s(
                `align-self: stretch; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
              )}
            >
              <div style={caption}>{item.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionKpiCtaBand() {
  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Plomo-primario, #2E3D4D); flex-direction: column; justify-content: center; align-items: center; gap: 43px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; text-align: center; color: var(--Color-Text-Inverse, white); font-size: 48px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 64px; word-wrap: break-word`
        )}
      >
        Diseñamos sistemas que se integran a tus procesos y optimizan tus KPIs operativos
      </div>
      <div
        style={s(
          `align-self: stretch; padding-left: 22px; padding-right: 22px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `flex: 1 1 0; text-align: center; color: var(--Color-Text-Inverse, white); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
          )}
        >
          Solicita un diagnóstico técnico estructurado para identificar riesgos, oportunidades de
          integración y plan de modernización.
        </div>
      </div>
      <div
        style={s(
          `padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--Color-CTA-Yellow, #F7C95C); border-radius: 12px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `color: var(--Color-Text-CTA-accent, #2E3D4D); font-size: 16px; font-family: Open Sans; font-weight: 600; line-height: 20px; word-wrap: break-word`
          )}
        >
          Agendar diagnóstico gratuito
        </div>
      </div>
    </div>
  );
}

function SectionProcessAndIncludes() {
  const checkRow = s(
    `align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex`
  );
  const checkText = s(
    `flex: 1 1 0; color: var(--Color-Text-Primary, #2E3D4D); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
  );
  const col1 = INCLUYE_ITEMS.slice(0, 3);
  const col2 = INCLUYE_ITEMS.slice(3);

  return (
    <div
      style={s(
        `padding-bottom: 80px; align-self: stretch; background: var(--Color-Background-White, white); flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; padding-top: 80px; padding-left: 120px; padding-right: 120px; flex-direction: column; justify-content: flex-start; align-items: center; display: flex`
        )}
      >
        <div
          style={s(
            `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex`
          )}
        >
          <div
            style={s(
              `align-self: stretch; padding: 10px; justify-content: center; align-items: center; gap: 10px; display: inline-flex; flex-wrap: wrap; align-content: center`
            )}
          >
            <div
              style={s(
                `flex: 1 1 0; text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 40px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 48px; word-wrap: break-word`
              )}
            >
              Proceso estructurado para modernizar sin riesgo
            </div>
          </div>
        </div>
      </div>

      <div
        style={s(
          `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; justify-content: center; align-items: center; gap: 120px; display: inline-flex; flex-wrap: wrap; align-content: center`
        )}
      >
        {PROCESS_STEPS.map((step) => (
          <ProcessStepCard
            key={step.title}
            icon={step.icon}
            stepLabel={step.stepLabel}
            title={step.title}
          />
        ))}

      
      </div>
      <div
          style={s(
            `margin: 0 auto; width: 840px; padding: 24px; background: var(--Color-Background-Default, #F1F3F4); border-radius: 15px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex`
          )}
        >
          <div
            style={s(
              `align-self: stretch; text-align: center; color: var(--Color-Text-Link, #52B1E1); font-size: 28px; font-family: Plus Jakarta Sans; font-weight: 600; line-height: 36px; word-wrap: break-word`
            )}
          >
            Incluye
          </div>
          <div
            style={s(
              `align-self: stretch; justify-content: center; align-items: flex-start; gap: 32px; display: inline-flex`
            )}
          >
            <div
              style={s(
                `flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex`
              )}
            >
              {col1.map((label) => (
                <div key={label} style={checkRow}>
                  <IconSlot24>
                    <Check size={18} strokeWidth={2.5} color="#52B1E1" aria-hidden />
                  </IconSlot24>
                  <div style={checkText}>{label}</div>
                </div>
              ))}
            </div>
            <div
              style={s(
                `flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex`
              )}
            >
              {col2.map((label) => (
                <div key={label} style={checkRow}>
                  <IconSlot24>
                    <Check size={18} strokeWidth={2.5} color="#52B1E1" aria-hidden />
                  </IconSlot24>
                  <div style={checkText}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

function SectionFaq() {
  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Color-Background-Default, #F1F3F4); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 80px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 16px; display: flex`
        )}
      >
        <div
          style={s(
            `align-self: stretch; padding-left: 181px; padding-right: 181px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
          )}
        >
          <div
            style={s(
              `text-align: center; color: var(--Color-Text-Primary, #2E3D4D); font-size: 40px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 48px; word-wrap: break-word`
            )}
          >
            Preguntas frecuentes
          </div>
        </div>
      </div>

      <div
        style={s(
          `align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex`
        )}
      >
        {FAQ_ITEMS.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function SectionClosingCta() {
  return (
    <div
      style={s(
        `align-self: stretch; padding-left: 120px; padding-right: 120px; padding-top: 80px; padding-bottom: 80px; background: var(--Plomo-primario, #2E3D4D); flex-direction: column; justify-content: center; align-items: center; gap: 43px; display: flex`
      )}
    >
      <div
        style={s(
          `align-self: stretch; text-align: center; color: var(--Color-Text-Inverse, white); font-size: 40px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 48px; word-wrap: break-word`
        )}
      >
        Moderniza hoy para reducir costos mañana
      </div>
      <div
        style={s(
          `align-self: stretch; padding-left: 22px; padding-right: 22px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `flex: 1 1 0; text-align: center; color: var(--Color-Text-Inverse, white); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
          )}
        >
          Cada año que retrasas la modernización incrementa costos y riesgo operativo entre 10–15%.
          <br />
          Evalúa tu arquitectura actual y descubre el potencial de ahorro y eficiencia.
        </div>
      </div>
      <div
        style={s(
          `padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--Color-CTA-Yellow, #F7C95C); border-radius: 12px; justify-content: center; align-items: center; gap: 10px; display: inline-flex`
        )}
      >
        <div
          style={s(
            `color: var(--Color-Text-CTA-accent, #2E3D4D); font-size: 16px; font-family: Open Sans; font-weight: 600; line-height: 20px; word-wrap: break-word`
          )}
        >
          Agendar diagnóstico gratuito
        </div>
      </div>
    </div>
  );
}

function SectionFooter() {
  return (
    <div
      style={s(
        `align-self: stretch; padding-top: 50px; padding-bottom: 50px; background: var(--Color-Background-White, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 10px; display: flex`
      )}
    >
      <a href="/" style={s(`display: flex; align-items: center`)}>
        <img
          style={s(`width: 100px; height: 34px; object-fit: contain`)}
          src="/assets/logo.png"
          alt="Zékiri"
          width={100}
          height={34}
        />
      </a>
      <div
        style={s(
          `color: var(--Color-Text-Secondary, #848D8F); font-size: 18px; font-family: Open Sans; font-weight: 400; line-height: 28px; word-wrap: break-word`
        )}
      >
        Make it matter
      </div>
      <div
        style={s(
          `width: 100%; max-width: 1440px; padding-left: 50px; padding-right: 50px; padding-top: 5px; padding-bottom: 5px; border-top: 1px var(--Color-Icons-Blue, #52B1E1) solid; flex-direction: column; justify-content: center; align-items: center; display: flex`
        )}
      >
        <div
          style={s(
            `align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex`
          )}
        >
          <div
            style={s(
              `flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex`
            )}
          >
            <div
              style={s(
                `width: 311px; color: var(--Color-Text-Secondary, #848D8F); font-size: 14px; font-family: Open Sans; font-weight: 400; line-height: 20px; word-wrap: break-word`
              )}
            >
              © 2026 Zékiri. Todos los derechos reservados.
            </div>
          </div>
          <div
            style={s(
              `width: 321.38px; justify-content: flex-end; align-items: flex-start; gap: 24px; display: flex`
            )}
          >
            <div style={s(`width: 141.58px; height: 21px; position: relative`)}>
              <div
                style={s(
                  `left: 0px; top: 0px; position: absolute; color: var(--Color-Text-Secondary, #848D8F); font-size: 14px; font-family: Open Sans; font-weight: 400; line-height: 20px; word-wrap: break-word`
                )}
              >
                Política de privacidad
              </div>
            </div>
            <div style={s(`flex: 1 1 0; height: 21px; position: relative`)}>
              <div
                style={s(
                  `left: 0px; top: 0px; position: absolute; color: var(--Color-Text-Secondary, #848D8F); font-size: 14px; font-family: Open Sans; font-weight: 400; line-height: 20px; word-wrap: break-word`
                )}
              >
                Términos y condiciones
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Página
// -----------------------------------------------------------------------------

export function SoftwarePage() {
  return (
    <div
      style={s(
        `width: 100%; height: 100%; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-end; display: inline-flex`
      )}
    >
      <SectionTopBar />
      <SectionHero />
      <SectionTrustLogos />
      <SectionTestimonials />
      <SectionProblemSolution />
      <SectionSolutions />
      <SectionStats />
      <SectionKpiCtaBand />
      <SectionProcessAndIncludes />
      <SectionFaq />
      <SectionClosingCta />
      <SectionFooter />
    </div>
  );
}
