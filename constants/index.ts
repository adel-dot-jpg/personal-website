/* elements to be added  to aggregate components just need to be added here */

export const NAV_LINKS = [ /* for navbar/folding menu items */
	{ href: '/', key: 'home', label: 'Home', },
	{ href: '/projects', key: 'projects', label: 'Projects' },
	{ href: '/#contact', key: 'contact', label: 'Contact' },
]

export const PROJECTS = [ /* shared among homepage projects section and projects page */
	{ title: 'Portfolio Website', key: 'personal-website', description: 'A fully responsive personal website built with a mobile-first approach, emphasizing modular component architecture, semantic HTML, and Tailwind CSS utility patterns to ensure maximum code reusability, performance, and maintainability across devices', technologies: 'React, Next.js, TypeScript, TailwindCSS, UI/UX, SEO, GitHub Actions', status: 'Completed', lastUpdate: 'May 2025', href: '/projects',  bg: '/PWss.jpg', projLink: '/', repoLink: 'https://github.com/adel-dot-jpg/personal-website', },
	{ title: 'Moon Tracker', key: 'moon-phase', description: 'An all-in-one night sky tracker with moon phase tracking, anomaly alerts, and year-round star maps', technologies: 'React, Next.js, TypeScript, TailwindCSS, mongoDB, Web Scraping (Beautiful Soup)', status: 'Planning', lastUpdate: 'Apr 2025', href: '/projects',  bg: '/PWss.jpg', projLink: '/', repoLink: 'https://github.com/adel-dot-jpg?tab=repositories', },
	{ title: 'Spotlight', key: 'maps-extension', description: 'A chrome extension for Google Maps that lets you search for locations on TikTok, Instagram, and YouTube Shorts. The modern way to hunt for hidden gems in your city', technologies: 'JavaScript, HTML, CSS, Manifest V3, Google Web APIs', status: 'Completed', lastUpdate: 'July 2025', href: '/projects',  bg: '/CEss.jpg', projLink: '/', repoLink: 'https://github.com/adel-dot-jpg/Spotlight-Chrome-Extension', },
	{ title: 'Ascend The Darkness', key: 'darkness-pygame', description: 'A short side-scrolling 2D puzzle platformer game', technologies: 'Python, Pygame, UI/UX, Algorithms', status: 'In Progress', lastUpdate: 'July 2025', href: '/projects',  bg: '/AtDss.jpg', projLink: '/', repoLink: 'https://github.com/adel-dot-jpg/Spotlight-Chrome-Extension', },
]

export const EXPERIENCES = [ /* experience section of homepage */
	{ place: 'Toronto Metropolitan University', key: 'TMU', title: 'Computer Engineering, B.Eng', date: 'April 2027', icon: '/tmu.jpg', },
]

export const CONTACTS = [ /* contact section of homepage */
	{ platform: 'GitHub', icon: '/github.svg', href: "https://github.com/adel-dot-jpg", key: "GH", },
	{ platform: 'LinkedIn', icon: '/linkedin.png', href: "https://www.linkedin.com/in/adel-faruque", key: "LI", },
	{ platform: 'Gmail', icon: '/gmail.png', href: "mailto:adelfaruque1@gmail.com", key: "GM", },
]