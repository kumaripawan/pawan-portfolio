import { education } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="
        container mx-auto px-4
        py-12 sm:py-16 md:py-24 lg:py-32
        scroll-mt-20
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
          Education
        </span>
      </h2>

      <p
        className="
          mt-2 text-center
          text-sm sm:text-base md:text-lg
          text-gray-400
        "
      >
        Degrees & key modules.
      </p>

      {/* Education cards */}
      <div
        className="
          mt-8 grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {education.map((ed) => (
          <article
            key={ed.id}
            className="
              group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
              p-4 sm:p-6 lg:p-8
              shadow-sm transition
              hover:-translate-y-0.5 hover:bg-white/10
            "
          >
            {/* Accent bar */}
            <div className="mb-3 sm:mb-4 h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-70 group-hover:opacity-100" />

            <h3
              className="
                text-lg sm:text-xl md:text-2xl
                font-semibold text-white
              "
            >
              {ed.degree}
            </h3>
            <p className="text-sm sm:text-base text-gray-300">{ed.school}</p>
            <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-400">
              {ed.start} – {ed.end}
            </p>

            {ed.details?.length ? (
              <ul
                className="
                  mt-3 list-disc pl-4 sm:pl-5
                  text-xs sm:text-sm md:text-base
                  text-gray-200
                "
              >
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
