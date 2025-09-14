import { certifications } from "../data/certifications";

// Element type derived from your data
type Cert = (typeof certifications)[number];

// Safe string getter (no `any`)
function getString(obj: unknown, key: string): string | undefined {
  if (obj && typeof obj === "object") {
    const v = (obj as Record<string, unknown>)[key];
    return typeof v === "string" ? v : undefined;
  }
  return undefined;
}

export default function Certifications() {
  return (
    <section
      id="certifications"
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
          Certifications
        </span>
      </h2>

      <p
        className="
          mt-2 text-center
          text-sm sm:text-base md:text-lg
          text-gray-400
        "
      >
        Current and completed credentials.
      </p>

      {/* Grid */}
      <div
        className="
          mt-8 grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {certifications.map((c: Cert) => {
          // Flexible field names
          const id =
            getString(c, "id") ??
            `${getString(c, "name") ?? "cert"}-${getString(c, "issuer") ?? "issuer"}`;

          const name =
            getString(c, "name") ??
            getString(c, "title") ??
            "Certification";

          const issuer =
            getString(c, "issuer") ??
            getString(c, "provider") ??
            "";

          const date =
            getString(c, "date") ??
            getString(c, "issued") ??
            getString(c, "year");

          const status = getString(c, "status");
          const link = getString(c, "link");

          return (
            <article
              key={id}
              className="
                group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
                p-4 sm:p-5 lg:p-6
                text-gray-200 shadow-sm transition
                hover:-translate-y-0.5 hover:bg-white/10
              "
            >
              {/* Accent bar */}
              <div className="mb-2 sm:mb-3 h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-70 group-hover:opacity-100" />

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                {name}
              </h3>
              {issuer && (
                <p className="text-sm sm:text-base text-gray-300">{issuer}</p>
              )}

              <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm">
                {date && <span className="text-gray-400">{date}</span>}
                {status && (
                  <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-xs text-gray-200">
                    {status}
                  </span>
                )}
              </div>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3 inline-block
                    text-xs sm:text-sm md:text-base
                    text-indigo-300 underline decoration-indigo-500/40 underline-offset-4
                    hover:text-indigo-200 hover:decoration-indigo-400
                  "
                >
                  Verify →
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
