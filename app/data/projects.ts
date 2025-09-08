// app/data/projects.ts
export type Project = {
  id: string;
  title: string;
  summary: string;        // short description for the card
  tags: string[];
  source: string;         // GitHub repository URL
  demo?: string;          // optional live link
};

export const projects: Project[] = [
  {
    id: "task-flow",
    title: "Task Flow – To-Do List App",
    summary: "Simple, mobile-responsive task manager.",
    tags: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/kumaripawan/taskflow",
  },
  {
    id: "patient-appointment",
    title: "Patient Appointment Scheduling System",
    summary: "Client-side appointment scheduler using JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/kumaripawan/patient-appointment-scheduling",
  },
  {
    id: "solent-travel",
    title: "Solent Travel Management System",
    summary: "Console-based travel booking app.",
    tags: ["C#", ".NET"],
    source: "https://github.com/kumaripawan/solenttravelmanagement",
  },
  {
    id: "solent-clone",
    title: "Solent University Clone Website",
    summary: "Basic multi-page university website.",
    tags: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/kumaripawan/website",
  },
];
