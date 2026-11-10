import { useRef } from "react";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeFooter } from "@/components/home/HomeFooter";
import homeStyles from "@/components/home/HomePage.module.css";
import { HomeProcess } from "@/components/home/HomeProcess";
import { useScrollReveal } from "@/components/home/hooks/useScrollReveal";
import { ProjectsNav } from "@/components/proyectos/ProjectsChrome";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { SERVICES } from "@/lib/services-content";
import { ServiceCases } from "./ServiceCases";
import { ServiceDeliverables } from "./ServiceDeliverables";
import { ServiceHero } from "./ServiceHero";

export function ServicePage({ slug }: { slug: string }) {
  const service = SERVICES.find((candidate) => candidate.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);

  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal(pageRef);

  return (
    <div ref={pageRef} className={`${projectStyles["projects"]} ${homeStyles["home"]}`}>
      <ProjectsNav current="services" gaPrefix="service" />
      <main>
        <ServiceHero service={service} />
        <ServiceDeliverables service={service} />
        <ServiceCases service={service} />
        <HomeProcess />
        <HomeFaq
          heading={`Lo que nos preguntan sobre ${service.name.toLowerCase()}`}
          items={service.faqs}
        />
        <HomeContact />
      </main>
      <HomeFooter />
    </div>
  );
}
