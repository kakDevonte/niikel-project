import React from 'react';
import { Header } from './components/Header';
import './scss/app.scss';
import { AuthPage } from './pages/AuthPage';
import { HospitalPlan } from './pages/HospitalPlan';
import { UsersListPage } from './pages/UsersListPage';
import { AddEditUserPage } from './pages/AddEditUserPage';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AdminWrapper } from './layouts/AdminWrapper';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminWrapper />}>
          <Route path="gosp" element={<HospitalPlan />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<UsersListPage />} />
            <Route path="editor/*" element={<AddEditUserPage />} />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      {/*<AuthPage />*/}
      {/*<HospitalPlan />*/}
      {/*<UsersListPage />*/}
      {/*<AddEditUserPage />*/}
    </div>
  );
}

export default App;
