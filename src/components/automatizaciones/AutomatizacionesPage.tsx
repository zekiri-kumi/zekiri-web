import { useState } from "react";
import {
  Check,
  ChevronDown,
  MessageSquare,
  UserX,
  Users,
  Flame,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { automatizacionesFaq } from "@/lib/automatizaciones-content";

function CtaAccent({ className, gaLabel = "automatizaciones_diagnostico" }: { className?: string; gaLabel?: string }) {
  return (
    <a
      href="/#contact"
      data-ga-event="cta_click"
      data-ga-label={gaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#F7C95C] px-6 py-4 text-base font-semibold leading-5 text-[#2E3D4D] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#52B1E1] focus-visible:ring-offset-2 dark:focus-visible:ring-[#6BC3ED]",
        className
      )}
    >
      Agendar diagnóstico gratuito
    </a>
  );
}

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center gap-3 sm:gap-4">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#52B1E1]/10 dark:bg-[#6BC3ED]/15">
        <Check className="h-4 w-4 text-[#52B1E1] dark:text-[#6BC3ED]" strokeWidth={2.5} aria-hidden />
      </div>
      <p className="flex-1 text-base font-normal leading-6 text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-lg sm:leading-7">
        {children}
      </p>
    </div>
  );
}

function BenefitCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[15px] bg-white p-5 shadow-[0px_8px_32px_rgba(0,0,0,0.08)] dark:bg-[#2E3D4D]/90 sm:p-[30px]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#52B1E1] dark:bg-[#6BC3ED]">
        <Check className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden />
      </div>
      <p className="flex-1 text-base font-normal leading-6 text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-lg sm:leading-7">
        {children}
      </p>
    </div>
  );
}

const faqItems = automatizacionesFaq.map((item) => ({
  q: item.question,
  a: item.answer,
}));

const timeline = [
  {
    week: "Semana 1",
    title: "Setup Base",
    items: [
      "Análisis de negocio",
      "Configuración técnica",
      "Workflows candidatos",
      "Plan de trabajo",
    ],
  },
  {
    week: "Semana 2",
    title: "Personalización",
    items: [
      "Redacción con tu voz y tono",
      "Segmentación",
      "Pagos",
      "Validación de flujos",
    ],
  },
  {
    week: "Semana 3",
    title: "Lanzamiento",
    items: [
      "Capacitación 2 horas",
      "Prueba real",
      "Monitoreo 72 horas",
      "Ajustes estratégicos",
    ],
  },
] as const;

