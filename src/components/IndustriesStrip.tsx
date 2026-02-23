import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

const BRAND_LOGOS = [
  "centroMovil.svg",
  "clicket.webp",
  "cocredito.png",
  "dud.jpg",
  "arrieta.png",
  "kovar.jpg",
  "panalfresh.png",
  "nume",
  "pista8.png",
  "qfix.jpg",
  "kumi.png",
  "softruck.png",
  "nume.svg"
] as const;

function LogoItem({ src }: { src: string }) {
  return (
    <div
      className="flex h-12 shrink-0 items-center justify-center"
      aria-hidden
    >
      <img
        src={src}
        alt=""
        className="h-full w-auto max-w-32 object-contain object-center opacity-90"
        style={{
          filter: "grayscale(100%) brightness(0.85) contrast(1.1)",
        }}
      />
    </div>
  );
}

function MarqueeRow({
  logos,
  direction,
}: {
  logos: readonly string[];
  direction: "right" | "left";
}) {
  const duplicated = [...logos, ...logos];
  const animation =
    direction === "right" ? "industries-marquee 40s linear infinite" : "industries-marquee-reverse 40s linear infinite";
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex items-center gap-16 px-6"
        style={{
          width: "max-content",
          animation,
        }}
      >
        {duplicated.map((src, idx) => (
          <LogoItem key={`${src}-${idx}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export function IndustriesStrip() {
  const { language } = useLanguage();
  const subtitle = messages[language].industriesStrip.subtitle;

  const logoUrls = BRAND_LOGOS.map(
    (name) => `/assets/brands/${name}`,
  );

  return (
    <section className="flex flex-col items-center justify-center self-stretch py-1.5">
      <div className="flex w-full max-w-container-wide justify-center self-stretch mx-auto">
        <p className="text-center text-base font-normal leading-8 text-muted-text">
          {subtitle}
        </p>
      </div>
      {/* Desktop: single row scrolling right */}
      <div className="hidden w-full overflow-hidden py-8 md:block">
        <MarqueeRow logos={logoUrls} direction="right" />
      </div>
      {/* Mobile: two rows — top right, bottom left */}
      <div className="flex w-full flex-col gap-6 py-8 md:hidden">
        <MarqueeRow logos={logoUrls} direction="right" />
        <MarqueeRow logos={logoUrls} direction="left" />
      </div>
    </section>
  );
}
