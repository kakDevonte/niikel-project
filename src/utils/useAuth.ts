import { useNavigate } from 'react-router-dom';
import React from 'react';

export const useAuth = (pageRole: string) => {
  const navigate = useNavigate();
  //const { isAuth, role } = useSelector(state => state.auth)
  const [isLogin, setLogin] = React.useState(false);

  // if (isAuth && role === pageRole) {
  //   setLogin(true);
  // } else {
  //   setLogin(false);
  //   navigate('/login');
  // }
  return isLogin;
};
