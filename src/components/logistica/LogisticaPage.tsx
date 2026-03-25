import { useId, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Check, ChevronDown, FileText, Link2, ShieldAlert, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOGISTICA_FAQ } from "@/lib/logistica-content";
import styles from "./LogisticaPage.module.css";

// -----------------------------------------------------------------------------
// Datos
// -----------------------------------------------------------------------------

const HERO_METRICS = [
  { value: "+2,400", label: "Documentos procesados/mes" },
  { value: "98.3%", label: "Precisión sin revisión humana" },
  { value: "-62%", label: "Tiempo de cruce fronterizo" },
  { value: "$0", label: "Multas regulatorias" },
] as const;

const TESTIMONIALS = [
  {
    stat: "-71%",
    title: "Reducción en cargas detenidas por errores documentales en 90 días",
    quote:
      "Antes teníamos un equipo de 4 personas revisando documentos manualmente. Hoy el sistema detecta el 98% de los errores antes de que el camión salga del almacén.",
    author: "Miguel R.",
    role: "Director de Operaciones",
  },
  {
    stat: "$84K USD",
    title: "Ahorrados en el primer trimestre en multas y retrasos aduaneros",
    quote:
      "El nearshoring nos triplicó el volumen de cruce. No podíamos escalar con humanos. La IA nos permitió absorber ese crecimiento sin contratar un solo documentalista adicional.",
    author: "Claudia L.",
    role: "Gerente de Comercio Exterior",
  },
  {
    stat: "4.2 h",
    title: "Menos de espera por cruce en promedio, por unidad",
    quote:
      "Lo que más me sorprendió fue la integración con nuestro TMS existente. En 3 semanas estaba corriendo en producción. No tuvimos que tirar nada de lo que ya teníamos.",
    author: "Jorge A.",
    role: "Gerente de Operaciones",
  },
] as const;

const PAIN_ITEMS = [
  "Personal humano revisando documentos uno por uno, con fatiga y margen de error inevitable",
  "Errores detectados en la frontera, cuando el camión ya está detenido y el costo es máximo",
  "Llamadas de emergencia al agente aduanero a las 2am para corregir una factura",
  "Invisibilidad del estado documental hasta que el problema ya ocurrió",
  "Multas regulatorias y penalidades de cliente que erosionan el margen por envío",
] as const;

const SOLUTION_ITEMS = [
  "IA que procesa y valida cada documento en segundos, sin fatiga y con 98.3% de precisión",
  "Detectar errores en el almacén, antes del despacho, cuando corregirlos cuesta casi cero",
  "Sincronización automática con tu operador en EE.UU. sin intervención humana",
  "Dashboard en tiempo real con el estado de cada documento, cada cruce, cada camión",
  "Compliance proactivo: el sistema se actualiza con cambios normativos del T-MEC automáticamente",
] as const;

