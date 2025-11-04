export type Language = "en" | "es";

export type Translations = {
  nav: { home: string; about: string; expertise: string; ai: string; contact: string };
  hero: { title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
  about: { title: string; paragraphs: string[] };
  expertise: { title: string; items: { title: string; body: string }[]; note: string };
  ai: { title: string; subtitle: string; items: { title: string; body: string }[]; cta: string };
  contact: { title: string; subtitle: string; form: { name: string; email: string; company: string; message: string; submit: string } };
  footer: { rights: string; links: { home: string; about: string; services: string; contact: string } };
};

export const messages: Record<Language, Translations> = {
  en: {
    nav: { home: "Home", about: "About", expertise: "Expertise", ai: "AI Services", contact: "Contact" },
    hero: {
      title: "We’ve been building exceptional software for over 12 years.",
      subtitle:
        "Over 50 successful projects across industries like imports, construction, marketing, travel, and more.",
      ctaPrimary: "Contact Us",
      ctaSecondary: "See How We Work",
    },
    about: {
      title: "Excellence, innovation, and commitment.",
      paragraphs: [
        "At Zekiri, we believe software development is not just about code—it’s about building solutions that transform businesses.",
        "Our team combines over 12 years of experience with a constant passion for innovation and quality.",
      ],
    },
    expertise: {
      title: "Our expertise spans multiple industries.",
      items: [
        { title: "Import Companies", body: "Stock control, invoicing, and logistics systems." },
        { title: "Construction", body: "Project management, budgeting, and resource planning." },
        { title: "Marketing Agencies", body: "Automation, reporting, and digital analytics." },
        { title: "Travel Agencies", body: "Bookings, itineraries, and online payments." },
        { title: "Entertainment", body: "Ticketing platforms and box office solutions." },
      ],
      note: "Each project strengthens our ability to adapt and deliver scalable, efficient solutions.",
    },
    ai: {
      title: "We transform your business with artificial intelligence.",
      subtitle:
        "We optimize processes, reduce costs, and enhance decision-making with AI solutions tailored to your business.",
      items: [
        { title: "Process Automation", body: "Boost operational efficiency with intelligent workflows." },
        { title: "Predictive Analytics", body: "Anticipate outcomes and make data-driven decisions." },
        { title: "Virtual Assistants", body: "Create smoother experiences with custom chatbots and assistants." },
        { title: "AI Integration", body: "Seamlessly bring AI into your existing systems." },
      ],
      cta: "Request a free consultation",
    },
    contact: {
      title: "Ready to boost your business with technology?",
      subtitle: "Tell us your idea or challenge, and let’s build the perfect solution together.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        submit: "Send message",
      },
    },
    footer: {
      rights: "All rights reserved.",
      links: { home: "Home", about: "About", services: "Services", contact: "Contact" },
    },
  },
  es: {
    nav: { home: "Inicio", about: "Sobre Nosotros", expertise: "Experiencia", ai: "Servicios de IA", contact: "Contacto" },
    hero: {
      title: "Desarrollamos software con excelencia desde hace más de 12 años",
      subtitle:
        "Más de 50 proyectos en distintos sectores: importadoras, construcción, marketing, viajes y más.",
      ctaPrimary: "Contáctanos",
      ctaSecondary: "Descubre cómo trabajamos",
    },
    about: {
      title: "Excelencia, innovación y compromiso.",
      paragraphs: [
        "En Zekiri creemos que el desarrollo de software no solo se trata de código, sino de construir soluciones que transforman negocios.",
        "Nuestro equipo combina más de 12 años de experiencia con una pasión constante por la innovación y la calidad.",
      ],
    },
    expertise: {
      title: "Nuestra experiencia abarca múltiples sectores.",
      items: [
        { title: "Importadoras", body: "Sistemas de control de stock, facturación y logística." },
        { title: "Construcción", body: "Gestión de obras, presupuestos y recursos." },
        { title: "Agencias de Marketing", body: "Automatización, reportes y analítica digital." },
        { title: "Agencias de Viajes", body: "Reservas, itinerarios y pagos online." },
        { title: "Entretenimiento", body: "Plataformas de ticketing y venta de entradas." },
      ],
      note: "Cada proyecto refuerza nuestra capacidad de adaptarnos y ofrecer soluciones escalables y eficientes.",
    },
    ai: {
      title: "Transformamos tu empresa con inteligencia artificial.",
      subtitle:
        "Optimizamos procesos, reducimos costos y potenciamos decisiones con soluciones de IA adaptadas a tus necesidades.",
      items: [
        { title: "Automatización de procesos", body: "Mejoramos la eficiencia operativa mediante flujos inteligentes." },
        { title: "Análisis predictivo", body: "Anticipa resultados y toma decisiones basadas en datos." },
        { title: "Asistentes virtuales", body: "Experiencias más fluidas con chatbots y asistentes personalizados." },
        { title: "Integración de IA", body: "Incorpora IA en tus sistemas existentes sin complicaciones." },
      ],
      cta: "Solicita una consultoría gratuita",
    },
    contact: {
      title: "¿Listo para impulsar tu empresa con tecnología?",
      subtitle: "Cuéntanos tu idea o desafío, y construyamos juntos la solución perfecta.",
      form: {
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        message: "Mensaje",
        submit: "Enviar mensaje",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      links: { home: "Inicio", about: "Sobre Nosotros", services: "Servicios", contact: "Contacto" },
    },
  },
};


