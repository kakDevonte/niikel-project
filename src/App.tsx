import React from 'react';
import { Header } from './components/Header';
import './scss/app.scss';
import { PatientTable } from './components/PatientTable';

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <PatientTable />
      </div>
    </div>
  );
}

export default App;
