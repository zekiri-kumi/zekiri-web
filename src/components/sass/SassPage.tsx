import { useCallback, useState, type ReactNode } from "react";
import {
  BarChart3,
  Cable,
  ClipboardList,
  MessagesSquare,
  ChevronDown,
} from "lucide-react";
import { trackButtonClick } from "@/lib/gtag-click";
import styles from "./SassPage.module.css";

const CTA_HREF = "/#contact";

function track(label: string) {
  trackButtonClick(label);
}

function CtaLink({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={CTA_HREF}
      className={className}
      onClick={() => track(label)}
    >
      {children}
    </a>
  );
}

const testimonials = [
  {
    quote:
      'LOREM IPSUM "Recuperamos 15 horas semanales por persona. El ROI se dio en el primer mes."',
    name: "Laura Méndez",
    role: "COO • Fintech",
  },
  {
    quote:
      'LOREM IPSUM "La integración fue invisible para el equipo. Empezaron a ver resultados antes de darse cuenta del cambio."',
    name: "Carlos Ruiz",
    role: "Director de Operaciones • E-commerce",
  },
  {
    quote:
      'LOREM IPSUM"No es tecnología por tecnología. Es una herramienta que resuelve problemas reales de negocio."',
    name: "Ana Sofía Torres",
    role: "CEO • Consultoría",
  },
] as const;

const painPoints = [
  "Procesos repetitivos y tareas manuales que consumen horas valiosas",
  "Costos operativos altos por errores humanos y falta de estandarización",
  "Sistemas que no se integran y  que duplican el trabajo",
  "Dificultad para escalar sin automatización de apoyo",
] as const;

const automateCards = [
  {
    icon: "ops" as const,
    title: "Operaciones & Administración",
    body: "Automatización de aprobaciones, workflows internos, generación de documentación y reportes operativos",
  },
  {
    icon: "data" as const,
    title: "Análisis de Datos & Reporting",
    body: "Dashboards automáticos, alertas inteligentes y predicción de tendencias",
  },
  {
    icon: "comm" as const,
    title: "Comunicación & Soporte",
    body: "Chatbots inteligentes, respuestas contextuales y gestión automática de tickets",
  },
  {
    icon: "int" as const,
    title: "Integración de Sistemas",
    body: "Conectamos CRM, ERP, herramientas de comunicación y plataformas existentes",
  },
] as const;

const processSteps = [
  {
    n: "01",
    title: "Diagnóstico & Estrategia",
    body:
      "Realizamos un análisis profundo de tus procesos actuales y tus objetivos para definir los puntos óptimos de automatización",
  },
  {
    n: "02",
    title: "Diseño de solución inteligente",
    body:
      "Diseñamos flujos y modelos basados en IA adaptados a tu modelo de negocio e integrados a tu infraestructura actual",
  },
  {
    n: "03",
    title: "Diseño de solución inteligente",
    body:
      "Diseñamos flujos y modelos basados en IA adaptados a tu modelo de negocio e integrados a tu infraestructura actual",
  },
  {
    n: "04",
    title: "Diseño de solución inteligente",
    body:
      "Diseñamos flujos y modelos basados en IA adaptados a tu modelo de negocio e integrados a tu infraestructura actual",
  },
] as const;

const faqItems = [
  {
    q: "¿Es necesario tener conocimientos técnicos para usar estas soluciones?",
    a: "No, nuestras soluciones se entregan 'listas para usar' con soporte y capacitación.",
    ga: "sass_faq_technical_knowledge",
  },
  {
    q: "¿En qué industrias aplican estas automatizaciones?",
    a: "Desde pymes hasta empresas grandes en sectores como manufactura, servicios, tecnología, finanzas, comercio y más.",
    ga: "sass_faq_industries",
  },
  {
    q: "¿La IA reemplazará a mis colaboradores?",
    a: "La IA potencia al equipo, agiliza las tareas repetitivas y libera tiempo para actividades estratégicas de alto valor.",
    ga: "sass_faq_ai_replacement",
  },
] as const;

function AutomateIcon({ type }: { type: (typeof automateCards)[number]["icon"] }) {
  const cn = styles["sass-lp__automate-icon-svg"];
  if (type === "ops") {
    return (
      <span className={styles["sass-lp__automate-icon"]} aria-hidden>
        <svg className={cn} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="10.67" height="10.67" stroke="currentColor" strokeWidth="2" />
          <rect x="9.33" y="14.67" width="8" height="8" stroke="currentColor" strokeWidth="2" />
          <rect x="17.33" y="17.33" width="10.67" height="10.67" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
    );
  }
  if (type === "data") {
    return (
      <span className={styles["sass-lp__automate-icon"]} aria-hidden>
        <BarChart3 className={cn} strokeWidth={2} />
      </span>
    );
  }
  if (type === "comm") {
    return (
      <span className={styles["sass-lp__automate-icon"]} aria-hidden>
        <MessagesSquare className={cn} strokeWidth={2} />
      </span>
    );
  }
  return (
    <span className={styles["sass-lp__automate-icon"]} aria-hidden>
      <Cable className={cn} strokeWidth={2} />
    </span>
  );
}

