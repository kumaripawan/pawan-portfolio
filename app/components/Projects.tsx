"use client";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        container mx-auto px-4
        py-12 sm:py-16 md:py-24 lg:py-32
        scroll-mt-28
      "
    >
      {/* Heading */}
      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-semibold text-center
        "
      >
        <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <p
        className="
          mt-2 text-center
          text-sm sm:text-base md:text-lg
          text-gray-400
        "
      >
        A selection of recent work.
      </p>

      {/* Grid of Projects */}
      <div
        className="
          mt-10 grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.source}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
              p-5 text-gray-200 shadow-sm transition-all duration-200 will-change-transform
              hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20
            "
            aria-label={`${p.title} GitHub repository`}
          >
            {/* Accent bar */}
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 mb-4 opacity-70 group-hover:opacity-100" />

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-white group-hover:underline">
              {p.title}
            </h3>

            {/* Summary */}
            <p className="mt-2 text-sm md:text-base text-gray-300">{p.summary}</p>

            {/* Tags */}
            {Array.isArray(p.tags) && p.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="
                      rounded-full border border-white/15 bg-white/10 px-2 py-0.5
                      text-xs sm:text-sm text-gray-200
                      transition group-hover:-translate-y-0.5 group-hover:shadow-sm
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* GitHub link */}
            <span
              className="
                mt-4 inline-flex items-center
                text-sm sm:text-base
                text-indigo-300 underline
                decoration-indigo-500/40 underline-offset-4
                hover:text-indigo-200 hover:decoration-indigo-400
              "
            >
              View on GitHub →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
