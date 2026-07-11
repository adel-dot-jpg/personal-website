/* elements to be added to aggregate components just need to be added here */

export const NAV_LINKS = [
  /* for navbar/folding menu items */ { href: "/", key: "home", label: "Home" },
  { href: "/projects", key: "projects", label: "Projects" },
  { href: "/#contact", key: "contact", label: "Contact" },
  { href: "/vitals", key: "vitals", label: "Live Server" },
];

export const PROJECTS = [
  /* shared among homepage projects section and projects page */
  {
    title: "Portfolio Website",
    key: "personal-website",
    description:
      "A fully responsive personal website built with a mobile-first approach, emphasizing modular component architecture, semantic HTML, and Tailwind CSS utility patterns to ensure maximum code reusability, performance, and maintainability across devices",
    technologies:
      "React, Next.js, TypeScript, TailwindCSS, UI/UX, SEO, GitHub Actions",
    status: "Completed",
    lastUpdate: "July 2025",
    href: "/projects",
    bg: "/PWss.jpg",
    projLink: "/",
    repoLink: "https://github.com/adel-dot-jpg/personal-website",
  },
  {
    title: "Moon Tracker",
    key: "moon-phase",
    description:
      "An all-in-one night sky tracker with moon phase tracking, anomaly alerts, and year-round star maps",
    technologies:
      "React, Next.js, TypeScript, TailwindCSS, mongoDB, Web Scraping (BeautifulSoup)",
    status: "Planning",
    lastUpdate: "Apr 2025",
    href: "/projects",
    bg: "/PWss.jpg",
    projLink: "/",
    repoLink: "private",
  },
  {
    title: "Spotlight",
    key: "maps-extension",
    description:
      "A chrome extension for Google Maps that lets you search for locations on TikTok, Instagram, and YouTube Shorts. The modern way to hunt for hidden gems in your city",
    technologies: "JavaScript, HTML, CSS, Manifest V3, Google Web APIs",
    status: "Completed",
    lastUpdate: "July 2025",
    href: "https://chromewebstore.google.com/detail/spotlight/mfjilmndjelbjimffhogmehpfmjnbmng",
    bg: "/CEss.jpg",
    projLink:
      "https://chromewebstore.google.com/detail/spotlight/mfjilmndjelbjimffhogmehpfmjnbmng",
    repoLink: "https://github.com/adel-dot-jpg/Spotlight-Chrome-Extension",
  },
  {
    title: "Ascend The Darkness",
    key: "darkness-pygame",
    description: "A short side-scrolling 2D puzzle platformer game",
    technologies: "Python, Pygame, UI/UX, Algorithms",
    status: "In Progress",
    lastUpdate: "July 2025",
    href: "/projects",
    bg: "/AtDss.jpg",
    projLink: "/",
    repoLink: "https://github.com/adel-dot-jpg/Spotlight-Chrome-Extension",
  },
  {
    title: "Colligo",
    key: "homeless",
    description:
      "Colligo is a feature-rich progressive web app that supercharges Canadian tech job hunting. Routinely scouring 50+ career sites of the biggest tech companies with North American offices.",
    technologies:
      "Next.js, SASS, Django, Supabase PostgreSQL, GraphQL (Graphene), REST API",
    status: "Ongoing",
    lastUpdate: "September 2025",
    href: "https://colligo.careers",
    bg: "COss.webp",
    projLink: "https://colligo.careers",
    repoLink: "private",
  },
  {
    title: "Live ASL Translator",
    key: "CNN",
    description:
      "This project is a real-time American Sign Language (ASL) hand sign recognition system that converts live webcam input into readable English text. It combines computer vision, deep learning, and sequence modeling to produce stable, low-latency text output from continuous hand gestures.",
    technologies:
      "Python, PyTorch, Torchvision, OpenCV, Google Mediapipe, NumPy, Machine Learning, Computer Vision, Neural Networks, Deep Learning, Text and Vision models, Data processing, Data preprocessing, Data Preparation",
    status: "Completed",
    lastUpdate: "January 2026",
    href: "https://github.com/adel-dot-jpg/ASL_Translator",
    bg: "ASLss.webp",
    projLink: "https://github.com/adel-dot-jpg/ASL_Translator",
    repoLink: "https://github.com/adel-dot-jpg/ASL_Translator",
  },
  {
    title: "Production Server",
    key: "hosting",
    description:
      "Architected and deployed a self hosted Ubuntu Linux environment for running production-grade web applications. The infrastructure features Docker container orchestration, an Nginx reverse proxy, secure Cloudflare tunnels for HTTPS routing, and a fully automated CI/CD deployment pipeline using self-hosted GitHub Actions runners.",
    technologies:
      "Ubuntu Linux, Docker Compose, Nginx, Cloudflare Tunneling, GitHub Actions, CI/CD, Bash Scripting, DevOps",
    status: "Ongoing",
    lastUpdate: "April 2026",
    href: "/projects",
    bg: "/ServeSS.webp",
    projLink: "/",
    repoLink: "private",
  },
  {
    title: "Server Resources API",
    key: "vitals",
    description:
      "A live-service API run by my server via a websocket showcasing resource usage and accompanying dashboard to parse and beautifully display live server vitals written in Golang.",
    technologies:
      "Ubuntu Linux, Docker Compose, Cloudflare Tunneling, Websockets, Golang, TailwindCSS, React.js",
    status: "Completed",
    lastUpdate: "April 2026",
    href: "/vitals",
    bg: "/GoApiSS.png",
    projLink: "/vitals",
    repoLink: "https://github.com/adel-dot-jpg/go-vitals-api",
  },
  {
    title: "CedarKey AI",
    key: "cedarkey",
    description:
      "A production SaaS platform for Canadian property managers and short-term rental hosts that generates jurisdiction-aware legally compliant rental contracts using AI. Features a RAG-powered legal engine, e-signature pipeline with cryptographic, PIPEDA compliant audit trails, Stripe subscription billing and identity verification, security deposit escrow, smart lock integration via Seam, and iCal sync with Airbnb and VRBO.",
    technologies:
      "Next.js, NestJS, tRPC, Prisma, PostgreSQL, pgvector, AWS S3, Stripe, Google Gemini, BullMQ, Upstash Redis, Puppeteer, Railway, Cloudflare",
    status: "Ongoing",
    lastUpdate: "July 2026",
    href: "https://cedarkey.ca",
    bg: "/CedarKeySS.png",
    projLink: "https://cedarkey.ca",
    repoLink: "https://github.com/adel-dot-jpg/clauseforge",
  },
];

export const EXPERIENCES = [
  /* experience section of homepage */
  {
    place: "Toronto Metropolitan University",
    key: "TMU",
    title: "Computer Engineering, B.Eng",
    date: "April 2027",
    icon: "/tmu.jpg",
  },
];

export const CONTACTS = [
  /* contact section of homepage */
  {
    platform: "GitHub",
    icon: "/github.svg",
    href: "https://github.com/adel-dot-jpg",
    key: "GH",
  },
  {
    platform: "LinkedIn",
    icon: "/linkedin.png",
    href: "https://www.linkedin.com/in/adel-faruque",
    key: "LI",
  },
  {
    platform: "Gmail",
    icon: "/gmail.png",
    href: "mailto:adelfaruque1@gmail.com",
    key: "GM",
  },
];
