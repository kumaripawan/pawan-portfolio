import type { Metadata } from "next";
import "./globals.css";

import Starfield from "./components/Starfield";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Pawan Kumari | Portfolio",
  description: "Software Developer — Python, .NET, JavaScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-100 antialiased overflow-x-hidden">
        <Starfield density={1200} maxR={1.6} speed={0.07} />

        {children}
        <SmoothScroll />
        <Footer />
      </body>
    </html>
  );
}
