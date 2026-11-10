import { CONTACT_EMAIL, CONTACT_HREF, NAV_LINKS } from "@/components/proyectos/ProjectsChrome";
import { CONTACT_LOCATION, CONTACT_WHATSAPP } from "@/lib/home-content";
import { SERVICES } from "@/lib/services-content";
import styles from "./HomePage.module.css";

const FOOTER_LINKS = [...NAV_LINKS, { href: CONTACT_HREF, label: "Contacto" }];

export function HomeFooter() {
  return (
    <footer className={styles["home__footer"]}>
      <div className={styles["home__footer-inner"]}>
        <div>
          <img
            src="/assets/logo-w.png"
            alt="Zékiri"
            width={105}
            height={34}
            className={styles["home__footer-logo"]}
            loading="lazy"
            decoding="async"
          />
          <p className={styles["home__footer-tagline"]}>
            Desarrollo de software a medida y automatización para empresas en Bolivia.
          </p>
        </div>
        <nav aria-label="Servicios">
          <h2 className={styles["home__footer-title"]}>Servicios</h2>
          <ul className={styles["home__footer-list"]}>
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <a href={`/servicios/${service.slug}`}>{service.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Pie de página">
          <h2 className={styles["home__footer-title"]}>Sitio</h2>
          <ul className={styles["home__footer-list"]}>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className={styles["home__footer-title"]}>Contacto</h2>
          <ul className={styles["home__footer-list"]}>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={CONTACT_WHATSAPP.href} target="_blank" rel="noopener noreferrer">
                WhatsApp {CONTACT_WHATSAPP.label}
              </a>
            </li>
            <li>{CONTACT_LOCATION}</li>
          </ul>
        </div>
        <p className={styles["home__footer-legal"]}>
          © {new Date().getFullYear()} Zékiri. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
