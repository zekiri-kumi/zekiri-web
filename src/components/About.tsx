import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export function About() {
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-foreground md:text-3xl"
        >
          {t.about.title}
        </motion.h2>
        <div className="mt-6 space-y-4 text-foreground/80 md:text-lg">
          {t.about.paragraphs.map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}


