import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/auth/authContext';

function RequireAuth({ children, redirectTo }) {
  const { state: auth } = useContext(AuthContext);

  let isAuth = auth && (auth.isAuthenticated || auth.token) ? true : false;

  return isAuth ? children : <Navigate to={redirectTo} />;
}
export default RequireAuth;
