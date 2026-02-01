import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { CtaButton } from "@/components/CtaButton";
import {
  Repeat,
  TrendingUp,
  GitBranch,
  Scale,
} from "lucide-react";

const icons = [Repeat, TrendingUp, GitBranch, Scale];

export function PainPoints() {
  const { language } = useLanguage();
  const items = messages[language].painPoints.items;

  return (
    <section className="flex flex-col items-center justify-center gap-12 self-stretch py-12">
      <div className="grid w-full max-w-container-narrow grid-cols-1 gap-12 md:grid-cols-2">
        {items.map((text, i) => {
          const Icon = icons[i] ?? Repeat;
          return (
            <div
              key={i}
              className="flex flex-wrap content-start items-start gap-4 rounded-[15px] border border-primary bg-card p-10"
            >
              <div className="flex shrink-0 items-center justify-center text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="min-w-0 flex-1 text-foreground text-lg font-normal leading-7">
                {text}
              </p>
            </div>
          );
        })}
      </div>
      <CtaButton />
    </section>
  );
}
