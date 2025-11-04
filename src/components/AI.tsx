import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AI() {
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <section id="ai" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{t.ai.title}</h2>
        <p className="mt-2 text-foreground/80 md:text-lg">{t.ai.subtitle}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.ai.items.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{item.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#contact">
            <Button size="lg">{t.ai.cta}</Button>
          </a>
        </div>
      </div>
    </section>
  );
}


