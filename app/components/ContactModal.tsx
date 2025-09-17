"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"quick" | "form">("quick");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-zinc-900 rounded-2xl shadow-lg p-8 max-w-2xl w-full text-center">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg ${tab === "quick" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-300"}`}
            onClick={() => setTab("quick")}
          >
            Quick Connect
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${tab === "form" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-300"}`}
            onClick={() => setTab("form")}
          >
            Fill a Form
          </button>
        </div>

        {/* Quick Connect Tab */}
        {tab === "quick" && (
          <>
            <div className="flex flex-col gap-3">
  {/* Default system mail */}
  <a
    href="mailto:pawankumari08765@gmail.com"
    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
  >
    <FaEnvelope /> Email Me (Default App)
  </a>

  {/* Gmail */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=pawankumari08765@gmail.com&su=Portfolio%20Contact"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition"
  >
    📮 Email Me via Gmail
  </a>

  {/* Outlook */}
  <a
    href="https://outlook.live.com/mail/deeplink/compose?to=pawankumari08765@gmail.com&subject=Portfolio%20Contact"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition"
  >
    📮 Email Me via Outlook
  </a>
</div>


              <a
                href="https://calendly.com/pawankumari08765/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition"
              >
                📅 Book a Call
              </a>


            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
              <a href="https://www.linkedin.com/in/pawan-kumari-a45451306/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedin />
              </a>
              <a href="https://github.com/kumaripawan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                <FaGithub />
              </a>
            </div>

            {/* Availability text */}
            <p className="mt-6 text-green-400 text-sm">
              ✅ Currently available for new opportunities
            </p>
          </>
        )}

        {/* Form Tab */}
{tab === "form" && (
  <form
    action="https://formspree.io/f/xandgvnk"
    method="POST"
    className="flex flex-col gap-4 text-left"
  >
    <input
      type="text"
      name="name" // ✅ added name attribute
      placeholder="Your name"
      className="p-3 rounded bg-gray-800 text-white"
      required
    />
    <input
      type="email"
      name="email" // ✅ added name attribute
      placeholder="your.email@example.com"
      className="p-3 rounded bg-gray-800 text-white"
      required
    />
    <textarea
      name="message" // ✅ added name attribute
      placeholder="What would you like to discuss?"
      className="p-3 rounded bg-gray-800 text-white"
      rows={4}
      required
    />
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
    >
      🚀 Send Message
    </button>
  </form>
)}

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-6 text-gray-400 hover:text-white"
        >
          Close ✖
        </button>
      </div>
    </div>
  );
}
