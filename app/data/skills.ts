export type Skills = { [category: string]: string[] };

export const skills: Skills = {
  "Languages": ["Python", "C#", "JavaScript", "HTML", "CSS"],

  // Tech used to build this site
  "Frontend & Site Stack": ["Next.js", "React", "Tailwind CSS", "TypeScript"],

  "Frameworks & Libraries": ["ASP.NET MVC", "Flask", "Angular", "Bootstrap"],

  "Backend & Scripting": ["Python scripting", "ASP.NET (controllers, routing, views)"],

  "AI & Bots": [
  "Chatbot Development (React + OpenAI API)",
  "Prompt Engineering (ChatGPT)",
  "Workflow Automation (Zapier AI + GPT)",
  "Website form integration",
],

  // Keep CMS separate so WordPress/Shopify are obvious
  "Web & CMS Platforms": ["WordPress"],

  // Integration topics kept distinct from frameworks
  "APIs & Integrations": ["REST APIs", "Form handling", "Responsive design"],

  "Databases": ["MySQL", "SQLite"],

  "Deployment & CI/CD": ["GitHub Pages (static export)", "GitHub Actions", "Docker"],

  "Version Control & Tools": ["Git", "GitHub", "Visual Studio", "VS Code", "Postman"],

  "Testing & Debugging": ["Pytest", "Browser DevTools", "Visual Studio debugger"],

  "Customer & Web Support": ["Website content updates", "Product uploads", "User support", "Documentation"],

  "Workflow & Practices": ["Agile", "Clean code", "Task breakdown", "Cross-functional collaboration"]
};
