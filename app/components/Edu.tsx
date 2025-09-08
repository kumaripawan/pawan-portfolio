import { education } from "../data/education";

export default function Education() {
  return (
   <section id="education" className="container mx-auto px-4 py-16 scroll-mt-20">
  <h2 className="text-3xl font-semibold text-center">
    <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
      Education
    </span>
  </h2>
  <p className="text-center text-white -400 mt-2">Degrees & key modules.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {education.map((ed) => (
          <article
            key={ed.id}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            {/* rainbow accent like Projects */}
            <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-70 group-hover:opacity-100" />

            <h3 className="text-xl font-semibold text-white">{ed.degree}</h3>
            <p className="text-gray-300">{ed.school}</p>
            <p className="text-sm text-gray-400 mt-1">
              {ed.start} – {ed.end}
            </p>

            {ed.details?.length ? (
              <ul className="mt-3 list-disc pl-5 text-gray-200">
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
