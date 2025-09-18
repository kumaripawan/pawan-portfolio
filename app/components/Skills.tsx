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

// Normalize input
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

// Map tech names to icons
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
  aws: SiAmazon,

  python: SiPython,
  "c#": SiDotnet, csharp: SiDotnet, ".net": SiDotnet, "asp.net": SiDotnet, aspnet: SiDotnet,
  html: SiHtml5, html5: SiHtml5,
  css: SiCss3, css3: SiCss3,
  angular: SiAngular,
  flask: SiFlask,

  vercel: SiVercel,
  github: SiGithub,
};

// Normalize text keys
function normalizeKey(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/\.+js?\b/g, ".js");
}

function Chip({ text }: { text: string }) {
  const Icon = iconMap[normalizeKey(text)] || null;
  return (
    <span
      className="
        inline-flex items-center gap-2
        rounded-full border border-white/10
        bg-black/40 backdrop-blur-sm
        px-3 py-1.5 sm:px-4 sm:py-2
        text-xs sm:text-sm
        text-gray-200 font-medium
        shadow-md
        transition transform
        hover:-translate-y-1 hover:scale-105
        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600
        hover:text-white
      "
    >
      {Icon ? (
        <Icon aria-hidden className="h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <span aria-hidden className="h-2 w-2 rounded-full bg-white/60" />
      )}
      {text}
    </span>
  );
}

// Main Skills component
export default function Skills() {
  const groups = normalizeSkills(skillsModule as unknown as SkillsExport);

  return (
    <section
  id="skills"
  className="
    container mx-auto px-4
    py-12 sm:py-16 md:py-24 lg:py-32
    scroll-mt-24 md:scroll-mt-32
  "
>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
        <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <p className="mt-2 text-center text-xs sm:text-sm md:text-base text-gray-400">
        Technologies and practices I use.
      </p>

      {/* Skills Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g: { group: string; items: string[] }) => (
          <article
            key={g.group}
            className="
              group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
              p-4 sm:p-6 shadow-sm transition-all
              hover:-translate-y-1 hover:shadow-lg hover:border-fuchsia-500/30
            "
          >
            {/* Group Heading */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3">
              {g.group}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {g.items.map((s: string) => (
                <Chip key={s} text={s} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
