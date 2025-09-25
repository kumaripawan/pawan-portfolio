"use client";
import { useRef, useMemo } from "react";  // ✅ only keep what’s needed

type Props = {
  years?: number;
  projects?: number;
  className?: string;
};

export default function StatsRail({ years = 3, projects = 5, className = "" }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // ✅ Stats Item component
  const Item = useMemo(
    () =>
      function Item({
        label,
        value,
        suffix = "+",
      }: {
        label: string;
        value: number;
        suffix?: string;
      }) {
        return (
          <div
            className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm
                       px-4 py-3 text-right shadow-sm"
            aria-label={label}
          >
            <div className="text-3xl font-extrabold leading-none text-emerald-400">
              {value}
              {suffix}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-300">
              {label}
            </div>
          </div>
        );
      },
    []
  );

  return (
    <div
      ref={rootRef}
      className={`flex gap-4 justify-center w-full mt-6
            md:mt-0 md:w-auto md:flex-col
            md:fixed md:right-6 md:top-1/2 md:-translate-y-1/2
            z-40 ${className}`}
    >
      {/* ✅ Only Experience + Projects now */}
      <Item label="Years of Experience" value={years} />
      <Item label="Completed Projects" value={projects} />

      {/* Download CV button */}
      <a
        href="/Pawan_Kumari_CV.pdf"
        download
        className="mt-2 inline-block rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600
                   px-4 py-2 text-sm font-medium text-white shadow-md hover:opacity-90 transition text-center"
      >
        Download CV
      </a>
    </div>
  );
}
