import type { ProjectScreen } from "@/lib/proyectos-content";
import styles from "./ProyectosPage.module.css";

type FrameProps = {
  screen: ProjectScreen;
  className?: string;
  isPriority?: boolean;
};

function ScreenImage({ screen, isPriority }: FrameProps) {
  return (
    <img
      src={screen.src}
      alt={screen.caption}
      width={screen.width}
      height={screen.height}
      loading={isPriority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function BrowserFrame({ screen, className, isPriority }: FrameProps) {
  return (
    <div className={[styles["projects__browser"], className].filter(Boolean).join(" ")}>
      <div className={styles["projects__browser-bar"]} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <ScreenImage screen={screen} isPriority={isPriority} />
    </div>
  );
}

export function PhoneFrame({ screen, className, isPriority }: FrameProps) {
  return (
    <div className={[styles["projects__phone"], className].filter(Boolean).join(" ")}>
      <ScreenImage screen={screen} isPriority={isPriority} />
    </div>
  );
}

export function DeviceFrame(props: FrameProps) {
  return props.screen.device === "desktop" ? <BrowserFrame {...props} /> : <PhoneFrame {...props} />;
}

/** Desktop screen with a phone overlapping it, or a row of phones when the project is mobile only. */
export function ProjectShowcase({
  screens,
  isPriority,
  maxPhones = 3,
}: {
  screens: readonly ProjectScreen[];
  isPriority?: boolean;
  maxPhones?: number;
}) {
  const desktop = screens.find((screen) => screen.device === "desktop");
  const phones = screens.filter((screen) => screen.device === "mobile");

  if (!desktop) {
    return (
      <div className={styles["projects__showcase-phones"]}>
        {phones.slice(0, maxPhones).map((screen) => (
          <PhoneFrame key={screen.src} screen={screen} isPriority={isPriority} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles["projects__showcase"]}>
      <BrowserFrame screen={desktop} isPriority={isPriority} />
      {phones[0] && (
        <PhoneFrame
          screen={phones[0]}
          className={styles["projects__showcase-float"]}
          isPriority={isPriority}
        />
      )}
    </div>
  );
}
