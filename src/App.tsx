import React from 'react';
import { Header } from './components/Header';
import './scss/app.scss';
import { HospitalPlan } from './pages/HospitalPlan';

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <HospitalPlan />
      </div>
    </div>
  );
}

export default App;
