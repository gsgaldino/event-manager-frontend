import React, { Suspense, lazy } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LoadingFullSize from 'components/LoadingFullSize';

import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Events = lazy(() => import('pages/Events'));
const Event = lazy(() => import('pages/Event'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Profile = lazy(() => import('pages/Profile'));

const Routes: React.FunctionComponent = () => (
  <Suspense fallback={<LoadingFullSize />}>
    <Header />

    <Switch>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:eventId" element={<Event />} />

      <Route path="/profile" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Switch>

    <Footer />
  </Suspense>
);

export default Routes;
