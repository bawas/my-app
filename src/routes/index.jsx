import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import Home from '../views/Home';
import Signup from '../views/Signup';
import Login from '../views/Login';
import Properties from '../views/Properties';
import Appointments from '../views/Appointments';
import Messages from '../views/Messages';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/home" component={Home} />
      <PublicRoute exact path="/properties" component={Properties} />
      <PublicRoute exact path="/appointments" component={Appointments} />
      <PublicRoute exact path="/messages" component={Messages} />
      <PublicRoute exact path="/signup" component={Signup} />
      <PublicRoute exact path="/login" component={Login} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
