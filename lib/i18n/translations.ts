import type { Locale } from "./types";

export type TranslationSchema = {
  profile: {
    role: string;
    tagline: string;
    location: string;
    availability: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    downloadCv: string;
    navAria: string;
    socialAria: string;
  };
  sections: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  about: {
    paragraphs: string[];
    education: string;
    languagesLabel: string;
    languages: string;
  };
  experiences: {
    period: string;
    title: string;
    description: string;
  }[];
  projects: { description: string }[];
  skillCategories: { title: string }[];
  stats: { label: string }[];
  education: { title: string }[];
  contact: {
    heading: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    gmailReconnect: string;
  };
  projectsUi: {
    featured: string;
    code: string;
    demo: string;
    techAria: string;
    sectionAria: string;
  };
  experienceUi: {
    techAria: string;
    sectionAria: string;
  };
  footer: {
    builtWith: string;
    and: string;
    deployedOn: string;
  };
  language: {
    switchTo: string;
    es: string;
    en: string;
  };
};

export const translations: Record<Locale, TranslationSchema> = {
  es: {
    profile: {
      role: "Full Stack Developer",
      tagline:
        "Desarrollo aplicaciones web y mobile con React, TypeScript y Node.js. Enfoque en frontend moderno, performance y equipos remotos.",
      location: "Argentina · Remoto",
      availability: "Disponible",
    },
    nav: {
      about: "Acerca",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      downloadCv: "Descargar CV",
      navAria: "Navegación en página",
      socialAria: "Enlaces sociales",
    },
    sections: {
      about: "Acerca de mi",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    about: {
      paragraphs: [
        "Soy Full Stack Developer con más de 4 años de experiencia profesional construyendo aplicaciones web y mobile. Me especializo en React, TypeScript y Node.js, con fuerte foco en frontend moderno, performance y diseño responsive.",
        "He participado en el desarrollo de productos de punta a punta: interfaces con React, backends en Node.js, integración de APIs y bases de datos. También he trabajado con soluciones que incorporan IA cuando el producto lo requiere, siempre en equipos remotos y entornos ágiles.",
        "Mi experiencia abarca desde productos fintech y trading hasta aplicaciones mobile con React Native. Busco roles Frontend, Backend o Full Stack en equipos remotos.",
      ],
      education: "Educación",
      languagesLabel: "Idiomas:",
      languages: "Español (nativo), Inglés (A2)",
    },
    experiences: [
      {
        period: "Jun 2023 — Actualidad",
        title: "Full Stack Developer",
        description:
          "Desarrollo de plataformas web impulsadas con inteligencia artificial. Implementación frontend con React (Remix) y TypeScript, backend con Node.js y Prisma, integración de APIs y lógica de negocio en entorno remoto y ágil.",
      },
      {
        period: "Dic 2022 — Jun 2023",
        title: "Frontend Developer",
        description:
          "Desarrollo de wallet de criptomonedas con React y TypeScript. Integración de APIs y diseño responsive para una experiencia de usuario fluida en trading.",
      },
      {
        period: "Feb 2021 — Jun 2022",
        title: "Frontend Developer",
        description:
          "Desarrollo de aplicación mobile con React Native y Expo. Implementación de interfaces responsivas y flujos de usuario para servicios de entrega.",
      },
    ],
    projects: [
      {
        description:
          "Asesoría legal laboral con IA, RAG y embeddings vectoriales. Flujos multiagente en n8n para analizar casos, generar documentos y entregar insights legales en tiempo real con NLP para despachos y sindicatos.",
      },
      {
        description:
          "Panel web para clubes de pádel: pistas, reservas, jugadores y equipo. Calendario operativo, pagos con Stripe, torneos, escuela, inventario y cierre de caja. React, TypeScript y Tailwind con API Express y Supabase.",
      },
      {
        description:
          "App mobile para encontrar partidos y reservar pistas de pádel. Partidos abiertos, ligas competitivas, torneos, pagos Stripe, búsqueda por ubicación, chat y matching por nivel con React Native y Expo.",
      },
      {
        description:
          "Gestión de portafolio inmobiliario con IA, RAG y embeddings. Reportes automatizados, mantenimiento predictivo y flujos multiagente en n8n para analizar propiedades y mejorar decisiones operativas.",
      },
      {
        description:
          "Asesor de marketing con IA para optimizar estrategias digitales. Sugerencias de contenido, análisis de campañas e insights en tiempo real para automatizar decisiones y flujos de trabajo comerciales.",
      },
      {
        description:
          "Análisis de criptomonedas con landing, dashboard en vivo y gráfico de burbujas en D3.js. Visualiza volumen, tendencias y métricas con física, colisiones y una interfaz moderna, rápida y responsiva.",
      },
      {
        description:
          "E-commerce de zapatillas importadas con pagos PayPal y Stripe, emails vía Nodemailer, carrito y checkout seguro. Diseño responsivo orientado a una experiencia de compra clara y confiable.",
      },
      {
        description:
          "App mobile de entregas con React Native y Expo. Seguimiento en tiempo real, notificaciones push e interfaz intuitiva para gestionar paquetes y coordinar logística de punta a punta.",
      },
    ],
    skillCategories: [
      { title: "Frontend" },
      { title: "Backend & Data" },
      { title: "Mobile & IA" },
      { title: "Prácticas" },
    ],
    stats: [
      { label: "Años de Experiencia" },
      { label: "Proyectos Completados" },
      { label: "Tecnologías" },
      { label: "Empresas Tech" },
    ],
    education: [
      { title: "Full Stack Web Developer" },
      { title: "React & TypeScript" },
      { title: "React Native" },
    ],
    contact: {
      heading: "Trabajemos juntos",
      intro:
        "Estoy disponible para proyectos freelance, colaboraciones u oportunidades Full Stack, Frontend o Backend en equipos remotos.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado correctamente",
      error: "Error al enviar el mensaje. Intentá de nuevo.",
      gmailReconnect:
        "Gmail en EmailJS no tiene permisos para enviar. En Email Services → Gmail: Disconnect, volvé a conectar y aceptá todos los permisos. Si sigue fallando, en Google (Cuenta → Seguridad → Acceso de terceros) quitá EmailJS y reconectá.",
    },
    projectsUi: {
      featured: "Destacado",
      code: "Código",
      demo: "Demo",
      techAria: "Tecnologías usadas",
      sectionAria: "Proyectos destacados",
    },
    experienceUi: {
      techAria: "Tecnologías usadas",
      sectionAria: "Experiencia laboral",
    },
    footer: {
      builtWith: "Desarrollado con",
      and: "y",
      deployedOn: "Desplegado en",
    },
    language: {
      switchTo: "Cambiar idioma",
      es: "ES",
      en: "EN",
    },
  },
  en: {
    profile: {
      role: "Full Stack Developer",
      tagline:
        "I build web and mobile applications with React, TypeScript, and Node.js. Focused on modern frontend, performance, and remote teams.",
      location: "Argentina · Remote",
      availability: "Available",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      downloadCv: "Download CV",
      navAria: "In-page navigation",
      socialAria: "Social links",
    },
    sections: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    about: {
      paragraphs: [
        "I'm a Full Stack Developer with 4+ years of professional experience building web and mobile applications. I specialize in React, TypeScript, and Node.js, with a strong focus on modern frontend, performance, and responsive design.",
        "I've contributed to end-to-end product development: React interfaces, Node.js backends, API integration, and databases. I've also worked on AI-powered solutions when the product calls for it, always in remote, agile teams.",
        "My background spans fintech and trading products to React Native mobile apps. I'm looking for Frontend, Backend, or Full Stack roles in remote teams.",
      ],
      education: "Education",
      languagesLabel: "Languages:",
      languages: "Spanish (native), English (A2)",
    },
    experiences: [
      {
        period: "Jun 2023 — Present",
        title: "Full Stack Developer",
        description:
          "Development of AI-powered web platforms. Frontend with React (Remix) and TypeScript, backend with Node.js and Prisma, API integration and business logic in a remote, agile environment.",
      },
      {
        period: "Dec 2022 — Jun 2023",
        title: "Frontend Developer",
        description:
          "Built a cryptocurrency wallet with React and TypeScript. API integration and responsive design for a smooth trading user experience.",
      },
      {
        period: "Feb 2021 — Jun 2022",
        title: "Frontend Developer",
        description:
          "Mobile app development with React Native and Expo. Responsive interfaces and user flows for delivery services.",
      },
    ],
    projects: [
      {
        description:
          "AI-powered labor legal advisory with RAG and vector embeddings. Multi-agent n8n workflows to analyze cases, generate documents, and deliver real-time legal insights with NLP for law firms and unions.",
      },
      {
        description:
          "Web panel for padel clubs: courts, bookings, players, and staff. Operations calendar, Stripe payments, tournaments, academy, inventory, and cash closing. React, TypeScript, and Tailwind with Express API and Supabase.",
      },
      {
        description:
          "Mobile app to find matches and book padel courts. Open matches, competitive leagues, tournaments, Stripe payments, location search, chat, and skill-based matching with React Native and Expo.",
      },
      {
        description:
          "AI-powered real estate portfolio management with RAG and embeddings. Automated reports, predictive maintenance, and multi-agent n8n workflows to analyze properties and improve operational decisions.",
      },
      {
        description:
          "AI marketing advisor to optimize digital strategies. Content suggestions, campaign analysis, and real-time insights to automate decisions and commercial workflows.",
      },
      {
        description:
          "Cryptocurrency analysis with landing page, live dashboard, and D3.js bubble chart. Visualizes volume, trends, and metrics with physics, collisions, and a fast, responsive modern UI.",
      },
      {
        description:
          "Imported sneakers e-commerce with PayPal and Stripe payments, Nodemailer emails, cart, and secure checkout. Responsive design focused on a clear, trustworthy shopping experience.",
      },
      {
        description:
          "Delivery mobile app with React Native and Expo. Real-time tracking, push notifications, and an intuitive interface to manage packages and end-to-end logistics.",
      },
    ],
    skillCategories: [
      { title: "Frontend" },
      { title: "Backend & Data" },
      { title: "Mobile & AI" },
      { title: "Practices" },
    ],
    stats: [
      { label: "Years of Experience" },
      { label: "Projects Completed" },
      { label: "Technologies" },
      { label: "Tech Companies" },
    ],
    education: [
      { title: "Full Stack Web Developer" },
      { title: "React & TypeScript" },
      { title: "React Native" },
    ],
    contact: {
      heading: "Let's work together",
      intro:
        "I'm available for freelance projects, collaborations, and Full Stack, Frontend, or Backend opportunities in remote teams.",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      sending: "Sending...",
      success: "Message sent successfully",
      error: "Error sending message. Please try again.",
      gmailReconnect:
        "Gmail in EmailJS lacks permission to send. In Email Services → Gmail: Disconnect, reconnect, and accept all permissions. If it still fails, remove EmailJS under Google Account → Security → Third-party access, then reconnect.",
    },
    projectsUi: {
      featured: "Featured",
      code: "Code",
      demo: "Demo",
      techAria: "Technologies used",
      sectionAria: "Featured projects",
    },
    experienceUi: {
      techAria: "Technologies used",
      sectionAria: "Work experience",
    },
    footer: {
      builtWith: "Built with",
      and: "and",
      deployedOn: "Deployed on",
    },
    language: {
      switchTo: "Switch language",
      es: "ES",
      en: "EN",
    },
  },
};
