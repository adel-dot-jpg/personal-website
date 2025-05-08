import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Kumbh_Sans, DM_Sans } from "next/font/google";
import PageTransitionManager from "../../components/PageTransitionManager";
import Loading from "../../components/Loading";

const navFont = Kumbh_Sans ({
  subsets: ["latin"],
  weight: "200",
})

const bodyFont = DM_Sans ({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://AdelFaruque.ca"),
  title: "Adel Faruque — Art Meets Technology",
  description: "A showcase of full-stack development projects, design work, and technical experiments by Adel Faruque.",
  keywords: [
    "Adel Faruque",
    "portfolio",
    "web developer",
    "full-stack engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "software projects",
    "Toronto engineer",
    "UI/UX" ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: '/apple-icon.png',
  },
  creator: "Adel Faruque",
  openGraph: {
    title: "Adel Faruque — Art Meets Technology",
    description: "Hi! I'm Adel Faruque, a curious full-stack developer. Explore my projects, experiments, and qualifications on my handcrafted, beautifully designed personal portfolio site- featuring my favorite colour, purple!.",
    url: "https://adelfaruque.ca",
    siteName: "Adel Faruque",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Adel Faruque Portfolio Preview",
      },
    ],
    locale: "en_CA",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adel Faruque — Art Meets Technology",
    description: "Showcasing modular projects and tailored design",
    images: ["/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://adelfaruque.ca',
    languages: {
      "en-CA": "https://adelfaruque.ca",
    },
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: "Adel Faruque",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  authors: [{ name: 'Adel Faruque', url: 'https://adelfaruque.ca' }],
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#5a3f65' },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTransitionManager/>
        <div className={navFont.className}>
        <Navbar/>
        </div>
        <div className={bodyFont.className}>
          <main className = "relative overflow-hidden load-in-transition">
            <div id='loading'><Loading/></div>
            <div id='children-wrapper'>
              {children}
            </div>
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
