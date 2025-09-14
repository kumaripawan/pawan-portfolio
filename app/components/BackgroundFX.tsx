// app/components/BackgroundFX.tsx
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* === 1) Mesh gradient === */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(36rem 28rem at 10% 20%, rgba(168,85,247,.30), transparent 60%),
            radial-gradient(32rem 24rem at 85% 15%, rgba(236,72,153,.28), transparent 60%),
            radial-gradient(38rem 30rem at 50% 90%, rgba(14,165,233,.28), transparent 60%)
          `,
        }}
      />

      {/* === 2) Rotating conic beam === */}
      <div
        className="absolute inset-0 animate-spinSlower"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              rgba(79,70,229,.20),
              rgba(217,70,239,.22),
              rgba(14,165,233,.18),
              rgba(79,70,229,.20)
            )
          `,
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,.18) 0%, rgba(0,0,0,.12) 40%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,.18) 0%, rgba(0,0,0,.12) 40%, transparent 70%)',
        }}
      />

      {/* === 3) Floating blobs === */}
      <div className="absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-fuchsia-300/35 via-pink-200/35 to-indigo-300/35 blur-xl md:blur-3xl animate-float" />
      <div className="absolute -right-24 top-32 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-amber-200/35 via-rose-200/35 to-pink-200/35 blur-xl md:blur-3xl animate-[float_14s_ease-in-out_infinite_alternate]" />

      {/* === 4) Dotted grid === */}
      <svg
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
        width="100%"
        height="100%"
        aria-hidden
      >
        <defs>
          <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" className="text-gray-700" />
      </svg>

      {/* === 5) Soft vignette === */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_50%,rgba(0,0,0,0.08)_100%)]" />

      {/* === 6) Noise film === */}
      <svg className="absolute inset-0 mix-blend-soft-light opacity-[0.05]" aria-hidden>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
