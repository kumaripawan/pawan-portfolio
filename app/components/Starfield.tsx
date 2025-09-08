'use client';

import { useEffect, useRef } from 'react';

type Star = { x:number; y:number; z:number; r:number; tw:number; tws:number; vx:number; vy:number };

export default function Starfield({
  density = 1200,  // lower -> more stars
  maxR = 1.6,
  speed = 0.03,
  className = '',
}: {
  density?: number; maxR?: number; speed?: number; className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    let width = 0, height = 0, dpr = 1;
    let stars: Star[] = [];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rand = (min:number, max:number) => Math.random() * (max - min) + min;

    const initStars = () => {
      const count = Math.max(100, Math.round((width * height) / density));
      stars = Array.from({ length: count }, () => {
        const z = Math.random();
        const r = rand(0.2, maxR) * (1.4 - z);
        const dir = Math.random() * Math.PI * 2;
        const s = speed * (0.2 + (1 - z));
        return { x: Math.random()*width, y: Math.random()*height, z, r,
                 tw: Math.random()*Math.PI*2, tws: rand(0.015, 0.045),
                 vx: Math.cos(dir)*s, vy: Math.sin(dir)*s };
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
      drawStatic();
    };

    const clear = () => ctx.clearRect(0, 0, width, height);

    const drawStatic = () => {
      clear();
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      for (const s of stars) {
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const step = () => {
      clear();
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      for (const s of stars) {
        s.tw += s.tws;
        s.x += s.vx; s.y += s.vy;

        if (s.x < -2) s.x = width + 2;
        if (s.x > width + 2) s.x = -2;
        if (s.y < -2) s.y = height + 2;
        if (s.y > height + 2) s.y = -2;

        const alpha = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.tw));
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (!prefersReducedMotion) rafRef.current = requestAnimationFrame(step);
    else drawStatic();

    return () => { ro.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [density, maxR, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 h-full w-full ${className}`}
    />
  );
}
