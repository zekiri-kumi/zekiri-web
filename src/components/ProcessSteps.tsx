import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { CtaButton } from "@/components/CtaButton";

export function ProcessSteps() {
  const { language } = useLanguage();
  const { title, steps } = messages[language].process;

  return (
    <section
      id="process"
      className="flex flex-col items-center justify-start gap-12 self-stretch bg-surface py-14"
    >
      <div className="flex justify-center self-stretch px-2.5">
        <h2 className="flex-1 text-center text-foreground text-3xl font-semibold leading-[64px] md:text-[48px]">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-12 self-stretch">
        <div className="flex flex-wrap content-start items-start justify-center gap-9 self-stretch">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex w-[250px] flex-col gap-4 rounded-[15px] bg-surface px-9 py-0"
            >
              <p className="text-primary text-[72px] font-medium leading-[88px]" aria-hidden>
                {step.number}
                <br />
              </p>
              <h3 className="text-foreground text-2xl font-medium leading-8">
                {step.title}
              </h3>
              <p className="text-foreground text-lg font-normal leading-7">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <CtaButton />
      </div>
    </section>
  );
}
