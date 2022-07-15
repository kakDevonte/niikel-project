import React from 'react';
import { Header } from './components/Header';
import './scss/app.scss';
import { AuthPage } from './pages/AuthPage';
import { HospitalPlan } from './pages/HospitalPlan';
import { UsersListPage } from './pages/UsersListPage';
import { AddEditUserPage } from './pages/AddEditUserPage';

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        {/*<AuthPage />*/}
        {/*<HospitalPlan />*/}
        {/*<UsersListPage />*/}
        <AddEditUserPage />
      </div>
    </div>
  );
}

export default App;
