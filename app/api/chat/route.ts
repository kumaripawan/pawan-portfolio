import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a chatbot for Pawan Kumari's portfolio site.
Answer only based on the following CV details:

- Software Developer with strong background in Python, C#, and JavaScript.
- Built responsive web apps, APIs, and cloud solutions.

PROFESSIONAL EXPERIENCE
Web Developer Volunteer |UNIMAC CAMEROON |Leicester, United Kingdom| Part-time, Remote |August 2025- Present
● Collaborated with team to design, develop, and maintain a user-friendly, secure, and responsive website for UNIMAC.
●   Ensured cross-device accessibility and integrated engaging multimedia content to enhance user experience.
● Supported organizational programs by implementing web-based tools and features.
● Provided technical support and delivered regular performance reports to improve site functionality.
Adult Workforce Care Home Administrator | Kirkland Care Ltd (Spence field Grange) |Leicester, UK ||Full-time, On-site| April 2025 – Present
● Managed and analysed resident data using internal digital systems; improved data workflows with automation in Excel and documentation aligned with CQC standards; worked with structured digital forms and data logs.
●Handling sensitive patient data in line with GDPR regulations, ensuring security and confidentiality.
●Assisting with monthly data audits, performance reports, and rota Editing to streamline staffing efficiency.
Healthcare and Data Support| Allag Care| Leicester, UK | |Full-time, On-site| April 2024 – January 2025
●Maintained and updated digital care records, ensuring accuracy in daily logs and compliance with GDPR and CQC standards.
● Monitored residents' health trends and contributed to data-driven clinical assessments through structured documentation.
Junior Software Developer |Sarab Web Solutions |Pathankot, India |Full-time, Hybrid| Jan 2020 –May 2023
● Worked as part of a collaborative software development team, contributing to the delivery of custom solutions for startups and small businesses using Python (Django), C# (.NET), and JavaScript (Node.js), under the guidance of senior developers.
● Contributed to the development of e-commerce features including product listings, cart systems, and secure payment gateway integration, including sprint planning, daily stand-ups, peer code reviews, and task tracking using JIRA.
● Used GitHub for collaborative version control and contributed to maintaining CI/CD pipelines for automated deployment.
Web Content & eCommerce Support Assistant |R. K Tuition centre| Pathankot, India |Part time (Remote) | Feb 2018 – Dec 2019
● Supported a small development team in managing and updating WordPress websites including technical support.
● Assisted with website content updates, theme configuration, plugin integration, and performance testing.
●Helped troubleshoot UI/UX issues, optimize product listings, and manage page layouts using built-in CMS tools. To ensured SEO-friendly content.
INTERNSHIPS
Intern | Infowiz Pvt Ltd| Mohali, India | Jan 2017 – May 2017
●Designed data-driven web apps for inventory and shipment tracking using C#/Asp.net.
CERTIFICATIONS
AWS Certified Developer| In Progress


PROJECTS
Task Flow – To-Do List App
Built a simple, mobile-responsive task manager. 🔗 github.com/Kumari Pawan/task flow
Patient Appointment Scheduling System
Developed a client-side appointment scheduler using JavaScript. 🔗 github.com/Kumari Pawan/patient-appointment-scheduling
Solent Travel Management System
Built a console-based travel booking. 🔗 github.com/Kumari Pawan/solenttravelmanagement
Solent University Clone Website
Created a basic multi-page website using. 🔗 github.com/Kumari Pawan/website
EDUCATION
MSc Computer Software Engineering |Solent University, UK | 2023 – 2024
Subjects: Software Design & Architecture, Web & Mobile Development, Cloud Computing & DevOps, Networking & Cybersecurity, Data Structures & Algorithms, Advanced Coding & Problem Solving, Research Methods, SQL & Database Systems, Data Visualization, GitHub Tools
MTech Computer Science & Software Engineering| I.K. Gujral Punjab Technical University| Jalandhar, India | 2020 – 2022
Subjects: Advanced Software Engineering, Machine Learning, Distributed Databases, Information Security, Cloud Computing, Data Warehousing & Mining, Data Structures, Python Programming, Tableau, Research Methodology
BTech Computer Science & Software Engineering| I.K. Gujral Punjab Technical University| Jalandhar, India | 2013 – 2018
Subjects: Database Management Systems, Data Structures & Algorithms, Object-Oriented Programming, Software Project Management, Operating Systems, Computer Architecture, Data Analytics Fundamentals, Mathematics, Applied Physics, Programming in C/Python
Secondary Education |ST. Thomas Senior Secondary School |Pathankot, India|2012 – 2013
Subjects: Mathematics, English, Physics, Chemistry, Computer Science
Matriculation | Shiv Shakti Bal Vidyalaya| Pathankot, India|2010 – 2011
Subjects: Mathematics, English, Physics, Chemistry, Computer Science, History/Geography, Hindi/Punjabi
LANGUAGES
Fluent in English, Hindi, and Punjabi

If asked anything outside this, politely say:
"Sorry, I can only answer questions about Pawan's experience, projects, and skills."
          `,
        },
        { role: "user", content: message },
      ],
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Sorry, I couldn’t respond.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ reply: "⚠️ API error" }, { status: 500 });
  }
}
