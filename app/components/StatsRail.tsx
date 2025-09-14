"use client";
import { useMemo, useRef, useState, useEffect } from "react";

type Props = {
  years?: number;
  projects?: number;
  className?: string;
};

export default function StatsRail({ years = 3, projects = 5, className = "" }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [, setVisible] = useState(false);
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setVisible(true);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

 // Visitor count (local simulation for now)
useEffect(() => {
  const count = localStorage.getItem("visitor-count");
  const newCount = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("visitor-count", newCount.toString());
  setVisitors(newCount);
}, []);


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
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-300">{label}</div>
          </div>
        );
      },
    []
  );

  return (
    <div
      ref={rootRef}
      className={`hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2
                  z-40 flex-col gap-4 ${className}`}
    >
      {/* Visitors */}
      <div
        className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm
                   px-4 py-3 text-right shadow-sm"
        aria-label="Visitors"
      >
        <div className="text-3xl font-extrabold leading-none text-indigo-400">
          {visitors !== null ? visitors : "..."}
        </div>
        <div className="mt-1 text-xs uppercase tracking-wide text-gray-300">
          Visitors
        </div>
      </div>

      {/* Stats */}
      <Item label="Years of Experience" value={years} />
      <Item label="Completed Projects" value={projects} />

      {/* Download CV button inside stats rail */}
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
