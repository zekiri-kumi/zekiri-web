import { useId, useState, type ReactNode } from "react";
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
import { cn } from "@/lib/utils";
import styles from "./SoftwarePage.module.css";

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
// Piezas reutilizables (BEM: bajo bloque softwarePage)
// -----------------------------------------------------------------------------

function FiveStars() {
  const gold = "#F7C95C";
  return (
    <div className={styles.softwarePage__starsRow}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={15} strokeWidth={1.5} fill={gold} color={gold} aria-hidden />
      ))}
    </div>
  );
}

function IconSlot24({ children }: { children: ReactNode }) {
  return <div className={styles.softwarePage__iconSlot24}>{children}</div>;
}

function IconSlot48({ children }: { children: ReactNode }) {
  return <div className={styles.softwarePage__iconSlot48}>{children}</div>;
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const headerId = useId();
  const panelId = useId();

  return (
    <div className={styles.softwarePage__faqItem}>
      <div className={styles.softwarePage__faqItemInner}>
        <div className={styles.softwarePage__faqCard}>
          <button
            type="button"
            id={headerId}
            className={cn(styles.softwarePage__faqCardHeader, styles.softwarePage__faqCardHeader_toggle)}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <div className={styles.softwarePage__faqQuestionWrap}>
              <span className={styles.softwarePage__faqQuestion}>{question}</span>
            </div>
            <div className={styles.softwarePage__faqChevronWrap}>
              <ChevronDown
                size={26}
                strokeWidth={2}
                aria-hidden
                className={cn(
                  styles.softwarePage__lucideInk,
                  styles.softwarePage__faqChevron,
                  open && styles.softwarePage__faqChevron_open
                )}
              />
            </div>
          </button>
          <div
            id={panelId}
            role="region"
            aria-labelledby={headerId}
            hidden={!open}
            className={styles.softwarePage__faqBody}
          >
            <div className={styles.softwarePage__faqDivider} />
            <div className={styles.softwarePage__faqAnswerWrap}>
              <div className={styles.softwarePage__faqAnswer}>{answer}</div>
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
    <div className={styles.softwarePage__processStep}>
      <IconSlot48>
        <Icon className={styles.softwarePage__lucideBlue} size={28} strokeWidth={2} aria-hidden />
      </IconSlot48>
      <div className={styles.softwarePage__processStepLabelWrap}>
        <div className={styles.softwarePage__processStepLabel}>{stepLabel}</div>
      </div>
      <div className={styles.softwarePage__processStepTitleWrap}>
        <div className={styles.softwarePage__processStepTitle}>{title}</div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Secciones
// -----------------------------------------------------------------------------

function SectionTopBar() {
  return (
    <div className={styles.softwarePage__topBar}>
      <a href="/" className={styles.softwarePage__brandLink}>
        <img
          className={styles.softwarePage__logoTop}
          src="/assets/logo-w.png"
          alt="Zékiri"
          width={100}
          height={35}
        />
      </a>
      <div className={cn(styles.softwarePage__cta, styles.softwarePage__cta_blue)}>
        <div className={styles.softwarePage__ctaLabel_white}>Agendar llamada</div>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className={styles.softwarePage__hero}>
      <div className={styles.softwarePage__heroTitle}>
        <span className={styles.softwarePage__heroTitleLine}>
          Moderniza tus sistemas legacy<br />
          y reduce hasta{" "}
        </span>
        <span className={styles.softwarePage__heroTitleLine_accent}>50%</span>
        <span className={styles.softwarePage__heroTitleLine}>
          {" "}
          tus costos<br />
          operativos sin detener tu operación{" "}
        </span>
      </div>
      <div className={styles.softwarePage__heroSubWrap}>
        <div className={styles.softwarePage__heroSub}>
          Diseñamos Web Applications, Mobile (iOS/Android) y APIs para empresas enterprise que
          necesitan escalar,
          <br />
          eliminar procesos manuales y proteger datos críticos — con ROI reportado de hasta 362%.
        </div>
      </div>
      <div className={cn(styles.softwarePage__cta, styles.softwarePage__cta_yellow)}>
        <div className={styles.softwarePage__ctaLabel_dark}>Agendar diagnóstico gratuito</div>
      </div>
    </div>
  );
}

function SectionTrustLogos() {
  return (
    <div className={styles.softwarePage__trust}>
      <div className={styles.softwarePage__trustHeadingRow}>
        <div className={styles.softwarePage__trustHeading}>
          Empresas que ya confiaron en Zékiri
        </div>
      </div>
      <div className={styles.softwarePage__trustGrid}>
        {BRAND_LOGOS.map((name) => (
          <div key={name} className={styles.softwarePage__trustLogoCell}>
            <img
              src={`/assets/brands/${name}`}
              alt=""
              className={styles.softwarePage__trustLogoImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTestimonials() {
  return (
    <div className={styles.softwarePage__testimonials}>
      <div className={styles.softwarePage__heading40Wrap}>
        <div className={styles.softwarePage__heading40}>
          Modernización con impacto medible y bajo riesgo
        </div>
      </div>

      <div className={styles.softwarePage__rowWrap32}>
        {TESTIMONIALS.map((t) => (
          <div key={t.author} className={styles.softwarePage__testimonialCard}>
            <div className={styles.softwarePage__testimonialQuoteWrap}>
              <div className={styles.softwarePage__testimonialQuote}>{t.quote}</div>
            </div>
            <div className={styles.softwarePage__testimonialFooter}>
              <div className={styles.softwarePage__testimonialAuthor}>{t.author}</div>
              <FiveStars />
            </div>
          </div>
        ))}
      </div>

      <div className={cn(styles.softwarePage__cta, styles.softwarePage__cta_outline)}>
        <div className={styles.softwarePage__ctaLabel_dark}>Ver más casos de éxito</div>
      </div>
    </div>
  );
}

function SectionProblemSolution() {
  const painPoints = [
    "70% del presupuesto TI en mantenimiento legacy",
    "Procesos manuales con errores recurrentes",
    "Sistemas aislados sin interoperabilidad",
  ];
  const helpPoints: ReactNode[] = [
    "Integración completa mediante APIs",
    "Automatización que reduce tareas repetitivas hasta 50%",
    <>
      Arquitectura preparada para crecer sin duplicar
      <br />
      costos
    </>,
  ];

  return (
    <div className={styles.softwarePage__problemSolution}>
      <div className={styles.softwarePage__flexColStretch}>
        <div className={styles.softwarePage__heading40Wrap}>
          <div className={styles.softwarePage__heading40}>
            Si estás obligado a mantener sistemas costosos y procesos manuales, considera integrar
            todos tus sistemas en una arquitectura escalable
          </div>
        </div>
      </div>

      <div className={styles.softwarePage__rowWrap32}>
        <div className={styles.softwarePage__painCard}>
          <div className={styles.softwarePage__painTitle}>Si hoy tienes:</div>
          {painPoints.map((text) => (
            <div key={text} className={styles.softwarePage__listRow}>
              <IconSlot24>
                <X className={styles.softwarePage__lucideInk} size={18} strokeWidth={2.5} aria-hidden />
              </IconSlot24>
              <div className={styles.softwarePage__textBody}>{text}</div>
            </div>
          ))}
        </div>

        <div className={styles.softwarePage__helpCard}>
          <div className={styles.softwarePage__helpTitle}>Te ayudamos con:</div>
          {helpPoints.map((content, i) => (
            <div key={i} className={styles.softwarePage__listRow}>
              <IconSlot24>
                <Check className={styles.softwarePage__lucideYellow} size={18} strokeWidth={2.5} aria-hidden />
              </IconSlot24>
              <div className={styles.softwarePage__textBodyInverse}>{content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(styles.softwarePage__cta, styles.softwarePage__cta_blue)}>
        <div className={styles.softwarePage__ctaLabel_white}>Evaluar mi arquitectura actual</div>
      </div>
    </div>
  );
}

function SectionSolutions() {
  return (
    <div className={styles.softwarePage__solutions}>
      <div className={styles.softwarePage__flexColStretch}>
        <div className={styles.softwarePage__heading40Wrap}>
          <div className={styles.softwarePage__heading40}>
            Soluciones que conectan tu operación actual
            <br />
            sin reemplazarla abruptamente
          </div>
        </div>
      </div>

      <div className={styles.softwarePage__rowWrap32}>
        {SOLUTION_CARDS.map(({ icon: Icon, title, description }) => (
          <div key={title} className={styles.softwarePage__solutionCard}>
            <IconSlot24>
              <Icon className={styles.softwarePage__lucideBlue} size={22} strokeWidth={2} aria-hidden />
            </IconSlot24>
            <div className={styles.softwarePage__stretch}>
              <span className={styles.softwarePage__solutionTitle}>
                {title}
                <br />
              </span>
              <span className={styles.softwarePage__solutionSpacer}>
                <br />
              </span>
              <span className={styles.softwarePage__solutionDesc}>{description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionStats() {
  return (
    <div className={styles.softwarePage__stats}>
      <div className={styles.softwarePage__statsHeaderStack}>
        <div className={styles.softwarePage__flexColStretch}>
          <div className={styles.softwarePage__heading40Wrap}>
            <div className={styles.softwarePage__heading40}>
              Beneficios medibles en 12 a 18 meses
            </div>
          </div>
        </div>
      </div>

      <div className={styles.softwarePage__statsGrid}>
        {STATS.map((item) => (
          <div key={item.value} className={styles.softwarePage__statCol}>
            <div className={styles.softwarePage__statValueWrap}>
              <div className={styles.softwarePage__statValue}>{item.value}</div>
            </div>
            <div className={styles.softwarePage__statCaptionRow}>
              <div className={styles.softwarePage__statCaption}>{item.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionKpiCtaBand() {
  return (
    <div className={styles.softwarePage__kpiBand}>
      <div className={styles.softwarePage__kpiTitle}>
        Diseñamos sistemas que se integran a tus procesos y optimizan tus KPIs operativos
      </div>
      <div className={styles.softwarePage__kpiSubWrap}>
        <div className={styles.softwarePage__kpiSub}>
          Solicita un diagnóstico técnico estructurado para identificar riesgos, oportunidades de
          integración y plan de modernización.
        </div>
      </div>
      <div className={cn(styles.softwarePage__cta, styles.softwarePage__cta_yellow)}>
        <div className={styles.softwarePage__ctaLabel_dark}>Agendar diagnóstico gratuito</div>
      </div>
    </div>
  );
}

function SectionProcessAndIncludes() {
  const col1 = INCLUYE_ITEMS.slice(0, 3);
  const col2 = INCLUYE_ITEMS.slice(3);

  return (
    <div className={styles.softwarePage__process}>
      <div className={styles.softwarePage__processIntro}>
        <div className={styles.softwarePage__flexColStretch}>
          <div className={styles.softwarePage__heading40Wrap}>
            <div className={styles.softwarePage__heading40}>
              Proceso estructurado para modernizar sin riesgo
            </div>
          </div>
        </div>
      </div>

      <div className={styles.softwarePage__processStepsRow}>
        {PROCESS_STEPS.map((step) => (
          <ProcessStepCard
            key={step.title}
            icon={step.icon}
            stepLabel={step.stepLabel}
            title={step.title}
          />
        ))}

      
      </div>
      <div className={styles.softwarePage__includes}>
          <div className={styles.softwarePage__includesTitle}>Incluye</div>
          <div className={styles.softwarePage__includesCols}>
            <div className={styles.softwarePage__includesCol}>
              {col1.map((label) => (
                <div key={label} className={styles.softwarePage__includesRow}>
                  <IconSlot24>
                    <Check className={styles.softwarePage__lucideBlue} size={18} strokeWidth={2.5} aria-hidden />
                  </IconSlot24>
                  <div className={styles.softwarePage__includesText}>{label}</div>
                </div>
              ))}
            </div>
            <div className={styles.softwarePage__includesCol}>
              {col2.map((label) => (
                <div key={label} className={styles.softwarePage__includesRow}>
                  <IconSlot24>
                    <Check className={styles.softwarePage__lucideBlue} size={18} strokeWidth={2.5} aria-hidden />
                  </IconSlot24>
                  <div className={styles.softwarePage__includesText}>{label}</div>
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
    <div className={styles.softwarePage__faq}>
      <div className={styles.softwarePage__faqTitleSection}>
        <div className={styles.softwarePage__faqTitleRow}>
          <div className={styles.softwarePage__faqTitle}>Preguntas frecuentes</div>
        </div>
      </div>

      <div className={styles.softwarePage__faqList}>
        {FAQ_ITEMS.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function SectionClosingCta() {
  return (
    <div className={styles.softwarePage__closing}>
      <div className={styles.softwarePage__closingTitle}>Moderniza hoy para reducir costos mañana</div>
      <div className={styles.softwarePage__closingSubWrap}>
        <div className={styles.softwarePage__closingSub}>
          Cada año que retrasas la modernización incrementa costos y riesgo operativo entre 10–15%.
          <br />
          Evalúa tu arquitectura actual y descubre el potencial de ahorro y eficiencia.
        </div>
      </div>
      <div className={cn(styles.softwarePage__cta, styles.softwarePage__cta_yellow)}>
        <div className={styles.softwarePage__ctaLabel_dark}>Agendar diagnóstico gratuito</div>
      </div>
    </div>
  );
}

function SectionFooter() {
  return (
    <div className={styles.softwarePage__footer}>
      <a href="/" className={styles.softwarePage__brandLink}>
        <img
          className={styles.softwarePage__logoFooter}
          src="/assets/logo.png"
          alt="Zékiri"
          width={100}
          height={34}
        />
        <img
          className={styles.softwarePage__logoFooter_onDark}
          src="/assets/logo-w.png"
          alt="Zékiri"
          width={100}
          height={34}
        />
      </a>
      <div className={styles.softwarePage__footerTagline}>Make it matter</div>
      <div className={styles.softwarePage__footerRule}>
        <div className={styles.softwarePage__footerBottom}>
          <div className={styles.softwarePage__footerCopyRow}>
            <div className={styles.softwarePage__footerCopy}>
              © 2026 Zékiri. Todos los derechos reservados.
            </div>
          </div>
          <div className={styles.softwarePage__footerLinks}>
            <div className={styles.softwarePage__footerLinkSlot}>
              <div className={styles.softwarePage__footerLink}>Política de privacidad</div>
            </div>
            <div className={styles.softwarePage__footerLinkSlotGrow}>
              <div className={styles.softwarePage__footerLink}>Términos y condiciones</div>
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
    <div className={styles.softwarePage}>
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
