import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {Kumbh_Sans} from "next/font/google";
import { DM_Sans } from "next/font/google";

const navFont = Kumbh_Sans ({
  subsets: ["latin"],
  weight: "200",
})

const bodyFont = DM_Sans ({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Adel Faruque — Where Art Meets Technology",
  description: "Showcasing my projects, experiences, and quirks to the world",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={navFont.className}>
        <Navbar/>
        </div>
        <div className={bodyFont.className}>
          <main className = "relative overflow-hidden view-transition-new">
            {children}
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