const FEATURE_PANELS: {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: readonly string[];
}[] = [
  {
    icon: FileText,
    title: "Lectura inteligente de documentos en cualquier formato",
    description:
      "La IA extrae y estructura automáticamente los datos de facturas comerciales, cartas porte, certificados de origen y bills of lading — sin importar el formato o la calidad del escaneo.",
    bullets: [
      "Procesa PDFs, imágenes, EDI y XML desde cualquier origen",
      "Reconoce plantillas de más de 40 agencias aduaneras de México y EEUU",
      "Extrae datos con contexto semántico, no solo OCR literal",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Detección de errores y discrepancias antes del despacho",
    description:
      "El sistema cruza automáticamente todos los documentos entre sí y contra las normativas vigentes del T-MEC. Si algo no cuadra, lo marca y sugiere la corrección antes de que el camión salga.",
    bullets: [
      "Validación cruzada entre factura, carta porte y pedimento",
      "Alertas en tiempo real con descripción del error y solución sugerida",
      "Actualización automática ante cambios regulatorios de T-MEC 2026",
    ],
  },
  {
    icon: Link2,
    title: "Integración nativa con tu ecosistema logístico existente",
    description:
      "No tiras lo que ya tienes. Se conecta con tu TMS, WMS y con los sistemas de tu operador en EE.UU. vía API, sin desarrollo personalizado de tu lado.",
    bullets: [
      "Conectores preconfigurados para SAP, Oracle TMS, Magaya y más",
      "Sincronización bidireccional con el operador en destino sin intervención humana",
      "Implementación operativa en menos de 3 semanas",
    ],
  },
];

const COST_STATS = [
  {
    value: "$1,200 USD",
    label: "Promedio por hora de camión detenido en frontera",
  },
  {
    value: "34%",
    label: "De las demoras en cruce se originan en errores documentales corregibles",
  },
  {
    value: "+180%",
    label: "Crecimiento del volumen de carga México-EEUU por nearshoring",
  },
  {
    value: "2026",
    label: "Nuevas exigencias T-MEC de trazabilidad documental digital entran en vigor",
  },
] as const;

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Ingesta automática de documentos",
    body: "El sistema captura documentos desde tu correo, TMS o portal de proveedores. Cualquier formato, cualquier origen. Sin intervención humana para recibirlos.",
  },
  {
    n: "02",
    title: "Procesamiento y validación con IA",
    body: "En segundos, la IA extrae datos, valida contra normativas vigentes, cruza información entre documentos y detecta cualquier discrepancia antes del despacho.",
  },
  {
    n: "03",
    title: "Aprobación o alerta inmediata",
    body: "Si todo está correcto, el documento avanza automáticamente al siguiente paso. Si hay un error, el equipo recibe una alerta con la corrección sugerida. Solo intervienen cuando es necesario.",
  },
  {
    n: "04",
    title: "Sincronización con operador destino",
    body: "Los documentos aprobados se transmiten automáticamente al sistema de tu operador en EE.UU. El camión llega con todo en regla.",
  },
  {
    n: "05",
    title: "Visibilidad total en tiempo real",
    body: "Dashboard unificado con el estado de cada documento, cada cruce, cada camión. KPIs de compliance para reportar a dirección sin armar reportes manuales.",
  },
  {
    n: "06",
    title: "Actualización normativa continua",
    body: "El equipo de compliance actualiza los modelos ante cada cambio regulatorio. Tu operación siempre cumple, sin que tú tengas que rastrear los cambios.",
  },
] as const;

// -----------------------------------------------------------------------------
/* Piezas */
// -----------------------------------------------------------------------------

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const headerId = useId();
  const panelId = useId();

  return (
    <li className={styles.logisticaPage__faqItem}>
      <div className={styles.logisticaPage__faqCard}>
        <button
          type="button"
          id={headerId}
          className={styles.logisticaPage__faqToggle}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.logisticaPage__faqQuestion}>{question}</span>
          <span className={styles.logisticaPage__faqChevronWrap} aria-hidden>
            <ChevronDown
              size={26}
              strokeWidth={2}
              className={cn(styles.logisticaPage__faqChevron, open && styles.logisticaPage__faqChevron_open)}
            />
          </span>
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          hidden={!open}
          className={styles.logisticaPage__faqPanel}
        >
          <hr className={styles.logisticaPage__faqDivider} />
          <p className={styles.logisticaPage__faqAnswer}>{answer}</p>
        </div>
      </div>
    </li>
  );
}

function SectionTopBar() {
  return (
    <header className={styles.logisticaPage__topBar}>
      <a href="/" className={styles.logisticaPage__brandLink}>
        <img
          className={styles.logisticaPage__logoTop}
          src="/assets/logo-w.png"
          alt="Zékiri — inicio"
          width={100}
          height={35}
        />
      </a>
    </header>
  );
}

