# Portfolio — Martin Gadea

Portfolio personal de **Martin Gadea**, Full Stack Developer. Sitio estático con Next.js, orientado a presentar experiencia, proyectos, habilidades y un formulario de contacto funcional.

Repositorio: [github.com/MartinGadea12/portolio](https://github.com/MartinGadea12/portolio)

## Características

- Diseño responsive con layout de dos columnas en desktop (sidebar fija + contenido con scroll)
- Tema claro y oscuro (`next-themes`)
- Internacionalización español / inglés con persistencia en `localStorage`
- Secciones: About, estadísticas, experiencia, proyectos, skills y contacto
- Descarga de CV en PDF
- Formulario de contacto con envío por [EmailJS](https://www.emailjs.com/)
- Animaciones con Framer Motion
- Analytics en producción (Vercel Analytics)

## Stack tecnológico

| Área | Tecnología |
|------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | React 19, TypeScript |
| Estilos | Tailwind CSS 4, Radix UI |
| Animaciones | Framer Motion |
| Contacto | EmailJS (`@emailjs/browser`) |
| Deploy | Vercel (recomendado) |

## Estructura del proyecto

```
resume-analysis/
├── app/                    # App Router (layout, página principal, estilos globales)
├── components/             # Secciones del portfolio y UI
│   ├── hero.tsx            # Sidebar: nombre, nav, CV, idioma, tema
│   ├── about.tsx
│   ├── experience.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── contact.tsx         # Formulario EmailJS
│   └── language-provider.tsx
├── lib/
│   ├── profile.ts          # Datos: experiencia, proyectos, skills, enlaces
│   ├── emailjs.ts          # Configuración EmailJS
│   ├── i18n/               # Traducciones ES / EN
│   └── utils.ts
└── public/
    ├── CV-FULL-STACK-DEV.pdf
    └── projects/           # Capturas de proyectos
```

Los textos traducibles viven en `lib/i18n/translations.ts`. Los datos estructurales (empresas, URLs, tecnologías) están en `lib/profile.ts` y se combinan con las traducciones en tiempo de ejecución.

## Requisitos

- Node.js 18.18 o superior
- npm, pnpm o yarn

## Instalación y desarrollo

```bash
git clone https://github.com/MartinGadea12/portolio.git
cd portolio
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción (tras `build`) |
| `npm run lint` | ESLint |

## Configuración de EmailJS

El formulario de contacto envía correos mediante EmailJS desde el cliente. La configuración por defecto está en `lib/emailjs.ts` y puede sobreescribirse con variables de entorno.

### Variables de entorno (opcional)

Crear `.env.local` en la raíz:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_oopwj2c
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_g17jead
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Panel de EmailJS

1. Crear cuenta en [emailjs.com](https://www.emailjs.com/)
2. **Email Services**: conectar Gmail (u otro proveedor)
3. **Email Templates**: usar variables `{{from_name}}`, `{{reply_to}}`, `{{telefono}}`, `{{message}}` (y `{{apellido}}` si aplica)
4. **Account → Security → Allowed origins**: agregar `http://localhost:3000` y la URL de producción (por ejemplo `https://tu-dominio.vercel.app`)

Si Gmail devuelve errores 412, reconectar el servicio en EmailJS y aceptar todos los permisos OAuth.

## Personalización del contenido

Editar principalmente:

- `lib/profile.ts` — nombre, enlaces, experiencia, proyectos, skills, estadísticas
- `lib/i18n/translations.ts` — textos de interfaz y descripciones traducidas
- `public/CV-FULL-STACK-DEV.pdf` — curriculum actualizado
- `public/projects/` — imágenes de proyectos (nombres alineados con `projectImageFiles` en `profile.ts`)

## Despliegue

El proyecto es compatible con [Vercel](https://vercel.com):

1. Importar el repositorio `MartinGadea12/portolio`
2. Framework preset: **Next.js** (detección automática)
3. Añadir las variables `NEXT_PUBLIC_EMAILJS_*` si no usás los valores por defecto del código
4. Tras el deploy, registrar el dominio en EmailJS (Allowed origins)

## Licencia

Proyecto de portfolio personal. Uso del código bajo tu criterio; el contenido (textos, CV, imágenes) es propiedad de Martin Gadea.

## Contacto

- GitHub: [@MartinGadea12](https://github.com/MartinGadea12)
- LinkedIn: [martingadea12](https://www.linkedin.com/in/martingadea12)
- Email: martiingadeea1996@gmail.com
