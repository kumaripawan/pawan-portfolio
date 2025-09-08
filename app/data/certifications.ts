export type Certification = {
  id: string;
  name: string;        // e.g., "AWS Certified Developer – Associate (DVA-C02)"
  issuer: string;      // e.g., "Amazon Web Services"

  status?: "Completed" | "In Progress";
  link?: string;       // verification URL (optional)
};

export const certifications: Certification[] = [
  {
    id: "aws-dva",
    name: "AWS Certified Developer – Associate (DVA-C02)",
    issuer: "Amazon Web Services",

    status: "In Progress",
    // link: "https://… (add verification URL when you have it)"
  },
  // Add more here later if you have them
];
