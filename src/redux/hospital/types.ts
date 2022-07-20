export const data: string = 'sad';

export type PatientType = {
  name: string;
  contingent: string;
  department: string;
  profile: string;
  comment: string;
  date: string;
  isPermit: boolean;
};

export type HospitalState = {
  patients: PatientType[];
};