export function AutomatizacionesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-dvh w-full overflow-x-hidden bg-white text-[#2E3D4D] dark:bg-[#1A252F] dark:text-[#F1F3F4]"
      style={
        {
          ["--font-display" as string]: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
          ["--font-body" as string]: "'Open Sans', ui-sans-serif, system-ui, sans-serif",
        } as React.CSSProperties
      }
    >
      <div className="flex w-full flex-col items-center bg-white dark:bg-[#1A252F]">
        {/* Promo bar */}
        <div className="flex w-full justify-center bg-[#2E3D4D] px-2.5 py-2.5">
          <p
            className="max-w-208 text-center text-sm font-normal leading-5 text-[#F7C95C]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ¡Libera 20 horas de tu tiempo semanal e incrementa tu conversión!
          </p>
        </div>

        {/* Hero */}
        <section
          className="relative z-0 w-full overflow-hidden"
        >
          <picture className="absolute inset-0 z-0 block dark:hidden">
            <source media="(min-width: 640px)" srcSet="/assets/content-creators/desktop_light_hero.webp" />
            <img
              src="/assets/content-creators/mobile_light_hero.webp"
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>
          <picture className="absolute inset-0 z-0 hidden dark:block">
            <source media="(min-width: 640px)" srcSet="/assets/content-creators/desktop_hero_dark.webp" />
            <img
              src="/assets/content-creators/mobile_dark_hero.webp"
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 z-1 bg-white/70 dark:bg-[#1A252F]/55" aria-hidden />

          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[11px] px-4 pb-12 pt-2.5 sm:gap-8 sm:px-[50px] sm:pb-20 sm:pt-12">
            <a href="/" className="block h-[27px] w-20 shrink-0 sm:h-[35px] sm:w-[100px]">
              <img
                src="/assets/logo.png"
                alt="Zékiri"
                width={100}
                height={35}
                className="h-full w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </a>

            <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[39px]">
              <div className="flex w-full flex-col items-start justify-center gap-6 rounded-2xl bg-white/85 p-6 shadow-[0px_8px_32px_rgba(0,0,0,0.08)] dark:bg-[#2E3D4D]/90 sm:gap-10 sm:p-10 lg:min-w-[min(100%,320px)] lg:flex-1">
                <h1
                  className="text-center text-[32px] font-bold leading-[38px] sm:text-left sm:text-5xl sm:leading-[64px] lg:text-[56px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="text-[#2E3D4D] dark:text-[#F1F3F4]">
                    Automatizaciones que se sienten humanas a una{" "}
                  </span>
                  <span className="text-[#52B1E1] dark:text-[#6BC3ED]">velocidad sobrehumana</span>
                </h1>
                <p
                  className="text-center text-base font-normal leading-6 text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-left sm:text-lg sm:leading-7"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Tu crecimiento no debería sentirse como descontrol. No necesitas trabajar más.
                  Necesitas automatizaciones que trabajen por ti.
                </p>
                <CtaAccent className="w-full sm:w-auto" gaLabel="automatizaciones_hero_diagnostico" />
                <div className="flex w-full flex-col gap-3 sm:hidden">
                  <CheckRow>Nunca vuelvas a perder un lead</CheckRow>
                  <CheckRow>Recupera 15-20 horas semanales</CheckRow>
                  <CheckRow>Aumenta tu conversión 30-50%</CheckRow>
                  <CheckRow>Cero conocimiento técnico</CheckRow>
                </div>
              </div>

              <div className="hidden w-full max-w-[416px] shrink-0 flex-col gap-6 sm:flex">
                <BenefitCard>Nunca vuelvas a perder un lead</BenefitCard>
                <BenefitCard>Recupera 15-20 horas semanales</BenefitCard>
                <BenefitCard>Aumenta tu conversión 30-50%</BenefitCard>
                <BenefitCard>Cero conocimiento técnico</BenefitCard>
              </div>
            </div>
          </div>
        </section>

        {/* Pain section */}
        <section className="flex w-full flex-col items-center gap-6 bg-[#F1F3F4] px-6 py-12 dark:bg-[#2E3D4D] sm:py-20">
          <div className="flex w-full max-w-[1440px] flex-col gap-6 sm:px-[50px] md:px-[100px]">
            <h2
              className="text-center text-2xl font-bold leading-[30px] text-[#2E3D4D] dark:text-[#F1F3F4] md:text-[40px] md:leading-[48px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Estas creciendo, pero en tu día a día...
            </h2>
            <div className="flex flex-wrap justify-center gap-4 py-2 sm:gap-[50px] sm:py-6">
              {[
                {
                  icon: MessageSquare,
                  text: "Pierdes horas respondiendo mensajes",
                },
                {
                  icon: UserX,
                  text: "Pierdes leads y clientes por no contestar a tiempo",
                },
                { icon: Users, text: "Más audiencia = más caos" },
                {
                  icon: Flame,
                  text: "Te estás quemando escalando tu negocio",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex w-full max-w-[450px] items-center gap-4 rounded-[15px] bg-white p-5 shadow-[0px_8px_32px_rgba(0,0,0,0.08)] dark:bg-[#1A252F] sm:p-10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#52B1E1] dark:text-[#6BC3ED]">
                    <Icon className="h-9 w-9" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p
                    className="min-w-0 flex-1 text-base font-normal leading-6 text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="flex w-full flex-col items-center bg-white px-6 pb-12 pt-12 dark:bg-[#1A252F] sm:pb-20 sm:pt-20">
          <div className="flex w-full max-w-[1440px] flex-col items-center gap-4 sm:px-[50px]">
            <h2
              className="text-center text-2xl font-bold leading-[30px] text-[#2E3D4D] dark:text-[#F1F3F4] md:text-[40px] md:leading-[48px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Interactúa con los mensajes de todos tus canales
            </h2>
            <p
              className="max-w-3xl text-center text-base font-normal leading-6 text-[#848D8F] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Centraliza Instagram, WhatsApp, YouTube, TikTok, LinkedIn y formularios en un solo
              sistema automatizado.
            </p>
          </div>
          <div className="mt-6 flex w-full flex-col items-center gap-12 sm:mt-20 sm:gap-20 sm:px-[50px]">
            <picture className="w-full max-w-[1180px] dark:hidden">
              <source
                media="(min-width: 640px)"
                srcSet="/assets/content-creators/dashboard_desktop_light.webp"
              />
              <img
                src="/assets/content-creators/dashboard_mobile_light.webp"
                alt="Vista del sistema de mensajes unificados"
                width={1180}
                height={707}
                className="h-auto w-full rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)]"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <picture className="hidden w-full max-w-[1180px] dark:block">
              <source
                media="(min-width: 640px)"
                srcSet="/assets/content-creators/dashboard_desktop_dark.webp"
              />
              <img
                src="/assets/content-creators/dashboard_mobile_dark.webp"
                alt="Vista del sistema de mensajes unificados"
                width={1180}
                height={707}
                className="h-auto w-full rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)]"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="flex w-full max-w-[1200px] flex-col justify-center gap-10 px-0 sm:flex-row sm:flex-wrap sm:gap-16 sm:px-6">
              {[
                {
                  title: "0% Leads Perdidos",
                  body: "Captura automática desde redes, landing pages y formularios.",
                  icon: UserCheck,
                },
                {
                  title: "Respuestas veloces",
                  body: "Respuestas automáticas inteligentes que mantienen tu voz.",
                  icon: MessageSquare,
                },
                {
                  title: "Datos organizados",
                  body: "Segmentación y etiquetado automático para priorizar ventas.",
                  icon: Users,
                },
              ].map(({ title, body, icon: Icon }) => (
                <div
                  key={title}
                    className="flex w-full max-w-[325px] flex-col items-center gap-4 text-center sm:gap-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center text-[#52B1E1]">
                    <Icon className="h-9 w-9" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3
                    className="text-[20px] font-semibold leading-[26px] text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-2xl sm:leading-9"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-base font-normal leading-6 text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats + CTA */}
        <section className="flex w-full flex-col items-center gap-6 bg-[#F1F3F4] px-6 py-12 dark:bg-[#2E3D4D] sm:gap-12 sm:py-20">
          <h2
            className="max-w-[983px] text-center text-2xl font-bold leading-[30px] text-[#2E3D4D] dark:text-[#F1F3F4] md:text-[40px] md:leading-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>No es una herramienta más.</span>
            <br />
            <span>Son automatizaciones </span>
            <span className="text-[#52B1E1] dark:text-[#6BC3ED]">
              justo para creadores de contenido y consultores
            </span>
            <span> </span>
            <span className="text-[#52B1E1] dark:text-[#6BC3ED]">como tú</span>
          </h2>
          <div className="flex w-full max-w-[1200px] flex-col justify-center gap-6 sm:flex-row sm:flex-wrap sm:gap-12">
            {[
              { stat: "15–20h", label: "Ahorradas por semana" },
              { stat: "30–50%", label: "Aumento en conversión" },
              { stat: "200%", label: "ROI primer año" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="flex w-full max-w-[350px] flex-col items-center gap-2 text-center"
              >
                <p
                  className="text-2xl font-bold leading-[30px] text-[#2E3D4D] dark:text-[#F1F3F4] md:text-[40px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat}
                </p>
                <p
                  className="text-base font-normal leading-6 text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <CtaAccent className="w-full sm:w-auto" gaLabel="automatizaciones_stats_diagnostico" />
        </section>

        {/* Timeline */}
        <section className="flex w-full flex-col items-center gap-12 bg-white px-6 py-12 dark:bg-[#1A252F] md:px-12 md:py-[50px]">
          <h2
            className="max-w-[900px] text-center text-2xl font-bold leading-[30px] text-[#2E3D4D] dark:text-[#F1F3F4] md:text-[40px] md:leading-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>Automatizaciones que se implementan</span>
            <br />
            <span>en semanas, </span>
            <span className="text-[#52B1E1] dark:text-[#6BC3ED]">no meses</span>
          </h2>

          <div className="relative flex w-full max-w-[640px] flex-col gap-10 pl-2 md:pl-0">
            <div
              className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#52B1E1]/30 dark:bg-[#6BC3ED]/30 md:left-1/2 md:-ml-px"
              aria-hidden
            />
            {timeline.map((block, i) => (
              <div
                key={block.week}
                className={cn(
                  "relative grid gap-6 md:grid-cols-2 md:gap-10",
                  i % 2 === 1 && "md:[&>div:first-child]:order-2"
                )}
              >
                <div
                  className={cn(
                    "pl-10 md:pl-0",
                    i % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"
                  )}
                >
                  <div
                    className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#52B1E1] dark:bg-[#6BC3ED] md:left-1/2 md:-ml-2.5"
                    aria-hidden
                  />
                  <p
                    className="text-sm font-normal leading-5 text-[#52B1E1] dark:text-[#6BC3ED] sm:text-base sm:font-semibold sm:leading-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {block.week}
                  </p>
                  <h3
                    className="mt-1 text-[20px] font-semibold leading-[26px] text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-2xl sm:leading-9"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {block.title}
                  </h3>
                  <ul
                    className={cn(
                      "mt-4 space-y-2 text-base leading-6 text-[#848D8F] dark:text-[#F1F3F4] sm:text-lg sm:leading-7",
                      i % 2 === 0 ? "md:ml-auto md:max-w-md" : "md:max-w-md"
                    )}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {block.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block" aria-hidden />
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="flex w-full flex-col items-center gap-6 bg-[#F1F3F4] px-6 py-12 dark:bg-[#2E3D4D] sm:gap-8 sm:px-[50px] sm:py-[100px]">
          <h2
            className="text-center text-2xl font-bold leading-[30px] text-[#2E3D4D] dark:text-[#F1F3F4] md:text-[40px] md:leading-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Inversión inteligente en tu crecimiento
          </h2>
          <p
            className="max-w-2xl text-center text-base leading-6 text-[#848D8F] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Implementamos rápido. Optimizamos inteligente. Escalas con control.
          </p>
          <div className="flex w-full max-w-[696px] flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow-[0px_8px_32px_-6px_rgba(0,0,0,0.08)] dark:bg-[#1A252F] sm:gap-10 sm:p-14">
            <div className="flex flex-col items-center gap-2">
              <p
                className="text-[32px] font-bold leading-[38px] text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-[56px] sm:leading-[64px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                $50
              </p>
              <p
                className="text-center text-[20px] font-semibold leading-[26px] text-[#848D8F] dark:text-[#F1F3F4] sm:text-2xl sm:leading-9"
                style={{ fontFamily: "var(--font-display)" }}
              >
                mensual
              </p>
            </div>
            <div className="flex w-full max-w-[356px] flex-col gap-5">
              <CheckRow>Reportes de rendimiento</CheckRow>
              <CheckRow>Optimización continua (A/B testing)</CheckRow>
              <CheckRow>Soporte técnico limitado</CheckRow>
            </div>
            <div className="w-full rounded-2xl bg-linear-to-br from-[rgba(247,201,92,0.1)] to-[rgba(247,201,92,0.05)] p-5 sm:p-8">
              <p
                className="text-center text-[20px] font-semibold leading-[26px] text-[#2E3D4D] dark:text-[#F1F3F4] sm:text-2xl sm:leading-9"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Se paga solo durante los primeros <br />
                4 meses
              </p>
            </div>
            <div className="flex max-w-[355px] flex-col gap-2 text-center">
              <p
                className="text-base leading-6 text-[#848D8F] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Evolucionamos al ritmo de tu audiencia.
              </p>
              <p
                className="text-base leading-6 text-[#848D8F] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Nuevas necesidades = nuevas automatizaciones a medida.
              </p>
            </div>
            <CtaAccent className="w-full sm:w-auto" gaLabel="automatizaciones_pricing_diagnostico" />
          </div>
        </section>

        {/* FAQ */}
        <section className="flex w-full flex-col items-center gap-6 bg-white px-6 py-12 dark:bg-[#1A252F] sm:gap-12 sm:py-[100px] md:px-[100px]">
          <h2
            className="text-center text-2xl font-bold leading-[30px] text-[#2E3D4D] dark:text-[#F1F3F4] md:text-[40px] md:leading-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Preguntas frecuentes
          </h2>
          <div className="flex w-full max-w-[1440px] flex-col gap-4">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-[#F1F3F4] bg-[#F1F3F4] p-px dark:border-[#2E3D4D] dark:bg-[#2E3D4D]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-6 pt-6 text-left sm:px-8 sm:pt-8"
                    aria-expanded={open}
                    aria-controls={`auto-faq-${i}`}
                    id={`auto-faq-q-${i}`}
                  >
                    <span
                      className="flex-1 pb-6 text-[20px] font-semibold leading-[26px] text-[#2E3D4D] dark:text-[#F1F3F4] sm:pb-8 sm:text-2xl sm:leading-9"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#2E3D4D] transition-transform dark:border-[#F1F3F4]",
                        open && "rotate-180"
                      )}
                      aria-hidden
                    >
                      <ChevronDown className="h-5 w-5 text-[#2E3D4D] dark:text-[#F1F3F4]" />
                    </span>
                  </button>
                  <div
                    id={`auto-faq-${i}`}
                    role="region"
                    aria-labelledby={`auto-faq-q-${i}`}
                    className={cn(!open && "hidden")}
                  >
                    <div className="mx-6 h-px bg-[#52B1E1] dark:bg-[#6BC3ED] sm:mx-8" />
                    <p
                      className="px-6 pb-6 pt-4 text-base font-normal leading-6 text-[#2E3D4D] dark:text-[#F1F3F4] sm:px-8 sm:pb-8 sm:text-lg sm:leading-7"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="flex w-full flex-col items-center gap-6 bg-[#2E3D4D] px-6 py-12 text-center sm:gap-10 sm:px-[50px] sm:py-[100px]">
          <h2
            className="max-w-4xl text-2xl font-bold leading-[30px] text-white md:text-[40px] md:leading-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Escalar a 7 cifras no debería costarte tu energía
          </h2>
          <p
            className="max-w-[814px] text-base font-normal leading-6 text-white sm:text-lg sm:leading-7"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Si tienes entre 50K y 250K seguidores, facturas más de $50K al año y estás al borde del
            burnout por la carga administrativa, estás en el momento perfecto.
          </p>
          <CtaAccent className="w-full sm:w-auto" gaLabel="automatizaciones_final_diagnostico" />
        </section>

        {/* Footer strip (mockup style) */}
        <footer className="flex w-full flex-col items-center gap-2.5 bg-white px-6 py-12 dark:bg-[#1A252F] sm:py-[50px]">
          <a href="/" className="block">
            <img
              src="/assets/logo.png"
              alt="Zékiri"
              width={100}
              height={34}
              className="h-[34px] w-[100px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p
            className="text-sm leading-5 text-[#848D8F] dark:text-[#F1F3F4] sm:text-lg sm:leading-7"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Make it matter
          </p>
          <div className="mt-1 flex w-full max-w-[1440px] flex-col items-center gap-3 border-t border-[#52B1E1]/20 px-6 py-3 sm:px-[50px] sm:py-1.5 md:flex-row md:justify-between">
            <p
              className="text-sm leading-5 text-[#848D8F] dark:text-[#F1F3F4]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © 2026 Zékiri. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
              <a
                href="#"
                className="text-sm leading-5 text-[#848D8F] hover:underline dark:text-[#F1F3F4]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-sm leading-5 text-[#848D8F] hover:underline dark:text-[#F1F3F4]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Términos y condiciones
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
