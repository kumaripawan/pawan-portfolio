"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import VisitorCounter from "./VisitorCounter"; // 👈 import the visitor counter

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        relative
        mt-12 sm:mt-16
        border-t border-white/10
        bg-black/40 backdrop-blur-sm
      "
    >
      <div
        className="
          container mx-auto px-4
          py-8 sm:py-10
          text-center
        "
      >
        {/* Signature */}
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          Design &amp; built by{" "}
          <span className="font-medium text-gray-200">Pawan Kumari</span>
        </p>

        {/* Contact options */}
        <div className="mt-6 flex flex-col gap-3 items-center">
          {/* Default system mail */}
          <a
            href="mailto:pawankumari08765@gmail.com"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition"
          >
            <FaEnvelope /> Email Me (Default App)
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pawankumari08765@gmail.com&su=Portfolio%20Contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-lg transition"
          >
            📮 Email Me via Gmail
          </a>

          {/* Outlook */}
          <a
            href="https://outlook.live.com/mail/deeplink/compose?to=pawankumari08765@gmail.com&subject=Portfolio%20Contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-5 rounded-lg transition"
          >
            📮 Email Me via Outlook
          </a>

          {/* Calendly */}
          <a
            href="https://calendly.com/pawankumari08765/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-lg transition"
          >
            📅 Book a Call
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/pawan-kumari-a45451306/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kumaripawan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100"
          >
            <FaGithub />
          </a>
        </div>

        {/* Availability */}
        <p className="mt-6 text-green-400 text-sm">
          ✅ Currently available for new opportunities
        </p>
      </div>

      {/* 👇 Visitor counter pinned bottom-left */}
      <div className="absolute bottom-6 left-20">
        <VisitorCounter />
         <a
              href="/Pawan_Kumari_CV.pdf"
              download
              className="rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600
                         px-3 py-1 text-xs font-medium text-white shadow-md hover:opacity-90 transition text-center"

            >
              Download CV
            </a>
      </div>
    </footer>
  );
}
