import Image from "next/image";

// sections
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Edu from "./components/Edu";
import Certs from "./components/certs";
import StatsRail from "./components/StatsRail";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        id="home"
        className="
          container mx-auto px-4
          py-12 sm:py-16 md:py-24 lg:py-32
          flex flex-col items-center text-center scroll-mt-24
        "
      >
        {/* Headshot */}
        <div
          className="
            mb-6 rounded-full p-1 sm:p-1.5 lg:p-2
            bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-pink-200
          "
        >
          <div
            className="
              relative h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-56 lg:w-56
              rounded-full overflow-hidden bg-white shadow-xl ring-1 ring-black/5
            "
          >
            <Image
              src="/images/pawan-headshot.png"
              alt="Pawan Kumari headshot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right-side stats */}
        <StatsRail
          years={3}
          projects={5}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30"
        />

        {/* Name */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-semibold tracking-tight
          "
        >
          SOFTWARE DEVELOPER
        </h1>

        {/* Role + Tech pills */}
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs sm:text-sm">
            Python
          </span>
          <span className="rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs sm:text-sm">
            C#
          </span>
          <span className="rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs sm:text-sm">
            JavaScript
          </span>
        </div>

       {/* Slogan */}
<p
  className="
    mt-4 text-sm sm:text-base md:text-lg lg:text-xl
    max-w-md sm:max-w-xl md:max-w-2xl
  "
>
  <span className="font-medium">Building</span>{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 font-semibold">
    clean, responsive web apps
  </span>
  .
</p>

{/* Download CV button */}
<div className="mt-6">
  <a
    href="/Pawan_Kumari_CV.pdf"
    download
    className="inline-block rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600
               px-6 py-2 text-sm font-medium text-white shadow-md
               hover:opacity-90 transition"
  >
    Download CV
  </a>
</div>

      </section>

      {/* SECTIONS */}
      <Projects />
      <Skills />
      <Experience />
      <Edu />
      <Certs />
    </main>
  );
}
