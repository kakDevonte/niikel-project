export const data: string = 'sad';

export type PatientType = {
  id: string;
  name: string;
  content: string;
  department: string;
  direction: string;
  comment: string;
  declarer: string;
  mkb: string;
  declarant?: string;
  date: string;
  isPermit: boolean;
  isDelete: boolean;
};

export type HospitalDayType = {
  date: string;
  department: string;
  patients: PatientType[];
};

export type SearchValueType = {
  firstDate: string;
  secondDate: string;
  department: string;
};

export type HospitalState = {
  hospitalDays: HospitalDayType[];
};
