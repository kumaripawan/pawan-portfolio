"use client";
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

export default function Experience() {
  const items = experience as ExperienceItem[];

  // Split jobs vs volunteer/intern
  const jobs = items.filter(
    (job) =>
      !`${job.title} ${job.org} ${job.type}`.toLowerCase().includes("volunteer") &&
      !`${job.title} ${job.org} ${job.type}`.toLowerCase().includes("intern")
  );

  const volunteerInterns = items.filter((job) =>
    `${job.title} ${job.org} ${job.type}`.toLowerCase().match(/volunteer|intern/)
  );

  return (
    <>
      {/* ✅ Main Experience Section (only jobs) */}
      <section
        id="experience"
        className="container mx-auto px-4 py-12 sm:py-16 md:py-24 lg:py-32 scroll-mt-40 md:scroll-mt-32"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <p className="mt-2 text-center text-xs sm:text-sm text-gray-400">
          Roles, responsibilities, and impact.
        </p>

        <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id ?? `${job.title}-${job.org}`} job={job} />
          ))}
        </div>
      </section>

      {/* ✅ Dedicated Volunteership & Internship Section */}
      {volunteerInterns.length > 0 && (
        <section
          id="volunteer"
          className="container mx-auto px-4 py-12 sm:py-16 md:py-24 lg:py-32 scroll-mt-40 md:scroll-mt-32"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Volunteership & Internship
            </span>
          </h2>

          <p className="mt-2 text-center text-sm sm:text-base text-gray-400">
            Practical experience & contributions.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {volunteerInterns.map((job) => (
              <JobCard key={job.id ?? `${job.title}-${job.org}`} job={job} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

/* 🔹 Reusable job card */
function JobCard({ job }: { job: ExperienceItem }) {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
                 p-4 sm:p-6 shadow-sm
                 hover:-translate-y-1 hover:shadow-lg hover:border-fuchsia-500/30
                 transition-all duration-300"
    >
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
        {job.title}{" "}
        <span className="text-gray-300 font-normal">— {job.org}</span>
      </h3>
      <p className="text-[11px] sm:text-xs md:text-sm text-gray-400">
        {job.location ? `${job.location} · ` : ""}
        {job.type ? `${job.type} · ` : ""}
        {job.start} {job.start && job.end ? "–" : ""} {job.end}
      </p>

      {job.bullets?.length ? (
        <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-gray-300">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}

      {job.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {job.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/10
                         px-2 py-0.5 text-[10px] sm:text-xs text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
