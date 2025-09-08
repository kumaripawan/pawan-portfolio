'use client';

import { useEffect } from 'react';
import Lenis, { LenisOptions } from '@studio-freight/lenis';

declare global {
  interface Window {
    __lenisScrollTo?: (target: number | string | HTMLElement) => void;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
    } as LenisOptions);

    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    const header = document.querySelector('header');
    const headerOffset =
      header instanceof HTMLElement ? header.offsetHeight + 8 : 80;

    window.__lenisScrollTo = (target: number | string | HTMLElement) =>
      lenis.scrollTo(target, { offset: -headerOffset });

    // Capture-phase listener so we beat default hash navigation and React handlers
    const onDocClick = (e: MouseEvent) => {
      const targetEl = e.target as Element | null;

      // 1) Buttons or any element with data-scroll (e.g., data-scroll="#education" or "top")
      const scroller = targetEl?.closest?.('[data-scroll]') as HTMLElement | null;
      if (scroller) {
        const raw = scroller.getAttribute('data-scroll') || '';
        let dest: number | HTMLElement | null = null;

        if (raw === 'top' || raw === '0') dest = 0;
        else if (raw.startsWith('#')) {
          const el = document.getElementById(raw.slice(1));
          if (el) dest = el;
        }
        if (dest !== null) {
          e.preventDefault();
          lenis.scrollTo(dest, { offset: -headerOffset });
          if (typeof dest !== 'number' && raw.startsWith('#')) {
            history.pushState(null, '', raw);
          }
          return;
        }
      }

      // 2) Anchors with hash (supports "#id", "/#id", and full URLs with hash)
      const a = targetEl?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!a) return;

      const rawHref = a.getAttribute('href') || '';
      // Ignore external page navigations (different path)
      const url = new URL(rawHref, window.location.href);
      if (url.pathname !== window.location.pathname) return;

      const id = url.hash.slice(1);
      if (!id) return;

      const dest = document.getElementById(id);
      if (!dest) return;

      e.preventDefault();
      lenis.scrollTo(dest, { offset: -headerOffset });
      history.pushState(null, '', `#${id}`);
    };

    document.addEventListener('click', onDocClick, { capture: true });

    return () => {
      document.removeEventListener('click', onDocClick, { capture: true } as unknown as boolean);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
