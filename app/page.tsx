 import Image from "next/image";
  import Projects from "./components/Projects";
 import Skills from "./components/Skills";
 import Experience from "./components/Experience";
import Edu from "./components/Edu";
import Certs from "./components/certs";
 import StatsRail from "./components/StatsRail";
  import React from "react";
 export default function Home() {
 return ( <main className="min-h-screen">
 {/* HERO */}
 <section

  id="home"
  className="
    container mx-auto px-4
    py-12 sm:py-16 md:py-24 lg:py-32
    grid grid-cols-1 md:grid-cols-3 items-center gap-8
    scroll-mt-24
  "
>
  {/* Left side: Bio */}
<p
  className="
    mt-6 max-w-md text-sm sm:text-base md:text-lg
    text-gray-300 leading-relaxed text-left
  "
>
  I’m a <span className="font-medium text-white">Software Developer</span> with a strong background in{" "}
  <span className="font-semibold text-indigo-400">Python</span>,{" "}
  <span className="font-semibold text-indigo-400">.NET/C#</span>, and{" "}
  <span className="font-semibold text-indigo-400">JavaScript</span>.{" "}
  I love turning ideas into responsive, scalable applications that make a real impact.
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
      <span className="rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs sm:text-sm">Python</span>
      <span className="rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs sm:text-sm">C#</span>
      <span className="rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs sm:text-sm">JavaScript</span>
    </div>
  </div>

  {/* Right side stats only visible in home */}
  <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30">
          <StatsRail years={3} projects={5} />
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