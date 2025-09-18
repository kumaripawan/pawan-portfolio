"use client";
import Image from "next/image";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Edu from "./components/Edu";
import StatsRail from "./components/StatsRail";
import ChatBot from "./components/ChatBot";
import React, { useState } from "react";
import ContactModal from "./components/ContactModal";
import Header from "./components/Header";  // ✅ added Header import

export default function Home() {
  const [openContact, setOpenContact] = useState(false); // ✅ modal state

  return (
    <>
      {/* ✅ Header at the very top */}
      <Header onContactClick={() => setOpenContact(true)} />

      <main className="min-h-screen pb-28">

        {/* HERO */}
       <section
  id="home"
  className="
    container mx-auto px-4
    py-12 sm:py-16 md:py-24 lg:py-32
    scroll-mt-24 md:scroll-mt-32
  "
>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            I’m a Software Developer with a strong background in Python, .NET/C#,
            and JavaScript. I love turning ideas into responsive, scalable
            applications that make a real impact.
          </p>

          {/* Middle: Headshot + Role */}
          <div className="flex flex-col items-center text-center">
            {/* Headshot */}
            <div className="mb-6 rounded-full p-1 sm:p-1.5 lg:p-2 bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-pink-200">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-56 lg:w-56 rounded-full overflow-hidden bg-white shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/pawan-headshot.png"
                  alt="Pawan Kumari headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <h1
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]
                font-extrabold tracking-tight text-center
                whitespace-nowrap
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
          </div>

        <div className="w-full flex justify-center mt-6 md:justify-end md:mt-0 md:w-1/3">
  <StatsRail years={3} projects={5} />
</div>


        </section>

        {/* SECTIONS */}
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

    {/* Education Section */}
<section id="education" className="scroll-mt-24">
  <Edu />
</section>

{/* Experience Section */}
<section id="experience" className="scroll-mt-24">
  <Experience />
</section>


        <section id="certifications" className="scroll-mt-24">

        </section>

        <ChatBot />

        {/* ✅ Contact modal only shows when state is true */}
        {openContact && <ContactModal onClose={() => setOpenContact(false)} />}
      </main>
    </>
  );
}