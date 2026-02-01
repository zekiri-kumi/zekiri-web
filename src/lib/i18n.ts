export type Language = "en" | "es";

export type Translations = {
  nav: { home: string; whatWeDo: string; process: string; faq: string; contact: string; cta: string };
  banner: { text: string };
  hero: {
    titleHighlight: string;
    titleRest: string;
    bullets: string[];
    cta: string;
  };
  industriesStrip: { subtitle: string };
  quote: { prefix: string; highlight: string };
  painPoints: { items: string[] };
  testimonials: { title: string; cta: string; items: { quote: string; name: string; role: string }[] };
  whatWeAutomate: {
    title: string;
    cta: string;
    items: { title: string; body: string }[];
  };
  process: {
    title: string;
    cta: string;
    steps: { number: string; title: string; body: string }[];
  };
  faq: { title: string; items: { question: string; answer: string }[] };
  finalCta: { title: string; subtitle: string; cta: string };
  contact: {
    title: string;
    subtitle: string;
    form: { name: string; email: string; company: string; message: string; submit: string };
  };
  footer: {
    email: string;
    phone: string;
    location: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  meta: { title: string; description: string };
};

export const messages: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      whatWeDo: "What we automate",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      cta: "Get a quote",
    },
    banner: { text: "AI automation for operations — Free consultation. See how we help teams save 15+ hours per week." },
    hero: {
      titleHighlight: "AI Automation",
      titleRest: "that frees time and multiplies results",
      bullets: [
        "Automate from repetitive tasks to intelligent decisions",
        "Increase productivity and business efficiency",
      ],
      cta: "Schedule a free consultation",
    },
    industriesStrip: { subtitle: "Decades of experience across multiple industries" },
    quote: {
      prefix: "When operations grow faster than structure, decisions need ",
      highlight: "reliable data, not intuition.",
    },
    painPoints: {
      items: [
        "Repetitive processes and manual tasks that consume valuable hours",
        "High operational costs from human error and lack of standardization",
        "Systems that don't integrate and duplicate work",
        "Difficulty scaling without automation support",
      ],
    },
    testimonials: {
      title: "Companies that already automated their growth",
      cta: "Schedule a free consultation",
      items: [
        {
          quote: "We recovered 15 hours per person per week. ROI came in the first month.",
          name: "Laura Méndez",
          role: "COO • Fintech",
        },
        {
          quote: "Integration was invisible to the team. They saw results before noticing the change.",
          name: "Carlos Ruiz",
          role: "Director of Operations • E-commerce",
        },
        {
          quote: "It's not technology for technology's sake. It's a tool that solves real business problems.",
          name: "Ana Sofía Torres",
          role: "CEO • Consulting",
        },
      ],
    },
    whatWeAutomate: {
      title: "What we can automate",
      cta: "Schedule a free consultation",
      items: [
        {
          title: "Operations & Administration",
          body: "Approval automation, internal workflows, documentation and operational reporting",
        },
        {
          title: "Data Analysis & Reporting",
          body: "Automatic dashboards, smart alerts and trend prediction",
        },
        {
          title: "Communication & Support",
          body: "Smart chatbots, contextual responses and automated ticket management",
        },
        {
          title: "System Integration",
          body: "We connect CRM, ERP, communication tools and existing platforms",
        },
      ],
    },
    process: {
      title: "How our process works",
      cta: "Schedule a free consultation",
      steps: [
        {
          number: "01",
          title: "Diagnosis & Strategy",
          body: "We analyze your current processes and goals to define optimal automation points",
        },
        {
          number: "02",
          title: "Intelligent solution design",
          body: "We design flows and AI-based models tailored to your business and integrated with your current infrastructure",
        },
        {
          number: "03",
          title: "Implementation & rollout",
          body: "We deploy and train your team so adoption is smooth and measurable",
        },
        {
          number: "04",
          title: "Optimization & scale",
          body: "We monitor results and iterate so you can scale with confidence",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do I need technical knowledge to use these solutions?",
          answer: "No. Our solutions are delivered ready to use with support and training.",
        },
        {
          question: "In which industries do these automations apply?",
          answer: "From SMBs to large enterprises in sectors such as manufacturing, services, technology, finance, retail and more.",
        },
        {
          question: "Will AI replace my team?",
          answer: "AI empowers the team, speeds up repetitive tasks and frees time for high-value strategic work.",
        },
      ],
    },
    finalCta: {
      title: "Free time. Scale with AI. Decide better.",
      subtitle: "Schedule a free diagnosis and discover how intelligent automation can transform your operations.",
      cta: "Schedule a free consultation",
    },
    contact: {
      title: "Ready to boost your business with technology?",
      subtitle: "Tell us your idea or challenge, and let's build the perfect solution together.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        submit: "Send message",
      },
    },
    footer: {
      email: "contact@zekiri.com",
      phone: "+1 (234) 567-890",
      location: "Mexico City, Mexico",
      rights: "© 2026 Zékiri. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms and conditions",
    },
    meta: {
      title: "Zékiri — AI Automation",
      description: "AI automation that frees time and multiplies results. Schedule a free consultation.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      whatWeDo: "Qué podemos automatizar",
      process: "Proceso",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
      cta: "Solicitar cotización",
    },
    banner: { text: "Automatización con IA para operaciones — Consulta gratuita. Descubre cómo ayudamos a equipos a ahorrar 15+ horas por semana." },
    hero: {
      titleHighlight: "Automatización con IA",
      titleRest: "que libera tiempo y multiplica resultados",
      bullets: [
        "→ Automatiza desde tareas repetitivas hasta decisiones inteligentes",
        "→ Incrementa productividad y eficiencia empresarial",
      ],
      cta: "Agenda una consultoría gratuita",
    },
    industriesStrip: { subtitle: "Décadas de experiencia en múltiples industrias" },
    quote: {
      prefix: "Cuando la operación crece más rápido que la estructura, las decisiones necesitan ",
      highlight: "datos confiables, no intuición.",
    },
    painPoints: {
      items: [
        "Procesos repetitivos y tareas manuales que consumen horas valiosas",
        "Costos operativos altos por errores humanos y falta de estandarización",
        "Sistemas que no se integran y que duplican el trabajo",
        "Dificultad para escalar sin automatización de apoyo",
      ],
    },
    testimonials: {
      title: "Empresas que ya automatizaron su crecimiento",
      cta: "Agenda una consultoría gratuita",
      items: [
        {
          quote: "Recuperamos 15 horas semanales por persona. El ROI se dio en el primer mes.",
          name: "Laura Méndez",
          role: "COO • Fintech",
        },
        {
          quote: "La integración fue invisible para el equipo. Empezaron a ver resultados antes de darse cuenta del cambio.",
          name: "Carlos Ruiz",
          role: "Director de Operaciones • E-commerce",
        },
        {
          quote: "No es tecnología por tecnología. Es una herramienta que resuelve problemas reales de negocio.",
          name: "Ana Sofía Torres",
          role: "CEO • Consultoría",
        },
      ],
    },
    whatWeAutomate: {
      title: "Qué podemos automatizar",
      cta: "Agenda una consultoría gratuita",
      items: [
        {
          title: "Operaciones & Administración",
          body: "Automatización de aprobaciones, workflows internos, generación de documentación y reportes operativos",
        },
        {
          title: "Análisis de Datos & Reporting",
          body: "Dashboards automáticos, alertas inteligentes y predicción de tendencias",
        },
        {
          title: "Comunicación & Soporte",
          body: "Chatbots inteligentes, respuestas contextuales y gestión automática de tickets",
        },
        {
          title: "Integración de Sistemas",
          body: "Conectamos CRM, ERP, herramientas de comunicación y plataformas existentes",
        },
      ],
    },
    process: {
      title: "Cómo funciona nuestro proceso",
      cta: "Agenda una consultoría gratuita",
      steps: [
        {
          number: "01",
          title: "Diagnóstico & Estrategia",
          body: "Realizamos un análisis profundo de tus procesos actuales y tus objetivos para definir los puntos óptimos de automatización",
        },
        {
          number: "02",
          title: "Diseño de solución inteligente",
          body: "Diseñamos flujos y modelos basados en IA adaptados a tu modelo de negocio e integrados a tu infraestructura actual",
        },
        {
          number: "03",
          title: "Implementación y despliegue",
          body: "Desplegamos y capacitamos a tu equipo para que la adopción sea fluida y medible",
        },
        {
          number: "04",
          title: "Optimización y escala",
          body: "Monitoreamos resultados e iteramos para que puedas escalar con confianza",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Es necesario tener conocimientos técnicos para usar estas soluciones?",
          answer: "No, nuestras soluciones se entregan 'listas para usar' con soporte y capacitación.",
        },
        {
          question: "¿En qué industrias aplican estas automatizaciones?",
          answer: "Desde pymes hasta empresas grandes en sectores como manufactura, servicios, tecnología, finanzas, comercio y más.",
        },
        {
          question: "¿La IA reemplazará a mis colaboradores?",
          answer: "La IA potencia al equipo, agiliza las tareas repetitivas y libera tiempo para actividades estratégicas de alto valor.",
        },
      ],
    },
    finalCta: {
      title: "Libera tiempo. Escala con IA. Decide mejor.",
      subtitle: "Agenda un diagnóstico gratuito y descubre cómo la automatización inteligente puede transformar tu operación.",
      cta: "Agenda una consultoría gratuita",
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
      email: "contacto@zekiri.com",
      phone: "+1 (234) 567-890",
      location: "Ciudad de México, México",
      rights: "© 2026 Zékiri. Todos los derechos reservados.",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
    },
    meta: {
      title: "Zékiri — Automatización con IA",
      description: "Automatización con IA que libera tiempo y multiplica resultados. Agenda una consultoría gratuita.",
    },
  },
};
