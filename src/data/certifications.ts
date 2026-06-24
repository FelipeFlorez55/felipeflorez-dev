/**
 * Certifications for the Certifications section. Names/codes are proper nouns (not
 * translated); the "in progress" label is localized in the component. Source: CV.
 * Order: strongest / most relevant first.
 */
export interface Certification {
  name: string;
  issuer: string;
  code?: string;
  inProgress?: boolean;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "AWS",
    code: "SAA-C03",
  },
  { name: "AWS Certified AI Practitioner", issuer: "AWS", code: "AIF-C01" },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "AWS",
    code: "DVA-C02",
    inProgress: true,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    code: "CLF-C02",
  },
  {
    name: "Scrum Master Professional Certificate (SMPC)",
    issuer: "CertiProf",
  },
  { name: "ITIL 4 Foundation", issuer: "PeopleCert" },
];
