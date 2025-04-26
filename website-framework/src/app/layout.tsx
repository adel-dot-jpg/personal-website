import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
