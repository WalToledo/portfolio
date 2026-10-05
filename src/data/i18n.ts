// Diccionario central de textos de la interfaz (Navbar, Hero, Sobre mí,
// Experiencia, Proyectos, Contacto, Footer y meta/SEO). El español es el
// idioma por defecto (coincide con lo que renderiza cada componente en
// build); el inglés es lo que el toggle de idioma del Navbar aplica en el
// cliente. Los componentes marcan cada nodo traducible con data-i18n="clave"
// (o data-i18n-aria-label / data-i18n-placeholder / data-i18n-content para
// atributos) apuntando a una ruta de este objeto.
//
// Contenido dinámico por ítem (experience.ts, projects.ts, skills.ts) NO vive
// acá: cada entrada ya trae su propio par { es, en } y se resuelve con
// data-i18n-es / data-i18n-en directamente en el markup, sin pasar por este
// diccionario.

export interface Localized {
  es: string;
  en: string;
}

export interface Translations {
  nav: {
    inicio: string;
    sobreMi: string;
    experiencia: string;
    proyectos: string;
    contacto: string;
    skipLink: string;
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
    themeToLight: string;
    themeToDark: string;
  };
  hero: {
    eyebrow: string;
    roleLead: string;
    roleAccent: string;
    taglineLead: string;
    taglineAccent: string;
    viewProjects: string;
    downloadCv: string;
    contactMe: string;
    avatarAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    bioParagraphs: string[];
    toolsLabel: string;
    languagesLabel: string;
  };
  experience: {
    eyebrow: string;
    title: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    stackLabel: string;
    viewRepo: string;
    of: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      messageHint: string;
      submit: string;
    };
    errors: {
      nameMissing: string;
      nameTooShort: string;
      emailMissing: string;
      emailInvalid: string;
      messageMissing: string;
      messageTooShort: string;
      messageTooLong: string;
    };
    status: {
      sending: string;
      success: string;
      error: string;
    };
  };
  meta: {
    title: string;
    description: string;
  };
}