function PainIcon({ index }: { index: number }) {
  return (
    <span className={styles["sass-lp__pain-icon-wrap"]} aria-hidden>
      {index === 0 && (
        <span className={styles["sass-lp__pain-icon-pair"]}>
          <span className={styles["sass-lp__pain-box"]} />
          <span className={styles["sass-lp__pain-stick"]} />
        </span>
      )}
      {index === 1 && <BarChart3 className={styles["sass-lp__pain-lucide"]} strokeWidth={1.5} />}
      {index === 2 && <ClipboardList className={styles["sass-lp__pain-lucide"]} strokeWidth={1.5} />}
      {index === 3 && <span className={styles["sass-lp__pain-square"]} />}
    </span>
  );
}

export function SassPage() {
  const [faqOpen, setFaqOpen] = useState<boolean[]>(() => faqItems.map(() => true));

  const toggleFaq = useCallback((i: number, gaLabel: string) => {
    setFaqOpen((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
    trackButtonClick(gaLabel);
  }, []);

  return (
    <div className={styles["sass-lp"]}>
      <div className={styles["sass-lp__promo"]}>
        <p className={styles["sass-lp__promo-text"]}>
          Lorem Ipsum lo que se ponga en esta parte usualmente
        </p>
      </div>

      <main className={styles["sass-lp__main"]}>
        <section className={styles["sass-lp__hero-wrap"]} aria-labelledby="sass-hero-title">
          <div className={styles["sass-lp__hero-inner"]}>
            <a
              href="/"
              className={styles["sass-lp__logo-link"]}
              onClick={() => track("sass_nav_logo")}
            >
              <img
                src="/assets/logo.png"
                alt="Zékiri"
                width={105}
                height={36}
                className={styles["sass-lp__logo-img"]}
                decoding="async"
              />
            </a>

            <div className={styles["sass-lp__hero-stack"]}>
              <h1 id="sass-hero-title" className={styles["sass-lp__hero-title"]}>
                <span className={styles["sass-lp__hero-title-mobile"]}>
                  <span className={styles["sass-lp__accent"]}>Automatización con IA que </span>
                  <span className={styles["sass-lp__text-strong"]}>
                    libera tiempo y multiplica resultados
                  </span>
                </span>
                <span className={styles["sass-lp__hero-title-desktop"]}>
                  <span className={styles["sass-lp__accent"]}>Automatización con IA</span>
                  <span className={styles["sass-lp__text-strong"]}>
                    {" "}
                    que libera tiempo y
                    <br />
                    multiplica resultados
                  </span>
                </span>
              </h1>

              <ul className={styles["sass-lp__hero-bullets"]}>
                <li>→Automatiza desde tareas repetitivas hasta decisiones inteligentes</li>
                <li>→ Incrementa productividad y eficiencia empresarial</li>
              </ul>

              <CtaLink className={styles["sass-lp__cta"]} label="sass_cta_hero">
                <span className={styles["sass-lp__cta-desktop"]}>Agenda una consultoría gratuita</span>
                <span className={styles["sass-lp__cta-mobile"]}>Agendar consultoría gratuita</span>
              </CtaLink>
            </div>
          </div>
        </section>

        <section className={styles["sass-lp__trust"]} aria-labelledby="sass-trust-heading">
          <h2 id="sass-trust-heading" className={styles["sass-lp__visually-hidden"]}>
            Experiencia sectorial
          </h2>
          <p className={styles["sass-lp__trust-tagline"]}>Décadas de experiencia en múltiples industrias</p>
          <div className={styles["sass-lp__trust-logos"]}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={styles["sass-lp__trust-logo"]} role="presentation" />
            ))}
          </div>
        </section>

        <section className={styles["sass-lp__quote"]} aria-labelledby="sass-quote-heading">
          <h2 id="sass-quote-heading" className={styles["sass-lp__visually-hidden"]}>
            Por qué importan los datos
          </h2>
          <p className={styles["sass-lp__quote-text-desktop"]}>
            <span className={styles["sass-lp__text-strong"]}>
              Cuando la operación crece más rápido que la estructura, las decisiones necesitan{" "}
            </span>
            <span className={styles["sass-lp__accent"]}>datos confiables, no intuición.</span>
          </p>
          <p className={styles["sass-lp__quote-text-mobile"]}>
            <span className={styles["sass-lp__text-strong"]}>
              La mayoría de las empresas no tienen un problema de talento,
            </span>
            <span className={styles["sass-lp__accent"]}> sino de procesos.</span>
          </p>
        </section>

        <section className={styles["sass-lp__pain"]} aria-labelledby="sass-pain-heading">
          <h2 id="sass-pain-heading" className={styles["sass-lp__visually-hidden"]}>
            Retos operativos
          </h2>
          <div className={styles["sass-lp__pain-grid"]}>
            {painPoints.map((text, i) => (
              <article key={i} className={styles["sass-lp__pain-card"]}>
                <PainIcon index={i} />
                <p className={styles["sass-lp__pain-text"]}>{text}</p>
              </article>
            ))}
          </div>
          <CtaLink className={styles["sass-lp__cta"]} label="sass_cta_after_pain">
            <span className={styles["sass-lp__cta-desktop"]}>Agenda una consultoría gratuita</span>
            <span className={styles["sass-lp__cta-mobile"]}>Agendar consultoría gratuita</span>
          </CtaLink>
        </section>

        <section className={styles["sass-lp__testimonials"]} aria-labelledby="sass-test-heading">
          <h2 id="sass-test-heading" className={styles["sass-lp__section-title"]}>
            Empresas que ya automatizaron
            <br />
            su crecimiento
          </h2>
          <div className={styles["sass-lp__testimonial-grid"]}>
            {testimonials.map((t, i) => (
              <article key={i} className={styles["sass-lp__testimonial-card"]}>
                <p className={styles["sass-lp__testimonial-quote"]}>{t.quote}</p>
                <div className={styles["sass-lp__testimonial-meta"]}>
                  <p className={styles["sass-lp__testimonial-name"]}>{t.name}</p>
                  <p className={styles["sass-lp__testimonial-role"]}>{t.role}</p>
                </div>
              </article>
            ))}
          </div>
          <CtaLink className={styles["sass-lp__cta"]} label="sass_cta_after_testimonials">
            <span className={styles["sass-lp__cta-desktop"]}>Agenda una consultoría gratuita</span>
            <span className={styles["sass-lp__cta-mobile"]}>Agendar consultoría gratuita</span>
          </CtaLink>
        </section>

        <section className={styles["sass-lp__automate"]} aria-labelledby="sass-automate-heading">
          <h2 id="sass-automate-heading" className={styles["sass-lp__section-title"]}>
            Qué podemos automatizar
          </h2>
          <div className={styles["sass-lp__automate-grid"]}>
            {automateCards.map((card) => (
              <article key={card.title} className={styles["sass-lp__automate-card"]}>
                <AutomateIcon type={card.icon} />
                <div>
                  <h3 className={styles["sass-lp__automate-title"]}>{card.title}</h3>
                  <p className={styles["sass-lp__automate-body"]}>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
          <CtaLink className={styles["sass-lp__cta"]} label="sass_cta_after_automate">
            <span className={styles["sass-lp__cta-desktop"]}>Agenda una consultoría gratuita</span>
            <span className={styles["sass-lp__cta-mobile"]}>Agendar consultoría gratuita</span>
          </CtaLink>
        </section>

        <section className={styles["sass-lp__process"]} aria-labelledby="sass-process-heading">
          <h2 id="sass-process-heading" className={styles["sass-lp__section-title"]}>
            Cómo funciona nuestro proceso
          </h2>
          <div className={styles["sass-lp__process-grid"]}>
            {processSteps.map((step) => (
              <article key={step.n} className={styles["sass-lp__process-card"]}>
                <p className={styles["sass-lp__process-num"]}>{step.n}</p>
                <h3 className={styles["sass-lp__process-title"]}>{step.title}</h3>
                <p className={styles["sass-lp__process-body"]}>{step.body}</p>
              </article>
            ))}
          </div>
          <CtaLink className={styles["sass-lp__cta"]} label="sass_cta_after_process">
            <span className={styles["sass-lp__cta-desktop"]}>Agenda una consultoría gratuita</span>
            <span className={styles["sass-lp__cta-mobile"]}>Agendar consultoría gratuita</span>
          </CtaLink>
        </section>

        <section className={styles["sass-lp__faq"]} aria-labelledby="sass-faq-heading">
          <h2 id="sass-faq-heading" className={styles["sass-lp__faq-title"]}>
            Preguntas frecuentes
          </h2>
          <div className={styles["sass-lp__faq-list"]}>
            {faqItems.map((item, i) => (
              <div key={item.q} className={styles["sass-lp__faq-item"]}>
                <button
                  type="button"
                  className={styles["sass-lp__faq-trigger"]}
                  aria-expanded={faqOpen[i]}
                  onClick={() => toggleFaq(i, item.ga)}
                >
                  <span className={styles["sass-lp__faq-q"]}>{item.q}</span>
                  <span className={styles["sass-lp__faq-chevron"]}>
                    <ChevronDown
                      className={
                        faqOpen[i]
                          ? `${styles["sass-lp__faq-chevron-icon"]} ${styles["sass-lp__faq-chevron-icon--open"]}`
                          : styles["sass-lp__faq-chevron-icon"]
                      }
                      aria-hidden
                    />
                  </span>
                </button>
                {faqOpen[i] ? (
                  <>
                    <div className={styles["sass-lp__faq-divider"]} role="presentation" />
                    <p className={styles["sass-lp__faq-a"]}>{item.a}</p>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className={styles["sass-lp__closing"]} aria-labelledby="sass-closing-heading">
          <h2 id="sass-closing-heading" className={styles["sass-lp__closing-title"]}>
            Libera tiempo. Escala con IA. Decide mejor.
          </h2>
          <p className={styles["sass-lp__closing-sub"]}>
            Agenda un diagnóstico gratuito y descubre cómo la automatización inteligente puede transformar tu
            operación.
          </p>
          <CtaLink className={styles["sass-lp__cta"]} label="sass_cta_closing">
            <span className={styles["sass-lp__cta-desktop"]}>Agenda una consultoría gratuita</span>
            <span className={styles["sass-lp__cta-mobile"]}>Agendar consultoría gratuita</span>
          </CtaLink>
        </section>
      </main>

      <footer className={styles["sass-lp__footer"]}>
        <img
          src="/assets/logo.png"
          alt="Zékiri"
          width={100}
          height={34}
          className={styles["sass-lp__footer-logo"]}
          decoding="async"
        />
        <nav className={styles["sass-lp__social"]} aria-label="Redes sociales">
          {(
            [
              ["https://www.linkedin.com/", "sass_social_linkedin", "LinkedIn"],
              ["https://www.youtube.com/", "sass_social_youtube", "YouTube"],
              ["https://www.facebook.com/", "sass_social_facebook", "Facebook"],
              ["https://www.instagram.com/", "sass_social_instagram", "Instagram"],
            ] as const
          ).map(([href, ga, label]) => (
            <a
              key={ga}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["sass-lp__social-link"]}
              aria-label={label}
              onClick={() => track(ga)}
            >
              <span className={styles["sass-lp__social-dot"]} />
            </a>
          ))}
        </nav>

        <div className={styles["sass-lp__contact-row"]}>
          <div className={styles["sass-lp__contact-block"]}>
            <span className={styles["sass-lp__contact-icon"]} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 4h16v12H2V4z"
                  stroke="currentColor"
                  strokeWidth="1.67"
                />
                <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.67" />
              </svg>
            </span>
            <div>
              <p className={styles["sass-lp__contact-label"]}>Email</p>
              <a
                href="mailto:contacto@zekiri.com"
                className={styles["sass-lp__contact-value"]}
                onClick={() => track("sass_contact_email")}
              >
                contacto@zekiri.com
              </a>
            </div>
          </div>
          <div className={styles["sass-lp__contact-block"]}>
            <span className={styles["sass-lp__contact-icon"]} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 3h12v14l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5V3z"
                  stroke="currentColor"
                  strokeWidth="1.67"
                />
              </svg>
            </span>
            <div>
              <p className={styles["sass-lp__contact-label"]}>Teléfono</p>
              <a
                href="tel:+1234567890"
                className={styles["sass-lp__contact-value"]}
                onClick={() => track("sass_contact_phone")}
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className={styles["sass-lp__contact-block"]}>
            <span className={styles["sass-lp__contact-icon"]} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z"
                  stroke="currentColor"
                  strokeWidth="1.67"
                />
                <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.67" />
              </svg>
            </span>
            <div>
              <p className={styles["sass-lp__contact-label"]}>Ubicación</p>
              <p className={styles["sass-lp__contact-value"]}>Ciudad de México, México</p>
            </div>
          </div>
        </div>

        <div className={styles["sass-lp__legal"]}>
          <p className={styles["sass-lp__copyright"]}>© 2026 Zékiri. Todos los derechos reservados.</p>
          <div className={styles["sass-lp__legal-links"]}>
            <a href="/#contact" className={styles["sass-lp__legal-link"]} onClick={() => track("sass_footer_privacy")}>
              Política de privacidad
            </a>
            <a href="/#contact" className={styles["sass-lp__legal-link"]} onClick={() => track("sass_footer_terms")}>
              Términos y condiciones
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
