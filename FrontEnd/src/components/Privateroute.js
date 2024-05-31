import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, adminRoute, ...rest }) => {
  const token = localStorage.getItem('token'); 
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to="/login" />;
  }

  return <Element {...rest} />;
};

export default PrivateRoute;