function SectionHero() {
  return (
    <section className={styles.logisticaPage__hero} aria-labelledby="logistica-hero-title">
      <div className={styles.logisticaPage__heroCard}>
        <div className={styles.logisticaPage__pill}>
          <p className={styles.logisticaPage__pillText}>Automatización aduanera con IA - LATAM</p>
        </div>
        <h1 id="logistica-hero-title" className={styles.logisticaPage__heroTitle}>
          Cada hora con el camión parado en frontera te está costando dinero
        </h1>
        <p className={styles.logisticaPage__heroLead}>
          Procesamos automáticamente tus documentos aduaneros — facturas, cartas porte, bills of lading —
          detectamos errores antes de llegar a la frontera y sincronizamos con tu operador en EE.UU. sin
          intervención humana.
        </p>
        <div className={styles.logisticaPage__ctaRow}>
          <a
            href="/#contact"
            className={cn(styles.logisticaPage__cta, styles.logisticaPage__cta_yellow)}
            data-ga-event="cta_click"
            data-ga-label="logistica_hero_auditoria_gratuita"
          >
            <span className={styles.logisticaPage__ctaLabel}>
              <span className={styles.logisticaPage__ctaLabelDesktop}>
                Auditoría gratuita de mi proceso documental →
              </span>
              <span className={styles.logisticaPage__ctaLabelMobile}>Agendar auditoría gratuita</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionMetrics() {
  return (
    <section className={styles.logisticaPage__metrics} aria-label="Indicadores clave">
      {HERO_METRICS.map((m) => (
        <div key={m.label} className={styles.logisticaPage__metric}>
          <p className={styles.logisticaPage__metricValue}>{m.value}</p>
          <p className={styles.logisticaPage__metricLabel}>{m.label}</p>
        </div>
      ))}
    </section>
  );
}

function SectionTestimonials() {
  return (
    <section
      className={styles.logisticaPage__testimonials}
      aria-labelledby="logistica-testimonials-title"
    >
      <div className={styles.logisticaPage__sectionHead}>
        <h2 id="logistica-testimonials-title" className={styles.logisticaPage__sectionTitle}>
          Lo que dicen quienes cruzaron la frontera sin fricción
        </h2>
      </div>
      <div className={styles.logisticaPage__quoteGrid}>
        {TESTIMONIALS.map((t) => (
          <blockquote key={t.author} className={styles.logisticaPage__quoteCard}>
            <p className={styles.logisticaPage__quoteStat}>{t.stat}</p>
            <p className={styles.logisticaPage__quoteTitle}>{t.title}</p>
            <p className={styles.logisticaPage__quoteBody}>“{t.quote}”</p>
            <footer>
              <div className={styles.logisticaPage__quoteAuthor}>{t.author}</div>
              <div className={styles.logisticaPage__quoteRole}>{t.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className={styles.logisticaPage__sectionCtaWrap}>
        <a
          href="/#contact"
          className={cn(styles.logisticaPage__cta, styles.logisticaPage__cta_blue)}
          data-ga-event="cta_click"
          data-ga-label="logistica_testimonials_resultados"
        >
          <span className={styles.logisticaPage__ctaLabel}>
            <span className={styles.logisticaPage__ctaLabelDesktop}>Quiero resultados así para mi operación →</span>
            <span className={styles.logisticaPage__ctaLabelMobile}>Quiero resultados así →</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function SectionProblemSolution() {
  return (
    <section className={styles.logisticaPage__splitSection} aria-labelledby="logistica-pdf-title">
      <div className={styles.logisticaPage__splitIntro}>
        <div className={styles.logisticaPage__sectionHead}>
          <h2 id="logistica-pdf-title" className={styles.logisticaPage__sectionTitle}>
            Un PDF mal llenado puede detener $200,000 USD en mercancía
          </h2>
        </div>
        <p className={styles.logisticaPage__sectionSub}>
          No es exageración. Es lo que pasa cada vez que un dato no coincide, una clasificación arancelaria está
          desactualizada o falta un campo en la carta porte. Y el T-MEC 2026 hace que el costo regulatorio sea
          todavía mayor.
        </p>
      </div>
      <div className={styles.logisticaPage__compareGrid}>
        <div className={styles.logisticaPage__compareCard}>
          <h3 className={styles.logisticaPage__compareHeading}>Si hoy tienes:</h3>
          {PAIN_ITEMS.map((text) => (
            <div key={text.slice(0, 48)} className={styles.logisticaPage__listRow}>
              <Square className={styles.logisticaPage__listIcon} size={24} strokeWidth={2} aria-hidden />
              <p className={styles.logisticaPage__listText}>{text}</p>
            </div>
          ))}
        </div>
        <div className={cn(styles.logisticaPage__compareCard, styles.logisticaPage__compareCard_inverse)}>
          <h3 className={cn(styles.logisticaPage__compareHeading, styles.logisticaPage__compareHeading_inverse)}>
            Te ayudamos con:
          </h3>
          {SOLUTION_ITEMS.map((text) => (
            <div key={text.slice(0, 48)} className={styles.logisticaPage__listRow}>
              <Check
                className={cn(styles.logisticaPage__listIcon, styles.logisticaPage__listIcon_inverse)}
                size={24}
                strokeWidth={2}
                aria-hidden
              />
              <p className={cn(styles.logisticaPage__listText, styles.logisticaPage__listText_inverse)}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.logisticaPage__sectionCtaWrap}>
        <a
          href="/#contact"
          className={cn(styles.logisticaPage__cta, styles.logisticaPage__cta_yellow)}
          data-ga-event="cta_click"
          data-ga-label="logistica_split_audita_proceso"
        >
          <span className={styles.logisticaPage__ctaLabel}>
            <span className={styles.logisticaPage__ctaLabelDesktop}>Audita mi proceso documental gratis →</span>
            <span className={styles.logisticaPage__ctaLabelMobile}>Agendar auditoría gratuita</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function FeatureBullet({ children }: { children: ReactNode }) {
  return (
    <li className={styles.logisticaPage__featureBullet}>
      <Check className={styles.logisticaPage__featureBulletIcon} size={22} strokeWidth={2} aria-hidden />
      <span className={styles.logisticaPage__listText}>{children}</span>
    </li>
  );
}

function SectionFeatures() {
  return (
    <section className={styles.logisticaPage__features} aria-labelledby="logistica-agent-title">
      <div className={styles.logisticaPage__featuresIntro}>
        <div className={styles.logisticaPage__sectionHead}>
          <h2 id="logistica-agent-title" className={styles.logisticaPage__sectionTitle}>
            No es un scanner. Es un agente aduanero autónomo
          </h2>
        </div>
      </div>
      <div className={styles.logisticaPage__featuresStack}>
        {FEATURE_PANELS.map((panel) => {
          const Icon = panel.icon;
          return (
            <div key={panel.title} className={styles.logisticaPage__featurePanel}>
              <div className={styles.logisticaPage__featureCol}>
                <div className={styles.logisticaPage__featureIconWrap}>
                  <Icon size={44} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className={styles.logisticaPage__featureTitle}>{panel.title}</h3>
                <p className={styles.logisticaPage__featureDesc}>{panel.description}</p>
              </div>
              <div className={styles.logisticaPage__featureCol}>
                <ul className={styles.logisticaPage__featureBullets}>
                  {panel.bullets.map((b) => (
                    <FeatureBullet key={b}>{b}</FeatureBullet>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SectionCost() {
  return (
    <section className={styles.logisticaPage__costSection} aria-labelledby="logistica-cost-title">
      <div className={styles.logisticaPage__sectionHead}>
        <h2 id="logistica-cost-title" className={styles.logisticaPage__sectionTitle}>
          El costo del problema ya está documentado
        </h2>
      </div>
      <div className={styles.logisticaPage__costGrid}>
        {COST_STATS.map((c) => (
          <div key={c.label} className={styles.logisticaPage__costCell}>
            <p className={styles.logisticaPage__costValue}>{c.value}</p>
            <p className={styles.logisticaPage__costLabel}>{c.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.logisticaPage__sectionCtaWrap}>
        <a
          href="/#contact"
          className={cn(styles.logisticaPage__cta, styles.logisticaPage__cta_blue)}
          data-ga-event="cta_click"
          data-ga-label="logistica_cost_riesgo_operacion"
        >
          <span className={styles.logisticaPage__ctaLabel}>
            <span className={styles.logisticaPage__ctaLabelDesktop}>Ver si mi operación tiene este riesgo →</span>
            <span className={styles.logisticaPage__ctaLabelMobile}>Agendar auditoría gratuita</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function SectionProcess() {
  return (
    <section className={styles.logisticaPage__process} aria-labelledby="logistica-process-title">
      <div className={styles.logisticaPage__splitIntro}>
        <div className={styles.logisticaPage__sectionHead}>
          <h2 id="logistica-process-title" className={styles.logisticaPage__sectionTitle}>
            De documento en entrada a cruce aprobado en minutos
          </h2>
        </div>
        <p className={styles.logisticaPage__sectionSub}>
          Sin código de tu lado. Sin cambiar tus sistemas actuales. Sin contratar nuevas personas.
        </p>
      </div>
      <div className={styles.logisticaPage__processGrid}>
        {PROCESS_STEPS.map((step) => (
          <article key={step.n} className={styles.logisticaPage__processCard}>
            <header>
              <span className={styles.logisticaPage__processStepNum}>{step.n}</span>
              <h3 className={styles.logisticaPage__processCardTitle}>{step.title}</h3>
            </header>
            <p className={styles.logisticaPage__processCardBody}>{step.body}</p>
          </article>
        ))}
      </div>
      <div className={styles.logisticaPage__sectionCtaWrap}>
        <a
          href="/#contact"
          className={cn(styles.logisticaPage__cta, styles.logisticaPage__cta_yellow)}
          data-ga-event="cta_click"
          data-ga-label="logistica_process_demo_documentos"
        >
          <span className={styles.logisticaPage__ctaLabel}>
            <span className={styles.logisticaPage__ctaLabelDesktop}>
              Quiero verlo funcionando con mis documentos →
            </span>
            <span className={styles.logisticaPage__ctaLabelMobile}>Agendar diagnóstico gratuito</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function SectionFaq() {
  return (
    <section className={styles.logisticaPage__faqSection} aria-labelledby="logistica-faq-title">
      <div className={styles.logisticaPage__sectionHead}>
        <h2 id="logistica-faq-title" className={styles.logisticaPage__sectionTitle}>
          Las preguntas que hacen todos los COOs antes de decidir
        </h2>
      </div>
      <ul className={styles.logisticaPage__faqList}>
        {LOGISTICA_FAQ.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </section>
  );
}

function SectionClosing() {
  return (
    <section className={styles.logisticaPage__closing} aria-labelledby="logistica-closing-title">
      <h2 id="logistica-closing-title" className={styles.logisticaPage__closingTitle}>
        Tu competencia ya está automatizando sus cruces
      </h2>
      <p className={styles.logisticaPage__closingText}>
        Cada semana que tu equipo sigue revisando documentos manualmente es una semana de ventaja que le regalas
        a quien ya lo automatizó. La auditoría es gratuita, tarda 45 minutos y te dice exactamente cuánto te está
        costando el problema hoy.
      </p>
      <a
        href="/#contact"
        className={cn(styles.logisticaPage__cta, styles.logisticaPage__cta_yellow)}
        data-ga-event="cta_click"
        data-ga-label="logistica_closing_auditoria"
      >
        <span className={styles.logisticaPage__ctaLabel}>
          <span className={styles.logisticaPage__ctaLabelDesktop}>Agendar mi auditoría gratuita →</span>
          <span className={styles.logisticaPage__ctaLabelMobile}>Agendar auditoría gratuita</span>
        </span>
      </a>
    </section>
  );
}

function SectionFooter() {
  return (
    <footer className={styles.logisticaPage__footer}>
      <a href="/" className={styles.logisticaPage__brandLink}>
        <img
          className={styles.logisticaPage__logoFooter}
          src="/assets/logo.png"
          alt="Zékiri"
          width={100}
          height={34}
        />
        <img
          className={styles.logisticaPage__logoFooter_dark}
          src="/assets/logo-w.png"
          alt=""
          width={100}
          height={34}
          aria-hidden
        />
      </a>
      <p className={styles.logisticaPage__footerTagline}>Make it matter</p>
      <div className={styles.logisticaPage__footerRule}>
        <div className={styles.logisticaPage__footerBottom}>
          <p className={styles.logisticaPage__footerCopy}>© 2026 Zékiri. Todos los derechos reservados.</p>
          <nav className={styles.logisticaPage__footerLinks} aria-label="Legal">
            <a className={styles.logisticaPage__footerLink} href="/#contact">
              Política de privacidad
            </a>
            <a className={styles.logisticaPage__footerLink} href="/#contact">
              Términos y condiciones
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// -----------------------------------------------------------------------------
/* Página */
// -----------------------------------------------------------------------------

export function LogisticaPage() {
  return (
    <main className={styles.logisticaPage}>
      <SectionTopBar />
      <SectionHero />
      <SectionMetrics />
      <SectionTestimonials />
      <SectionProblemSolution />
      <SectionFeatures />
      <SectionCost />
      <SectionProcess />
      <SectionFaq />
      <SectionClosing />
      <SectionFooter />
    </main>
  );
}
