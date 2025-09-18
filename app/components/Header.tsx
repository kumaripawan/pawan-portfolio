"use client";
import { useState, useCallback } from "react";

export default function Header() {
  const [, setOpen] = useState(false);

  const handleHome = useCallback(() => {
    setOpen(false);
    if (typeof window !== "undefined") {
      const w = window as typeof window & { __lenisScrollTo?: (y: number) => void };
      if (w.__lenisScrollTo) {
        w.__lenisScrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  // Gradient pill wrapper
  const PillWrap = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex rounded-full p-[1px] bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600">
      {children}
    </span>
  );

  const pillInner =
    "rounded-full bg-black/70 px-2 py-1 text-xs text-gray-100 " +
    "transition-colors hover:bg-black/50 focus:outline-none " +
    "focus:ring-1 focus:ring-white/20 visited:text-gray-100";

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 pt-1">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-center">
        {/* Centered nav links */}
        <div className="hidden sm:flex flex-wrap items-center gap-3 justify-center">
          <PillWrap><button onClick={handleHome} className={pillInner}>Home</button></PillWrap>
          <PillWrap><a href="#projects" className={pillInner}>Projects</a></PillWrap>
          <PillWrap><a href="#skills" className={pillInner}>Skills</a></PillWrap>
          <PillWrap><a href="#experience" className={pillInner}>Experience</a></PillWrap>
          <PillWrap><a href="#education" className={pillInner}>Education</a></PillWrap>
          <PillWrap><a href="#volunteer" className={pillInner}>Volunteership/Internship</a></PillWrap>
          <PillWrap><a href="#contact" className={pillInner}>Contact</a></PillWrap>
        </div>
      </nav>
    </header>
  );
}
