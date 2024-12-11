export const studies = [
  {
    title: "Desarrollo web con c# y .net",
    corporation: "LOURTEC - Venezuela",
    date: "02/2023 – 08/2023",
  },
  {
    title: "Desarrollador back end con python y django",
    corporation: "Platzi - Remoto",
  },
  {
    title: "Desarrollo profesional con Python",
    corporation: "Udemy - Remoto",
  },
  {
    title: "Data Scince y machine learning con python",
    corporation: "Udemy - Remoto"
  }
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  wordpress: "wordpress",
  php: "php",
  python: "python",
  django: "django",
  postgresql: "postgresql",
  csharp: "csharp",
  azure: "azure",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Wordpress",
    icon: IconKeys.wordpress,
  },
  {
    title: "Php",
    icon: IconKeys.php,
  },
  {
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "Django",
    icon: IconKeys.django,
  },
  {
    title: "Postgresql",
    icon: IconKeys.postgresql
  },
  {
    title: "C#",
    icon: IconKeys.csharp,
  },
  {
    icon: IconKeys.azure,
  }
];

export const projects = [
  {
    img: "../../../img/tienda-puriempaques.png",
    title: "Tienda online - Puriempaques(VE)",
    link: "https://puriempaques.com",
    description: `Tienda online para la empresa puriempaques Desarrollado con wordpress y con implementaciones con php.`,
    technologies: [
      {
        icon: IconKeys.wordpress,
      },
      {
        icon: IconKeys.php,
      },
    ],
  },
  {
    img: "../../../img/tienda-krimarket.png",
    title: "Tienda online - K-rimarket(VE)",
    link: "https://k-rimarket.com",
    description: `Proyecto de tienda online con pasarela de pago. Puedes registrarte como vendedor y publicar tus productos.`,
    technologies: [
      {
        icon: IconKeys.wordpress,
      },
      {
        icon: IconKeys.php,
      },
      {
        icon: IconKeys.stripe,
      },
    ],
  },
  {
    img: "../../../img/pagina-licaedca.png",
    title: "Página informativa - Licaedca(ES)",
    link: "https://www.licaedca.com/#",
    description: `Página informativa para empresa de electricidad en España-Valladolid.`,
    technologies: [
      {
        icon: IconKeys.astro,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.css,
      }
    ],
  },
  {
    img: "../../../img/pagina-asesores.png",
    title: "Asesores M&B (En proceso)",
    // link: "https://store-games-site.netlify.app/",
    description: `Realizando una pagina ofreciendo los servicios de la empresa,
                  añadiendo ticket soporte y realizando incorporación de chat bot para clientes.`,
    technologies: [
      {
        icon: IconKeys.wordpress,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.php,
      },
    ],
  },
  {
    img: "../../../img/tienda-power.png",
    title: "Tienda online - Power Excelencia (ES)",
    link: "https://powerexcelencia.es",
    description: `Tienda online en España, con pasarela de pago de bancos nacionales(BBVA). Realice el proyecto en Wordpress pero actualmente
                  estoy migrando el proyecto a python con django para conectarlo con un sistema administrativo propio que esta en desarrollo.`,
    technologies: [
      {
        icon: IconKeys.wordpress,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.django
      },
      {
        icon: IconKeys.postgresql
      }
    ],
  },
  {
    img: "../../../img/software-power.png",
    title: "Sistema administrativo - Power Excelencia (ES)(En proceso)",
    // link: "https://preeminent-liger-266356.netlify.app/",
    description: `este proyecto se trata de un clon de la pagína de cyberpunk , donde
      el ususario puede ver los tailer de él juegos y también los
      episodios de la serie....`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.django,
      },
      {
        icon: IconKeys.postgresql,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      }
    ],
  },
];
