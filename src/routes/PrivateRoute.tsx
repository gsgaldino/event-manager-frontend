import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { rootState } from 'store';

const PrivateRoute = () => {
  const { loggedUser } = useSelector((s: rootState) => s.user);

  const auth = typeof loggedUser.dashboardToken !== 'undefined'
    && Boolean(loggedUser.dashboardToken);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
