import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { CtaButton } from "@/components/CtaButton";

const CARD_MIN_HEIGHT = "320px";

export function Testimonials() {
  const { language } = useLanguage();
  const { title, items } = messages[language].testimonials;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
  }, [emblaApi, updateScrollButtons]);

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center gap-12 self-stretch bg-surface py-12"
    >
      <h2 className="self-stretch text-center text-foreground text-3xl font-semibold leading-[64px] md:text-[48px]">
        {title}
      </h2>

      <div className="relative w-full max-w-container-carousel">
        <div
          ref={emblaRef}
          className="overflow-hidden select-none"
        >
          <div className="flex gap-6 md:gap-8">
            {items.map(({ quote, name, role }, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc((100%-2rem)/2)] lg:flex-[0_0_calc((100%-4rem)/3)]"
              >
                <article
                  className="flex h-full min-h-(--card-min-height) flex-col gap-8 rounded-[15px] border border-black/8 bg-white p-8 shadow-sm"
                  style={{ "--card-min-height": CARD_MIN_HEIGHT } as React.CSSProperties}
                >
                  <blockquote className="flex-1 text-foreground-strong text-lg font-normal leading-7">
                    {quote}
                  </blockquote>
                  <div className="flex flex-col gap-1 border-t border-primary pt-6">
                    <p className="text-foreground-strong text-base font-semibold leading-6">
                      {name}
                    </p>
                    <p className="text-muted-foreground text-sm font-normal leading-5">
                      {role}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {(canScrollPrev || canScrollNext) && (
          <div className="mt-6 flex justify-center gap-4 md:mt-8">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary bg-card text-primary shadow-sm transition hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary bg-card text-primary shadow-sm transition hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>

      <CtaButton />
    </section>
  );
}
