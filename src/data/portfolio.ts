export interface DocLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  role: string;
  impact: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  demo?: string;
  documentationLinks?: DocLink[];
}

export const portfolioData = {
  personal: {
    name: "Johan Jael López Reyes",
    role: "Full-Stack Software Engineer",
    tagline: "Specialized in building decoupled web platforms, automated ERP systems, and high-conversion frontend applications.",
    location: "Morelia, Michoacán, Mexico (Remote)",
    email: "johanlopezrey1@gmail.com",
    github: "https://github.com/johanUtm04",
    linkedin: "https://www.linkedin.com/in/johan-jael-lopez-reyes-developerbackend/",
  },
  metrics: [
    { label: "Production & Enterprise Systems", value: "3 Key Platforms" },
    { label: "Core Stack", value: "React • TS • Laravel" },
    { label: "Architecture", value: "Decoupled & REST APIs" },
  ],
  projects: [
    {
      title: "Corporación Azul Platform",
      role: "Lead Software Architect & Full-Stack Engineer",
      impact: "Decoupled Corporate Ecosystem",
      description: "Modern enterprise web platform engineered to centralize multi-brand, branch, and product operations through a decoupled architecture, separating React frontend from Laravel REST API and Headless WordPress CMS.",
      tech: ["React", "TypeScript", "Vite", "Laravel", "REST API", "MySQL", "Redis", "Headless WordPress", "C4 Model"],
      highlights: [
        "Architected modular C4 design patterns & ADRs (Architecture Decision Records) in decoupled directories.",
        "Implemented Redis caching and Headless WordPress integration for lightning-fast content delivery.",
        "Engineered secure REST API authentication and data layer isolation for multi-branch operations."
      ],
      github: "https://github.com/johanUtm04/corporacion-azul-platform",
      documentationLinks: [
        { label: "GitHub Repository", url: "https://github.com/johanUtm04/corporacion-azul-platform" },
        { label: "Figma Architecture Diagram", url: "https://www.figma.com/proto/qia4TAM6vck8valMHBT6ep/Corporaci%C3%B3n-Azul-Platform-%E2%80%94-Visual-Prototype-v0.1?node-id=1-2&t=dH5Rlp3qNxWfljT7-1" }
    ]
    },
    {
      title: "Gestión de Activos PIHCSA",
      role: "Full-Stack Developer & Systems Auditor",
      impact: "Enterprise Asset Management & Fiscal ERP",
      description: "Multi-tenant physical asset ERP handling hardware lifecycle tracking, component-level swaps ('Bolsa de Cambios'), vehicle fleet maintenance, and dynamic fiscal asset depreciation calculated against official Mexican inflation indices (INPC).",
      tech: ["Laravel (PHP 8.1)", "MySQL", "Tailwind CSS", "AdminLTE v3.2", "Vite", "Eloquent Observers", "Pest/PHPUnit"],
      highlights: [
        "Engineered multi-tenant session isolation via custom middleware (EnsureEmpresaIsSelected, EnsureSucursalIsSelected).",
        "Built dynamic hardware component wizard & audit trails using Model Observers to log every physical RAM/CPU swap.",
        "Automated fiscal annual depreciation matrices applying official INPC indexation parameters and custom tax rates."
      ],
      github: "https://github.com/johanUtm04/gestion_activos_pihcsa",
      documentationLinks: [
        { label: "GitHub Repository & System Guide", url: "https://github.com/johanUtm04/gestion_activos_pihcsa" }
      ]
    },
    {
      title: "3ª Carrera Cruz Azul Guadalajara 2026",
      role: "Frontend Engineer & UI/UX Developer",
      impact: "High-Conversion Event Landing Page",
      description: "High-performance interactive web landing page developed for the 3ª Carrera Cruz Azul Guadalajara 2026, delivering responsive navigation, interactive award carousels, and runner kit showcases.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Embla Carousel", "GitFlow / PRs", "Vercel"],
      highlights: [
        "Built structured feature-branch workflow with verified Pull Request merges and GitFlow conventions.",
        "Implemented responsive touch-enabled award carousels and smooth section navigation.",
        "Optimized asset loading and fallback states for interactive runner kit and event location maps."
      ],
      github: "https://github.com/johanUtm04/guadalajara-race",
      demo: "https://guadalajara-race-three.vercel.app/",
      documentationLinks: [
        { label: "GitHub Repository", url: "https://github.com/johanUtm04/guadalajara-race" },
        { label: "Staging Preview (Vercel)", url: "https://guadalajara-race-three.vercel.app/" }
      ]
    }
  ] as Project[],
  skills: {
    frontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "HTML5/CSS3"],
    backend: ["PHP (Laravel)", "REST APIs", "Node.js", "Python", "Headless WordPress", "Redis"],
    databasesDevOps: ["MySQL", "MariaDB", "Git / GitHub", "Docker", "Vercel", "Linux (Lubuntu)"],
    toolingAI: ["Postman", "Bruno", "Insomnia", "ChatGPT", "GitHub Copilot", "Agile / Scrum"]
  }
};