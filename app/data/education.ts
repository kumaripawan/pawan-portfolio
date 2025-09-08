export type Education = {
  id: string;
  degree: string;
  school: string;
  location?: string;
  start: string;
  end: string;
  details?: string[];
};

export const education: Education[] = [
  {
    id: "msc-solent",
    degree: "MSc Computer Software Engineering",
    school: "Solent University, UK",
    start: "2023",
    end: "2024",
    details: [
      "Software Design & Architecture",
      "Web & Mobile Development",
      "Cloud Computing & DevOps",
      "Data Structures & Algorithms",
      "SQL & Database Systems"
    ],
  },
  {
    id: "mtech-ptu",
    degree: "MTech Computer Science & Software Engineering",
    school: "I.K. Gujral Punjab Technical University, India",
    start: "2020",
    end: "2022",
    details: [
      "Advanced Software Engineering",
      "Machine Learning",
      "Distributed Databases",
      "Cloud Computing"
    ],
  },
  {
    id: "btech-ptu",
    degree: "BTech Computer Science & Software Engineering",
    school: "I.K. Gujral Punjab Technical University, India",
    start: "2013",
    end: "2018",
    details: [
      "DBMS, DSA, OOP",
      "Operating Systems",
      "Software Project Management"
    ],
  },
  {
  id: "secondary-matric",
  degree: "Secondary Education (12th) & Matriculation (10th)",
  school: "ST. Thomas Senior Secondary School & Shiv Shakti Bal Vidyalaya, Pathankot, India",
  start: "2010",
  end: "2013",
  details: [
    "12th (ST. Thomas): Maths, English, Physics, Chemistry, Computer Science",
    "10th (SSBV): Mathematics, English, Science,  Computer Science, History/Geography, Hindi/Punjabi",
  ],
}

];
