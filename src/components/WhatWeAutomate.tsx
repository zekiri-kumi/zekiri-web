import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { CtaButton } from "@/components/CtaButton";
import {
  LayoutGrid,
  BarChart3,
  MessageSquare,
  Plug,
} from "lucide-react";

const icons = [LayoutGrid, BarChart3, MessageSquare, Plug];

export function WhatWeAutomate() {
  const { language } = useLanguage();
  const { title, items } = messages[language].whatWeAutomate;

  return (
    <section
      id="what-we-automate"
      className="flex flex-col items-center justify-start gap-12 self-stretch py-12"
    >
      <div className="flex justify-center self-stretch px-2.5">
        <h2 className="text-center text-foreground text-3xl font-semibold leading-[64px] md:text-[48px]">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-12 self-stretch">
        <div className="mx-auto w-full max-w-container-narrow">
          <div className="grid grid-cols-1 gap-9 self-stretch md:grid-cols-2">
            {items.map((item, i) => {
            const Icon = icons[i] ?? LayoutGrid;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-[15px] border border-primary bg-card p-9"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-primary">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-foreground text-2xl font-medium leading-8">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-foreground text-lg font-normal leading-7">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
        <CtaButton />
      </div>
    </section>
  );
}
