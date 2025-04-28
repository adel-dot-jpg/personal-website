import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {Kumbh_Sans} from "next/font/google";

const navFont = Kumbh_Sans ({
  subsets: ["latin"],
  weight: "200",
})

export const metadata: Metadata = {
  title: "Adel Faruque",
  description: "Adel Faruque's Portfolio Website Homepage",
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
        <main className = "relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
