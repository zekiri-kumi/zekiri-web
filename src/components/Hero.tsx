import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { CtaButton } from "@/components/CtaButton";
import { motion } from "framer-motion";
import { trackButtonClick } from "@/lib/gtag-click";

export function Hero() {
  const { language } = useLanguage();
  const t = messages[language].hero;
  const projectsLabel = messages[language].nav.projects;

  return (
    <section
      id="home"
      className="flex w-full flex-col gap-10 self-stretch bg-surface px-6 pb-[73px] pt-6"
    >
      <div className="flex items-center justify-between self-stretch">
        <div className="h-[33px] w-[105px]">
          <img
            src="/assets/logo.png"
            alt="Zékiri — AI Automation"
            width={105}
            height={34}
            className="h-9 w-auto"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <a
          href="/proyectos"
          className="text-sm font-medium text-foreground/80 hover:text-foreground"
          onClick={() => trackButtonClick("home_nav_projects")}
        >
          {projectsLabel}
        </a>
      </div>
      <div className="flex flex-col items-center gap-10 self-stretch">
        <div className="flex flex-col items-center gap-10 self-stretch">
          <h1 className="text-center self-stretch">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary text-4xl font-semibold leading-tight md:text-[72px] md:leading-[88px]"
            >
              {t.titleHighlight}
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground text-4xl font-semibold leading-tight md:text-[72px] md:leading-[88px]"
            >
              {t.titleRest}
            </motion.span>
          </h1>
          <p className="self-stretch text-center text-foreground text-lg font-medium leading-8 md:text-xl">
            {t.bullets[0]}
            <br />
            {t.bullets[1]}
          </p>
        </div>
        <CtaButton gaLabel="landing_hero_cta" />
      </div>
    </section>
  );
}
