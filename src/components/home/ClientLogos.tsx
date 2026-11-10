import type { CSSProperties } from "react";
import { CLIENT_LOGOS } from "@/lib/home-content";
import styles from "./HomePage.module.css";

export function ClientLogos() {
  return (
    <section className={styles["home__logos"]} aria-labelledby="home-logos-title">
      <div className={styles["home__logos-inner"]} data-reveal>
        <h2 id="home-logos-title" className={styles["home__logos-label"]}>
          Empresas con las que hemos trabajado
        </h2>
        <ul className={styles["home__logos-list"]}>
          {CLIENT_LOGOS.map((logo) => (
            <li
              key={logo.src}
              data-tone={logo.tone}
              style={{ "--logo-zoom": logo.zoom ?? 1 } as CSSProperties}
            >
              <img src={logo.src} alt={logo.name} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
