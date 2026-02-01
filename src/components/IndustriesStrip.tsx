import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

const LOGO_PLACEHOLDER_COUNT = 8;

function LogoItem() {
  return (
    <div
      className="flex h-12 shrink-0 items-center gap-3"
      aria-hidden
    >
      <div className="h-11 w-11 shrink-0 rounded bg-skeleton" />
      <div className="h-6 w-24 rounded bg-skeleton" />
    </div>
  );
}

export function IndustriesStrip() {
  const { language } = useLanguage();
  const subtitle = messages[language].industriesStrip.subtitle;

  const logos = Array.from({ length: LOGO_PLACEHOLDER_COUNT }, (_, i) => i);

  return (
    <section className="flex flex-col items-center justify-center self-stretch py-1.5">
      <div className="flex w-full max-w-container-wide justify-center self-stretch mx-auto">
        <p className="text-center text-base font-normal leading-8 text-muted-text">
          {subtitle}
        </p>
      </div>
      <div className="w-full overflow-hidden py-8">
        <div
          className="flex items-center gap-16 px-6"
          style={{
            width: "max-content",
            animation: "industries-marquee 40s linear infinite",
          }}
        >
          {[...logos, ...logos].map((i, idx) => (
            <LogoItem key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
