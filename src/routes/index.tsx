import React, { Suspense, lazy } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LoadingFullSize from 'components/LoadingFullSize';

const Home = lazy(() => import('pages/Home'));
const Events = lazy(() => import('pages/Events'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

const Routes: React.FunctionComponent = () => (
  <Suspense fallback={<LoadingFullSize />}>
    <Header />

    <Switch>
      <Route index element={<Home />} />
      <Route path="events" element={<Events />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Switch>

    <Footer />
  </Suspense>
);

export default Routes;
