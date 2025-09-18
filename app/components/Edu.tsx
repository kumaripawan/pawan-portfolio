import { education } from "../data/education";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
 <section
  id="education"
  className="
    container mx-auto px-4
    py-12 sm:py-16 md:py-24 lg:py-32
    scroll-mt-40 md:scroll-mt-32
  "
>


      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
        <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          Education
        </span>
      </h2>

      <p className="mt-2 text-center text-xs sm:text-sm text-gray-400">
        Degrees & key modules.
      </p>

      {/* Education Grid (2 per row) */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {education.map((ed) => (
          <article
            key={ed.id}
            className="
              group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
              p-4 sm:p-5 lg:p-6
              shadow-sm transition-all
              hover:-translate-y-1 hover:shadow-lg hover:border-fuchsia-500/30
            "
          >
            {/* Icon + Degree */}
            <div className="flex items-center gap-3 mb-2">
              <FaGraduationCap className="text-pink-500 h-5 w-5" />
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                {ed.degree}
              </h3>
            </div>

            {/* School + Date */}
            <p className="text-xs sm:text-sm text-gray-300">{ed.school}</p>
            <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
              {ed.start} – {ed.end}
            </p>

            {/* Details */}
            {ed.details?.length ? (
              <ul className="mt-3 list-disc pl-4 text-[11px] sm:text-xs text-gray-300 space-y-1">
                {ed.details.map((d: string, i: number) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
