import React from 'react';
import { Header } from '../components/Header';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';

export const AdminWrapper: React.FC = () => {
  if (!useAuth('admin')) return <Navigate to={'/'} />;

  return (
    <>
      <div>
        <Header />
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};
