"use client";
import { useState, useCallback } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const gmailHref =
    "https://mail.google.com/mail/?view=cm&fs=1&to=Pawankumari08765@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Pawan%2C%0A%0A";

const handleHome = useCallback(() => {
  setOpen(false);
  if (typeof window !== "undefined") {
    if (window.__lenisScrollTo) {
      window.__lenisScrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}, []);

  // Gradient pill wrapper + dark inner
  const PillWrap = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex rounded-full p-[1px] bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600">
      {children}
    </span>
  );
  const pillInner =
    "rounded-full bg-black/70 px-3 py-1.5 text-sm text-gray-100 transition-colors hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/20";

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <button onClick={handleHome} className="font-semibold text-gray-100">
          Pawan Kumari
        </button>

        {/* Mobile menu button */}

        <PillWrap>
          <button
            className={`sm:hidden ${pillInner}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </PillWrap>

        {/* Desktop links */}

        <div className="hidden sm:flex flex-wrap items-center gap-3 justify-center">
          <PillWrap>
            <a href="/Pawan_Kumari_CV.pdf" download className={`${pillInner} font-medium`}>
              Download CV
            </a>
          </PillWrap>

          <PillWrap>
            <a href="#home" className={pillInner}>Home</a>
          </PillWrap>
          <PillWrap><a href="#projects" className={pillInner}>Projects</a></PillWrap>
          <PillWrap><a href="#skills" className={pillInner}>Skills</a></PillWrap>
          <PillWrap><a href="#experience" className={pillInner}>Experience</a></PillWrap>
          <PillWrap><a href="#education" className={pillInner}>Education</a></PillWrap>
          <PillWrap><a href="#volunteer" className={pillInner}>Volunteership</a></PillWrap>
          <PillWrap><a href="#internship" className={pillInner}>Internship</a></PillWrap>
          <PillWrap><a href="#certifications" className={pillInner}>Certifications</a></PillWrap>

          <PillWrap>
            <a
              href="https://www.linkedin.com/in/pawan-kumari-a45451306/"
              target="_blank"
              rel="noopener noreferrer"
              className={pillInner}
            >
              LinkedIn
            </a>
          </PillWrap>
          <PillWrap>
            <a
              href="https://github.com/kumaripawan"
              target="_blank"
              rel="noopener noreferrer"
              className={pillInner}
            >
              GitHub
            </a>
          </PillWrap>
          <PillWrap>
            <a href={gmailHref} target="_blank" rel="noopener noreferrer" className={`${pillInner} font-medium`}>
              Contact
            </a>
          </PillWrap>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-nav" className="sm:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            {[
              <a key="cv" href="/Pawan_Kumari_CV.pdf" download>Download CV</a>,
              <button key="home" onClick={handleHome}>Home</button>,
              <a key="projects" href="#projects" onClick={() => setOpen(false)}>Projects</a>,
              <a key="skills" href="#skills" onClick={() => setOpen(false)}>Skills</a>,
              <a key="experience" href="#experience" onClick={() => setOpen(false)}>Experience</a>,
              <a key="education" href="#education" onClick={() => setOpen(false)}>Education</a>,
              <a key="volunteer" href="#volunteer" onClick={() => setOpen(false)}>Volunteership</a>,
              <a key="internship" href="#internship" onClick={() => setOpen(false)}>Internship</a>,
              <a key="certifications" href="#certifications" onClick={() => setOpen(false)}>Certifications</a>,
              <a key="linkedin" href="https://www.linkedin.com/in/pawan-kumari-a45451306/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>LinkedIn</a>,
              <a key="github" href="https://github.com/kumaripawan" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>GitHub</a>,
              <a key="contact" href={gmailHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Contact</a>,
            ].map((el, i) => (
              <PillWrap key={i}>
                <div className={pillInner}>{el}</div>
              </PillWrap>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
