import { CONTACT_EMAIL } from "@/components/proyectos/ProjectsChrome";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { trackButtonClick } from "@/lib/gtag-click";
import { CONTACT_LOCATION, CONTACT_WHATSAPP } from "@/lib/home-content";
import { useContactForm, type ContactFormStatus } from "./hooks/useContactForm";
import { revealOrder } from "./hooks/useScrollReveal";
import styles from "./HomePage.module.css";

function FormStatus({ status }: { status: ContactFormStatus }) {
  if (status.type === "sent") {
    return (
      <p role="status" className={`${styles["home__form-status"]} ${styles["home__form-status--sent"]}`}>
        Recibimos tu mensaje. Te respondemos al email que nos dejaste.
      </p>
    );
  }
  if (status.type === "error") {
    return (
      <p role="alert" className={`${styles["home__form-status"]} ${styles["home__form-status--error"]}`}>
        {status.message}
      </p>
    );
  }
  return null;
}

export function HomeContact() {
  const { status, handleSubmit } = useContactForm();
  const isSending = status.type === "sending";

  return (
    <section id="contact" className={styles["home__contact"]} aria-labelledby="home-contact-title">
      <div className={styles["home__contact-inner"]}>
        <div data-reveal>
          <h2 id="home-contact-title" className={styles["home__contact-title"]}>
            ¿Tu operación todavía depende de planillas, mensajes y memoria?
          </h2>
          <p className={styles["home__contact-text"]}>
            El primer paso es un diagnóstico sin costo. Cuéntanos cómo trabaja tu equipo hoy y te
            decimos qué conviene ordenar primero y qué se puede automatizar.
          </p>
          <dl className={styles["home__contact-data"]}>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a
                  href={CONTACT_WHATSAPP.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackButtonClick("home_contact_whatsapp")}
                >
                  {CONTACT_WHATSAPP.label}
                </a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => trackButtonClick("home_contact_email")}
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt>Dónde estamos</dt>
              <dd>{CONTACT_LOCATION}</dd>
            </div>
          </dl>
        </div>

        <form
          className={styles["home__form"]}
          onSubmit={handleSubmit}
          data-reveal
          style={revealOrder(1)}
        >
          <div className={styles["home__field"]}>
            <label htmlFor="contact-name">Nombre</label>
            <input id="contact-name" name="name" autoComplete="name" required />
          </div>
          <div className={styles["home__field"]}>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className={`${styles["home__field"]} ${styles["home__field--wide"]}`}>
            <label htmlFor="contact-company">
              Empresa <span>(opcional)</span>
            </label>
            <input id="contact-company" name="company" autoComplete="organization" />
          </div>
          <div className={`${styles["home__field"]} ${styles["home__field--wide"]}`}>
            <label htmlFor="contact-message">¿Qué proceso quieres ordenar?</label>
            <textarea id="contact-message" name="message" required />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className={`${projectStyles["projects__button"]} ${styles["home__cta"]} ${styles["home__submit"]}`}
          >
            {isSending ? "Enviando…" : "Pedir diagnóstico"}
          </button>
          <FormStatus status={status} />
        </form>
      </div>
    </section>
  );
}
