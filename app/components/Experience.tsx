import { experience } from "../data/experience";

type ExperienceItem = {
  id?: string;
  title?: string;
  org?: string;
  location?: string;
  type?: string;
  start?: string;
  end?: string;
  bullets?: string[];
  tags?: string[];
};

function anchorFor(job: ExperienceItem): "volunteer" | "internship" | undefined {
  const s = `${job.title ?? ""} ${job.org ?? ""} ${job.type ?? ""}`.toLowerCase();
  if (s.includes("volunteer")) return "volunteer";
  if (s.includes("intern")) return "internship";
  return undefined;
}

export default function Experience() {
  const items = experience as unknown as ExperienceItem[];

  return (
    <section
      id="experience"
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
          Experience
        </span>
      </h2>

      <p
        className="
          mt-2 text-center
          text-sm sm:text-base md:text-lg
          text-gray-400
        "
      >
        Roles, responsibilities, and impact.
      </p>

      {/* Glass panel */}
      <div
        className="
          mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm
          p-4 sm:p-6 md:p-10
          relative
        "
      >
        {/* Timeline rail */}
        <div
          className="absolute left-6 top-8 bottom-8 border-l border-white/10 pointer-events-none"
          aria-hidden
        />

        <div className="space-y-8 sm:space-y-10">
          {items.map((job) => {
            const id = anchorFor(job);
            return (
              <article
                key={job.id ?? `${job.title}-${job.org}`}
                id={id}
                className="group relative pl-8 sm:pl-10 scroll-mt-24"
              >
                {/* Timeline bullet */}
                <span
                  className="absolute left-2 top-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 -translate-x-1/2 rounded-full bg-white/70 ring-4 ring-white/10"
                  aria-hidden
                />

                {/* Accent bar */}
                <div className="mb-2 sm:mb-3 h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-70 group-hover:opacity-100" />

                {/* Job Header */}
                <header>
                  <h3
                    className="
                      text-lg sm:text-xl md:text-2xl
                      font-semibold text-white
                    "
                  >
                    {job.title}{" "}
                    <span className="text-gray-300">— {job.org}</span>
                  </h3>
                  <p
                    className="
                      text-xs sm:text-sm md:text-base
                      text-gray-400
                    "
                  >
                    {job.location ? `${job.location} · ` : ""}
                    {job.type ? `${job.type} · ` : ""}
                    {job.start} {job.start && job.end ? "–" : ""} {job.end}
                  </p>
                </header>

                {/* Bullets */}
                {job.bullets?.length ? (
                  <ul
                    className="
                      mt-3 list-disc space-y-1 pl-4 sm:pl-5
                      text-xs sm:text-sm md:text-base
                      text-gray-200
                    "
                  >
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {/* Tags */}
                {job.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="
                          rounded-full border border-white/15 bg-white/10
                          px-2 py-0.5 text-xs sm:text-sm text-gray-200
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
