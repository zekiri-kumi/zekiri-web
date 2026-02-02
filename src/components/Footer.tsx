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
    <footer className="flex flex-col items-center justify-start gap-12 self-stretch py-12">
      <img
        src="/assets/logo.png"
        alt="Zékiri"
        width={100}
        height={34}
        className="h-[34px] w-[100px] object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="flex items-center justify-center gap-6 self-stretch">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
            aria-label={label}
          >
            <span className="sr-only">{label}</span>
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <div className="flex flex-wrap content-start items-start justify-center gap-24 self-stretch">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-200/20 to-primary/20 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-normal leading-[21px] text-black/50">
              Email
            </span>
            <a
              href={`mailto:${t.email}`}
              className="text-base font-normal leading-6 text-black/70 hover:underline"
            >
              {t.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-200/20 to-primary/20 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-normal leading-[21px] text-black/50">
              {language === "es" ? "Teléfono" : "Phone"}
            </span>
            <a
              href={`tel:${t.phone.replace(/\s/g, "")}`}
              className="text-base font-normal leading-6 text-black/70 hover:underline"
            >
              {t.phone}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-200/20 to-primary/20 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-normal leading-[21px] text-black/50">
              {language === "es" ? "Ubicación" : "Location"}
            </span>
            <span className="text-base font-normal leading-6 text-black/70">
              {t.location}
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center border-t border-primary/20 px-8 py-1.5">
        <div className="flex w-full items-center justify-between self-stretch">
          <p className="flex-1 text-sm font-normal leading-[21px] text-black/60">
            {t.rights}
          </p>
          <div className="flex items-start gap-6">
            <a
              href="#"
              className="text-sm font-normal leading-[21px] text-black/60 hover:underline"
            >
              {t.privacy}
            </a>
            <a
              href="#"
              className="text-sm font-normal leading-[21px] text-black/60 hover:underline"
            >
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
