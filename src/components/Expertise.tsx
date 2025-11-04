import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Boxes, Building2, Factory, Ticket, Plane, LineChart } from "lucide-react";

const icons = [Factory, Building2, LineChart, Plane, Ticket];

export function Expertise() {
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <section id="expertise" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{t.expertise.title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.expertise.items.map((item, idx) => {
            const Icon = icons[idx % icons.length] ?? Boxes;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card>
                  <CardHeader className="flex-row items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{item.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-6 text-foreground/80">{t.expertise.note}</p>
      </div>
    </section>
  );
}


