export type Experience = {
  id: string;
  title: string;
  org: string;
  location?: string;
  type?: string;          // e.g., Part-time, Remote
  start: string;          // e.g., "Aug 2025"
  end: string;            // e.g., "Present" or "May 2023"
  bullets: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    id: "unimac",
    title: "Web Developer Volunteer",
    org: "UNIMAC Cameroon",
    location: "Leicester, UK (Remote)",
    type: "Part-time",
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Collaborated to design, develop, and maintain a user-friendly, secure, responsive website.",
      "Ensured cross-device accessibility and integrated engaging multimedia content.",
      "Implemented web-based tools/features to support programs; produced performance reports."
    ],
    tags: ["HTML", "CSS", "JS", "Accessibility"]
  },
    {
    id: "kirkland-care",
    title: "Adult Workforce Care Home Administrator",
    org: "Kirkland Care Ltd (Spencefield Grange)",
    location: "Leicester, UK",
    type: "Full-time, On-site",
    start: "Apr 2025",
    end: "Present",
    bullets: [
      "Managed and analyzed resident data in internal digital systems; streamlined workflows with Excel automation (structured forms, lookups, pivot summaries).",
      "Handled sensitive patient data in line with GDPR; produced documentation aligned with CQC standards.",
      "Assisted monthly data audits and KPI reports; edited rota/schedules to improve staffing efficiency."
    ],
    tags: ["Excel automation", "Data workflows", "GDPR", "CQC", "Reporting", "Scheduling"]
  },
  {
    id: "allag-care",
    title: "Healthcare and Data Support",
    org: "Allag Care",
    location: "Leicester, UK",
    type: "Full-time, On-site",
    start: "Apr 2024",
    end: "Jan 2025",
    bullets: [
      "Maintained and updated digital care records with accurate daily logs and structured forms.",
      "Monitored trends and contributed to data-driven assessments; supported GDPR/CQC compliance through standardized documentation."
    ],
    tags: ["Structured documentation", "Data accuracy", "GDPR", "CQC"]
  },

  {
    id: "sarab",
    title: "Junior Software Developer",
    org: "Sarab Web Solutions",
    location: "Pathankot, India",
    type: "Full-time, Hybrid",
    start: "Jan 2020",
    end: "May 2023",
    bullets: [
      "Contributed to web apps using Python (Django), C# (.NET), and JavaScript (Node.js).",
      "Built e-commerce features (product listings, cart, payments) in agile sprints.",
      "Used GitHub for collaboration and assisted with CI/CD pipelines."
    ],
    tags: ["Python", "Django", "C#", ".NET", "JavaScript", "CI/CD"]
  },
  {
    id: "rk-tuition",
    title: "Web Content & eCommerce Support Assistant",
    org: "R. K Tuition Centre",
    location: "Pathankot, India",
    type: "Part-time (Remote)",
    start: "Feb 2018",
    end: "Dec 2019",
    bullets: [
      "Updated WordPress sites, configured themes/plugins, and performed basic performance testing.",
      "Troubleshot UI/UX issues and optimized product listings with SEO-friendly content."
    ],
    tags: ["WordPress", "CMS", "SEO"]
  },
{
  id: "infowiz",
  title: "Internship - Software Developer",
  org: "Infowiz Software Solutions",
  location: "Mohali, India",
  start: "Jan 2017",
  end: "May 2017",
  bullets: [
    "Built data-driven web apps for inventory and shipment."
  ],
  tags: ["HTML", "CSS", "JS", "C#", "ASP.NET"]
}

];
