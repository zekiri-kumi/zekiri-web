import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const socialLinks = [
  { href: "#", label: "LinkedIn", Icon: Linkedin },
  { href: "#", label: "Twitter", Icon: Twitter },
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: "#", label: "Facebook", Icon: Facebook },
] as const;

export function Footer() {
  const { language } = useLanguage();
  const t = messages[language].footer;

  return (
    <footer className="flex flex-col items-center justify-start gap-5 self-stretch px-6 py-6 md:gap-12 md:py-12">
      <img
        src="/assets/logo.png"
        alt="Zékiri"
        width={90}
        height={31}
        className="h-[31px] w-[90px] object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="flex h-[42px] items-center justify-center gap-6 self-stretch">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#06B6E3] text-white transition-opacity hover:opacity-90"
            aria-label={label}
          >
            <span className="sr-only">{label}</span>
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <div className="flex flex-wrap items-start justify-center gap-5 self-stretch md:gap-24">
        <div className="flex min-w-0 max-w-[190px] flex-1 basis-full items-start gap-3 sm:basis-auto sm:flex-initial">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex min-w-0 flex-col gap-1.5">
            <span className="text-xs font-normal leading-[21px] text-muted-foreground">
              Email
            </span>
            <a
              href={`mailto:${t.email}`}
              className="text-xs font-normal leading-6 text-foreground/80 hover:underline"
            >
              {t.email}
            </a>
          </div>
        </div>
        <div className="flex min-w-0 max-w-[190px] flex-1 basis-full items-start gap-3 sm:basis-auto sm:flex-initial">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div className="flex min-w-0 flex-col gap-1.5">
            <span className="text-xs font-normal leading-[21px] text-muted-foreground">
              {language === "es" ? "Teléfono" : "Phone"}
            </span>
            <a
              href={`tel:${t.phone.replace(/\s/g, "")}`}
              className="text-xs font-normal leading-6 text-foreground/80 hover:underline"
            >
              {t.phone}
            </a>
          </div>
        </div>
        <div className="flex min-w-0 max-w-[190px] flex-1 basis-full items-start gap-3 sm:basis-auto sm:flex-initial">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-xs font-normal leading-[21px] text-muted-foreground">
              {language === "es" ? "Ubicación" : "Location"}
            </span>
            <span className="text-xs font-normal leading-4 text-foreground/80">
              {t.location}
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[253px] flex-col items-center gap-2.5 border-t border-primary/20 py-4 text-center md:max-w-none md:flex-row md:justify-between md:px-8 md:py-1.5 md:text-left">
        <p className="text-xs font-normal leading-4 text-muted-foreground md:flex-1">
          {t.rights}
        </p>
        <div className="flex flex-col items-center gap-2.5 md:flex-row md:gap-6 md:items-start">
          <a
            href="#"
            className="text-xs font-normal leading-4 text-muted-foreground hover:underline"
          >
            {t.privacy}
          </a>
          <a
            href="#"
            className="text-xs font-normal leading-4 text-muted-foreground hover:underline"
          >
            {t.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
