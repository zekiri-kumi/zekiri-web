import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Hero() {
  // Liskov Substitution: Consumers rely only on the public contract.
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <section
      id="home"
      className="border-b border-border bg-gradient-to-br from-[#00b1e1]/20 via-transparent to-[#2c3e51]/10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight md:text-5xl text-foreground"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-foreground/80 md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact">
              <Button size="lg">{t.hero.ctaPrimary}</Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline">
                {t.hero.ctaSecondary}
              </Button>
            </a>
          </motion.div>
        </div>
        <div className="relative h-56 w-full md:h-80">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#00b1e1] to-[#2c3e51]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute inset-4 rounded-lg border-2 border-primary/40"
          />
        </div>
      </div>
    </section>
  );
}


