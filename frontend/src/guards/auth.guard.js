import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../contexts/app.context';
import jwt_decode from 'jwt-decode';
const AuthGuard = ({ children }) => {
  const { token } = useContext(AppContext);
  const decoded = jwt_decode(token);
  const currentDate = new Date().getTime() / 1000;
  if (token === '' || currentDate >= decoded.exp) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default AuthGuard;
