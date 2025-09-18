"use client";
import Image from "next/image";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Edu from "./components/Edu";

import ChatBot from "./components/ChatBot";


import Header from "./components/Header";  // ✅ added Header import

export default function Home() {


  return (
    <>
        {/* ✅ Header no longer needs onContactClick */}
      <Header />

      <main className="min-h-screen pb-28">
        {/* HERO */}
        <section


  id="home"
  className="
    container mx-auto px-4
    pt-4 sm:pt-6 md:pt-8 lg:pt-10   /* 👈 top padding smaller */
    pb-12 sm:pb-16 md:pb-20 lg:pb-24  /* 👈 keep bottom padding */
    scroll-mt-24 md:scroll-mt-32
    flex flex-col items-center text-center
  "
>

  <div className="max-w-2xl">
    {/* Intro paragraph */}
    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
      Myself Pawan Kumari, I’m a Software Developer with a strong background in{" "}
      <span className="text-indigo-400">Python</span>,{" "}
      <span className="text-purple-400">.NET/C#</span>, and{" "}
      <span className="text-pink-400">JavaScript</span>. I love turning ideas
      into responsive, scalable applications that make a real impact.
    </p>

    {/* Experience line */}
    <p className="mt-4 text-green-400 font-semibold text-sm sm:text-base md:text-lg">
      🚀 3+ years of experience as a Junior Software Developer · 5+ completed projects
    </p>

  {/* Profile photo */}
<div className="mt-12 flex justify-center">
  <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 rounded-full overflow-hidden bg-white shadow-lg ring-4 ring-fuchsia-400/40">
    <Image
      src="/images/pawan-headshot.png"
      alt="Pawan Kumari headshot"
      fill
      className="object-cover object-top" // 👈 important
      priority
    />
  </div>
</div>

  </div>
</section>



        {/* SECTIONS */}
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        {/* ✅ Experience.tsx handles both #experience and #volunteer */}
        <Experience />

        {/* ✅ Education */}
        <Edu />

        <ChatBot />


      </main>
    </>
  );
}
