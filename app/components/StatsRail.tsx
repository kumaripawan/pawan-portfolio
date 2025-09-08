'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  years?: number;
  projects?: number;
  className?: string;
};

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefers(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return prefers;
}

function useCountUp(active: boolean, target: number, durationMs = 1200) {
  const prefersReduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    if (prefersReduced) {
      setValue(target);
      return;
    }
    let start: number | null = null;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / durationMs, 1);
      setValue(Math.round(target * easeOutCubic(p)));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, durationMs, prefersReduced]);

  return value;
}

export default function StatsRail({ years = 3, projects = 5, className = '' }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  const y = useCountUp(visible, years, 1100);
  const p = useCountUp(visible, projects, 1000);

  const Item = useMemo(
    () =>
      function Item({
        label,
        value,
        suffix = '+',
      }: {
        label: string;
        value: number;
        suffix?: string;
      }) {
        return (
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
                       px-4 py-3 text-right shadow-sm"
            aria-label={label}
          >
            <div className="text-3xl font-extrabold leading-none text-emerald-400" aria-live="polite">
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
      className={`pointer-events-none hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2
                  z-40 flex-col gap-4 ${className}`}
      role="complementary"
      aria-label="Profile statistics"
    >
      <Item label="Years of Experience" value={y} />
      <Item label="Completed Projects" value={p} />
    </div>
  );
}
