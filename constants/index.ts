/* elements to be added  to aggregate components just need to be added here */

export const NAV_LINKS = [ /* for navbar/folding menu items */
	{ href: '/', key: 'home', label: 'Home', },
	{ href: 'http://localhost:3000/projects', key: 'projects', label: 'Projects' },
	{ href: 'http://localhost:3000/#contact', key: 'contact', label: 'Contact' },
]

export const PROJECTS = [ /* shared among homepage projects section and projects page */
	{ title: 'Portfolio Website', key: 'personal-website', description: 'A responsive and sleek personal website with a focus on code reusability and a mobile-first design strategy', technologies: 'React, Next.js, TypeScript, TailwindCSS, UI/UX, SEO', status: 'Completed', lastUpdate: 'Apr 2025', href: '/',  bg: '/PWss.jpg', projLink: '/', repoLink: '/', },
	{ title: 'Moon Tracker', key: 'moon-phase', description: 'An all-in-one night sky tracker with moon phase tracking, anomaly alerts, and year-round star maps', technologies: 'React, Next.js, TypeScript, TailwindCSS, mongoDB, Web Scraping (Beautiful Soup), APIs', status: 'Planning', lastUpdate: 'Apr 2025', href: '/',  bg: '/PWss.jpg', projLink: '/', repoLink: '/', },
]

export const EXPERIENCES = [ /* experience section of homepage */
	{ place: 'Toronto Metropolitan University', key: 'TMU', title: 'Computer Engineering, B.Eng', date: 'April 2027', icon: '/tmu.jpg', },
]

export const CONTACTS = [ /* contact section of homepage */
	{ platform: 'GitHub', icon: '/github.svg', href: "https://github.com/adel-dot-jpg", key: "GH", },
	{ platform: 'LinkedIn', icon: '/linkedin.png', href: "https://www.linkedin.com/in/adel-faruque-1873b5295/", key: "LI", },
	{ platform: 'Gmail', icon: '/gmail.png', href: "mailto:adelfaruque1@gmail.com", key: "GM", },
]