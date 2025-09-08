"use client";

import React from "react";
import * as skillsModule from "../data/skills";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiGreensock, SiFramer, SiSass, SiBootstrap,
  SiNodedotjs, SiNestjs, SiExpress,
  SiMysql, SiPostgresql, SiMongodb, SiPrisma,
  SiGit, SiDocker, SiAmazon,
  SiPython, SiHtml5, SiCss3, SiAngular, SiFlask, SiDotnet,
  SiVercel, SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Group = { group: string; items: string[] };
type SkillsRecord = Record<string, string[]>;
type SkillsExport =
  | { skills: Group[] }
  | { skills: SkillsRecord }
  | Group[]
  | SkillsRecord;

function hasSkillsArray(x: unknown): x is { skills: Group[] } {
  if (typeof x !== "object" || x === null) return false;
  const s = (x as { skills?: unknown }).skills;
  return Array.isArray(s);
}
function hasSkillsRecord(x: unknown): x is { skills: SkillsRecord } {
  if (typeof x !== "object" || x === null) return false;
  const s = (x as { skills?: unknown }).skills;
  return !Array.isArray(s) && typeof s === "object" && s !== null;
}
function normalizeSkills(input: SkillsExport): Group[] {
  const src =
    (hasSkillsArray(input) && input.skills) ||
    (hasSkillsRecord(input) && input.skills) ||
    input;

  if (Array.isArray(src)) return src as Group[];
  const rec = src as SkillsRecord;
  return Object.entries(rec).map(([group, items]) => ({
    group,
    items: Array.isArray(items) ? items : [],
  }));
}

/** map common tech names/synonyms -> icon component (use widely-available icons) */
const iconMap: Record<string, IconType> = {
  javascript: SiJavascript, js: SiJavascript,
  typescript: SiTypescript, ts: SiTypescript,
  react: SiReact, "react.js": SiReact, reactjs: SiReact,
  next: SiNextdotjs, "next.js": SiNextdotjs, nextjs: SiNextdotjs,
  redux: SiRedux,
  tailwind: SiTailwindcss, "tailwind css": SiTailwindcss,
  gsap: SiGreensock,
  "framer motion": SiFramer, framer: SiFramer,
  sass: SiSass, scss: SiSass,
  bootstrap: SiBootstrap,

  node: SiNodedotjs, "node.js": SiNodedotjs, nodejs: SiNodedotjs,
  nest: SiNestjs, "nest.js": SiNestjs, nestjs: SiNestjs,
  express: SiExpress, "express.js": SiExpress,

  mysql: SiMysql,
  postgresql: SiPostgresql, postgres: SiPostgresql,
  mongodb: SiMongodb,
  prisma: SiPrisma,

  git: SiGit,
  docker: SiDocker,
  aws: SiAmazon, // fallback icon (broadly available)

  python: SiPython,
  "c#": SiDotnet, csharp: SiDotnet, ".net": SiDotnet, "asp.net": SiDotnet, aspnet: SiDotnet,
  html: SiHtml5, html5: SiHtml5,
  css: SiCss3, css3: SiCss3,
  angular: SiAngular,
  flask: SiFlask,

  vercel: SiVercel,
  github: SiGithub,
};

function normalizeKey(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/\.+js?\b/g, ".js");
}

function Chip({ text }: { text: string }) {
  const Icon = iconMap[normalizeKey(text)] || null;
  return (
    <span
      className="inline-flex items-center gap-2 rounded-xl border border-white/15
                 bg-white/10 px-3 py-1.5 text-sm text-gray-200 shadow-sm
                 transition hover:-translate-y-0.5 hover:bg-white/15"
    >
      {Icon ? (
        <Icon aria-hidden className="h-4 w-4" />
      ) : (
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/60" />
      )}
      {text}
    </span>
  );
}

export default function Skills() {
  const groups = normalizeSkills(skillsModule as unknown as SkillsExport);

  return (
    <section id="skills" className="container mx-auto px-4 py-16 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>
      <p className="text-center text-white-400 mt-2">Technologies and practices I use.</p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-white/40" />
          My Stack
        </p>

        <div className="mt-8 space-y-10">
          {groups.map((g) => (
            <div
              key={g.group}
              className="grid items-start gap-6 md:gap-10 md:grid-cols-[220px_1fr] animate-fadeUp"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-gray-400/90">
                {g.group}
              </h3>

              <div className="flex flex-wrap gap-3">
                {g.items.map((s) => (
                  <Chip key={s} text={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}