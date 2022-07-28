import React from 'react';
import { useAppSelector } from '../redux/store';

export const useAuth = (pageRole: string[]): boolean => {
  const { isAuth, role } = useAppSelector((state) => state.auth.data);
  const isLogin = React.useRef(false);

  if (isAuth && pageRole.includes(role)) {
    isLogin.current = true;
  } else {
    isLogin.current = false;
  }

  return isLogin.current;
};
