export const profile = {
  name: "Martin Gadea",
  role: "Full Stack Developer",
  tagline:
    "Desarrollo aplicaciones web y mobile con React, TypeScript y Node.js. Enfoque en frontend moderno, performance y equipos remotos.",
  email: "martiingadeea1996@gmail.com",
  location: "Argentina · Remoto",
  portfolioUrl: "https://martingadea.vercel.app",
  githubUrl: "https://github.com/MartinGadea12",
  linkedinUrl: "https://www.linkedin.com/in/martingadea12",
  cvPath: "/CV-FULL-STACK-DEV.pdf",
  cvDownloadName: "CV-Martin-Gadea-Full-Stack.pdf",
  availability: "Disponible",
} as const;

export const aboutParagraphs = [
  "Soy Full Stack Developer con más de 4 años de experiencia profesional construyendo aplicaciones web y mobile. Me especializo en React, TypeScript y Node.js, con fuerte foco en frontend moderno, performance y diseño responsive.",
  "He participado en el desarrollo de productos de punta a punta: interfaces con React, backends en Node.js, integración de APIs y bases de datos. También he trabajado con soluciones que incorporan IA cuando el producto lo requiere, siempre en equipos remotos y entornos ágiles.",
  "Mi experiencia abarca desde productos fintech y trading hasta aplicaciones mobile con React Native. Busco roles Frontend, Backend o Full Stack en equipos remotos.",
] as const;

export const experiences = [
  {
    period: "Jun 2023 — Actualidad",
    title: "Full Stack Developer",
    company: "DaiOff",
    companyUrl: "#",
    description:
      "Desarrollo de plataformas web impulsadas con inteligencia artificial. Implementación frontend con React (Remix) y TypeScript, backend con Node.js y Prisma, integración de APIs y lógica de negocio en entorno remoto y ágil.",
    technologies: [
      "TypeScript",
      "Remix",
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "RAG",
      "n8n",
    ],
  },
  {
    period: "Dic 2022 — Jun 2023",
    title: "Frontend Developer",
    company: "Gravitad",
    companyUrl: "#",
    description:
      "Desarrollo de wallet de criptomonedas con React y TypeScript. Integración de APIs y diseño responsive para una experiencia de usuario fluida en trading.",
    technologies: ["React", "TypeScript", "REST APIs", "Responsive Design"],
  },
  {
    period: "Feb 2021 — Jun 2022",
    title: "Frontend Developer",
    company: "Packar",
    companyUrl: "#",
    description:
      "Desarrollo de aplicación mobile con React Native y Expo. Implementación de interfaces responsivas y flujos de usuario para servicios de entrega.",
    technologies: ["React Native", "Expo", "TypeScript", "Mobile UI"],
  },
] as const;

const projectImageFiles: Record<string, string> = {
  "DaiOff": "DaiOff.png",
  "WeMatch Panel": "WeMatch Panel.png",
  "We Match": "We Match.png",
  Arkia: "Arkia.png",
  Jarvis: "Jarvis.png",
  "Crypto Ghost": "Crypto Ghost.png",
  'E-Commerce "Sneakers"': "E-Commerce Sneakers.png",
  'Mobile App "Packar"': "Mobile App Packcar.png",
};

/** Ruta de imagen en /public/projects/{archivo}.png */
export function projectImage(title: string) {
  const file =
    projectImageFiles[title] ?? `${title.replace(/"/g, "").trim()}.png`;
  return `/projects/${file}`;
}

