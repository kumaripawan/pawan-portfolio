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
    <section id="experience" className="container mx-auto px-4 py-16 scroll-mt-20">
  <h2 className="text-3xl font-semibold text-center">
    <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
      Experience
    </span>
  </h2>
  <p className="text-center text-white -400 mt-2">Roles, responsibilities, and impact.</p>
      {/* glass panel */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-10 relative">
        {/* timeline rail */}
        <div className="absolute left-6 top-8 bottom-8 border-l border-white/10 pointer-events-none" aria-hidden />

        <div className="space-y-10">
          {items.map((job) => {
            const id = anchorFor(job);
            return (
              <article
                key={job.id ?? `${job.title}-${job.org}`}
                id={id}
                className="group relative pl-10 scroll-mt-24"
              >
                {/* timeline bullet */}
                <span
                  className="absolute left-2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-white/70 ring-4 ring-white/10"
                  aria-hidden
                />

                {/* rainbow accent like Projects */}
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-70 group-hover:opacity-100" />

                <header>
                  <h3 className="text-xl font-semibold text-white">
                    {job.title} <span className="text-gray-300">— {job.org}</span>
                  </h3>
                  <p className="text-sm text-gray-400">
                    {job.location ? `${job.location} · ` : ""}
                    {job.type ? `${job.type} · ` : ""}
                    {job.start} {job.start && job.end ? "–" : ""} {job.end}
                  </p>
                </header>

                {job.bullets?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-200">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {job.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-gray-200"
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
