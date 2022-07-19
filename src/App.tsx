import React, { useEffect } from 'react';
import './scss/app.scss';
import { AuthPage } from './pages/AuthPage';
import { HospitalPlan } from './pages/HospitalPlan';
import { UsersListPage } from './pages/UsersListPage';
import { AddEditUserPage } from './pages/AddEditUserPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import { AdminWrapper } from './layouts/AdminWrapper';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useAppDispatch, useAppSelector } from './redux/store';
import { getUserData } from './redux/auth/asyncActions';

function App() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div>
      {status !== 'loading' ? (
        <Routes>
          <Route path="/admin" element={<AdminWrapper />}>
            <Route index element={<HospitalPlan />} />
            <Route path="users" element={<Outlet />}>
              <Route index element={<UsersListPage />} />
              <Route path="editor/*" element={<AddEditUserPage />} />
            </Route>
          </Route>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default App;
