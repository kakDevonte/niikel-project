import React from 'react';
import { PatientTable } from '../../components/PatientTable';
import { PatientPanel } from '../../components/PatientPanel';

export const HospitalPlan: React.FC = () => {
  return (
    <div>
      <PatientPanel />
      <PatientTable />
    </div>
  );
};
