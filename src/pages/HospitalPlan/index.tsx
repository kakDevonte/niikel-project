import React from 'react';
import { PatientTable, PatientPanel } from '../../components/';

export const HospitalPlan: React.FC = () => {
  return (
    <div>
      <PatientPanel />
      <PatientTable />
    </div>
  );
};
