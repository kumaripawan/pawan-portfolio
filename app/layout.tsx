import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Starfield from "./components/Starfield"; // <-- add


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawan Kumari | Portfolio",
  description: "Software Developer — Python, .NET, JavaScript",
};
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      {/* If you want pure black background, switch text to a light color */}
      <body className={`${inter.className} bg-black text-gray-100 antialiased`}>
        <Starfield density={1200} maxR={1.6} speed={0.07} />
        <Header />
        {children}
        <SmoothScroll />
        <Footer />
      </body>
    </html>
  );
}