export const projects = [
  {
    title: "DaiOff",
    description:
      "Asesoría legal laboral con IA, RAG y embeddings vectoriales. Flujos multiagente en n8n para analizar casos, generar documentos y entregar insights legales en tiempo real con NLP para despachos y sindicatos.",
    technologies: [
      "TypeScript",
      "Remix",
      "PostgreSQL",
      "RAG",
      "Embeddings",
      "n8n",
      "AI",
    ],
    link: "https://daioff-develop.fly.dev/",
    github: "#",
    image: projectImage("DaiOff"),
    featured: true,
  },
  {
    title: "WeMatch Panel",
    description:
      "Panel web para clubes de pádel: pistas, reservas, jugadores y equipo. Calendario operativo, pagos con Stripe, torneos, escuela, inventario y cierre de caja. React, TypeScript y Tailwind con API Express y Supabase.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind",
      "Vite",
      "Supabase",
      "Stripe",
    ],
    link: "https://padel-fe.fly.dev/",
    github: "#",
    image: projectImage("WeMatch Panel"),
    featured: false,
  },
  {
    title: "We Match",
    description:
      "App mobile para encontrar partidos y reservar pistas de pádel. Partidos abiertos, ligas competitivas, torneos, pagos Stripe, búsqueda por ubicación, chat y matching por nivel con React Native y Expo.",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Stripe",
      "Supabase",
    ],
    link: "#",
    github: "#",
    image: projectImage("We Match"),
    featured: true,
  },
  {
    title: "Arkia",
    description:
      "Gestión de portafolio inmobiliario con IA, RAG y embeddings. Reportes automatizados, mantenimiento predictivo y flujos multiagente en n8n para analizar propiedades y mejorar decisiones operativas.",
    technologies: [
      "TypeScript",
      "Remix",
      "PostgreSQL",
      "RAG",
      "Embeddings",
      "n8n",
      "AI",
    ],
    link: "https://edificio-digital.fly.dev/",
    github: "#",
    image: projectImage("Arkia"),
    featured: false,
  },
  {
    title: "Jarvis",
    description:
      "Asesor de marketing con IA para optimizar estrategias digitales. Sugerencias de contenido, análisis de campañas e insights en tiempo real para automatizar decisiones y flujos de trabajo comerciales.",
    technologies: ["TypeScript", "Remix", "Tailwind", "AI", "NLP"],
    link: "https://jarvis-ai-dark-sea-5094.fly.dev/",
    github: "#",
    image: projectImage("Jarvis"),
    featured: false,
  },
  {
    title: "Crypto Ghost",
    description:
      "Análisis de criptomonedas con landing, dashboard en vivo y gráfico de burbujas en D3.js. Visualiza volumen, tendencias y métricas con física, colisiones y una interfaz moderna, rápida y responsiva.",
    technologies: [
      "TypeScript",
      "Remix",
      "Tailwind",
      "D3.js",
      "Data Visualization",
      "Aceternity",
    ],
    link: "https://cryptoghost.fly.dev/",
    github: "#",
    image: projectImage("Crypto Ghost"),
    featured: true,
  },
  {
    title: 'E-Commerce "Sneakers"',
    description:
      "E-commerce de zapatillas importadas con pagos PayPal y Stripe, emails vía Nodemailer, carrito y checkout seguro. Diseño responsivo orientado a una experiencia de compra clara y confiable.",
    technologies: ["TypeScript", "React", "Redux", "Bootstrap", "Stripe"],
    link: "#",
    github: "#",
    image: projectImage('E-Commerce "Sneakers"'),
    featured: false,
  },
  {
    title: 'Mobile App "Packar"',
    description:
      "App mobile de entregas con React Native y Expo. Seguimiento en tiempo real, notificaciones push e interfaz intuitiva para gestionar paquetes y coordinar logística de punta a punta.",
    technologies: ["TypeScript", "React Native", "Expo Go"],
    link: "#",
    github: "#",
    image: projectImage('Mobile App "Packar"'),
    featured: false,
  },
] as const;

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "Remix",
      "Tailwind CSS",
      "Material UI",
      "HTML5 & CSS3",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Sequelize",
      "REST APIs",
    ],
  },
  {
    title: "Mobile & IA",
    skills: [
      "React Native",
      "Expo",
      "RAG",
      "Prompt Engineering",
      "n8n",
    ],
  },
  {
    title: "Prácticas",
    skills: ["Git", "Scrum / Agile", "Postman", "Performance", "Responsive Design"],
  },
] as const;

export const stats = [
  { value: "4+", label: "Años de Experiencia" },
  { value: "8+", label: "Proyectos Completados" },
  { value: "20+", label: "Tecnologías" },
  { value: "3", label: "Empresas Tech" },
] as const;

export const education = [
  {
    title: "Full Stack Web Developer",
    institution: "Henry Bootcamp",
    period: "2022 — 2023",
  },
  {
    title: "React & TypeScript",
    institution: "Open Bootcamp",
    period: "2023",
  },
  {
    title: "React Native",
    institution: "Coursera",
    period: "2024",
  },
] as const;
