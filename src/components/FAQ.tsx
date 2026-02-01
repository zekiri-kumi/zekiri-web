import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { language } = useLanguage();
  const { title, items } = messages[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-start gap-12 self-stretch overflow-hidden bg-white px-6 py-12 md:px-[88px]"
    >
      <h2 className="text-center text-foreground text-3xl font-semibold leading-9 md:text-[48px]">
        {title}
      </h2>
      <div className="flex w-full max-w-container-content mx-auto flex-col gap-4 self-stretch">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-transparent bg-surface"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-8 py-8 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="text-foreground text-2xl font-medium leading-8">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                >
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={cn(
                  "overflow-hidden border-t border-primary bg-surface transition-[height]",
                  isOpen ? "visible" : "hidden"
                )}
              >
                <p className="px-8 pb-6 pt-4 text-foreground text-lg font-normal leading-7">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