export const translations: Record<'es' | 'en', Translations> = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      skipLink: 'Saltar al contenido',
      downloadCv: 'Descargar CV',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación',
      themeToLight: 'Cambiar a tema claro',
      themeToDark: 'Cambiar a tema oscuro',
    },
    hero: {
      eyebrow: 'Analista en Sistemas Informáticos',
      roleLead: 'Desarrollador de Software',
      roleAccent: 'Fullstack',
      taglineLead: 'Construyo productos web de punta a punta,',
      taglineAccent: 'del diseño al deploy.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      contactMe: 'Contactarme',
      avatarAlt: 'Foto de perfil de Walter Toledo',
    },
    about: {
      eyebrow: 'Perfil',
      title: 'Sobre mí',
      bioParagraphs: [
        'Soy Walter Toledo, desarrollador fullstack de Rosario, Argentina. Trabajo con React, Node.js y TypeScript, cubriendo todo el ciclo de un proyecto: modelado de datos, backend, interfaz y deploy. Además, incorporo agentes de IA en mi flujo de desarrollo para trabajar más rápido sin perder calidad.',
        'Como freelance desarrollé soluciones para clientes, como plataformas de suscripción, e-commerce y paneles de gestión. Soy Analista en Sistemas Informáticos, estudio Ingeniería en Sistemas y me estoy formando en infraestructura: cómo se despliegan, escalan y mantienen las aplicaciones en producción.',
      ],
      toolsLabel: 'Tecnologías y herramientas',
      languagesLabel: 'Idiomas:',
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia laboral',
    },
    projects: {
      eyebrow: 'Trabajo',
      title: 'Proyectos',
      stackLabel: 'Stack',
      viewRepo: 'Ver repositorio',
      of: 'de',
    },
    contact: {
      eyebrow: 'Hablemos',
      title: 'Tu mensaje',
      intro: '¿Querés contactarme? Escribime por acá o mandame un mensaje con el formulario.',
      form: {
        nameLabel: 'Nombre',
        emailLabel: 'Email',
        messageLabel: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'nombre@ejemplo.com',
        messagePlaceholder: '¿Sobre qué te gustaría conversar?',
        messageHint: 'Entre 10 y 2000 caracteres',
        submit: 'Enviar mensaje',
      },
      errors: {
        nameMissing: 'Ingresá tu nombre.',
        nameTooShort: 'El nombre es muy corto.',
        emailMissing: 'Ingresá tu email.',
        emailInvalid: 'Ingresá un email válido.',
        messageMissing: 'Escribí un mensaje.',
        messageTooShort: 'Contame un poco más (mínimo 10 caracteres).',
        messageTooLong: 'El mensaje no puede superar los 2000 caracteres.',
      },
      status: {
        sending: 'Enviando…',
        success: '¡Mensaje enviado! Te voy a responder pronto.',
        error:
          'No se pudo enviar el mensaje. Probá de nuevo o escribime directamente a toledowalter836@gmail.com.',
      },
    },
    meta: {
      title: 'Walter Toledo — Desarrollador de Software Fullstack',
      description:
        'Walter Toledo, Desarrollador de Software Fullstack y Analista en Sistemas Informáticos. Construyo productos web de punta a punta, del diseño al deploy.',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About me',
      experiencia: 'Experience',
      proyectos: 'Projects',
      contacto: 'Contact',
      skipLink: 'Skip to content',
      downloadCv: 'Download CV',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
    },
    hero: {
      eyebrow: 'Computer Systems Analyst',
      roleLead: 'Fullstack',
      roleAccent: 'Software Developer',
      taglineLead: 'I build web products end to end,',
      taglineAccent: 'from design to deployment.',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      contactMe: 'Contact me',
      avatarAlt: 'Profile photo of Walter Toledo',
    },
    about: {
      eyebrow: 'Profile',
      title: 'About me',
      bioParagraphs: [
        "I'm Walter Toledo, a fullstack developer from Rosario, Argentina. I work with React, Node.js, and TypeScript, covering a project's full cycle: data modeling, backend, interface, and deployment. I also bring AI agents into my workflow to move faster without losing quality.",
        'As a freelancer I built solutions for clients, including subscription platforms, e-commerce, and management dashboards. I hold a degree as a Computer Systems Analyst, I\'m studying Systems Engineering, and I\'m building expertise in infrastructure: how applications are deployed, scaled, and maintained in production.',
      ],
      toolsLabel: 'Tools & technologies',
      languagesLabel: 'Languages:',
    },
    experience: {
      eyebrow: 'Background',
      title: 'Work experience',
    },
    projects: {
      eyebrow: 'Work',
      title: 'Projects',
      stackLabel: 'Stack',
      viewRepo: 'View repository',
      of: 'for',
    },
    contact: {
      eyebrow: "Let's talk",
      title: 'Your message',
      intro: 'Want to get in touch? Message me here or send me a note through the form.',
      form: {
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'name@example.com',
        messagePlaceholder: "What would you like to talk about?",
        messageHint: 'Between 10 and 2000 characters',
        submit: 'Send message',
      },
      errors: {
        nameMissing: 'Please enter your name.',
        nameTooShort: 'That name looks too short.',
        emailMissing: 'Please enter your email.',
        emailInvalid: 'Please enter a valid email.',
        messageMissing: 'Please write a message.',
        messageTooShort: 'Tell me a bit more (at least 10 characters).',
        messageTooLong: "The message can't exceed 2000 characters.",
      },
      status: {
        sending: 'Sending…',
        success: "Message sent! I'll get back to you soon.",
        error:
          "The message couldn't be sent. Try again or email me directly at toledowalter836@gmail.com.",
      },
    },
    meta: {
      title: 'Walter Toledo — Fullstack Software Developer',
      description:
        'Walter Toledo, Fullstack Software Developer and Computer Systems Analyst. I build web products end to end, from design to deployment.',
    },
  },
};
