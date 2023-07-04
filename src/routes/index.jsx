import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Index from '../pages/frontend';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact key="homepage" path="/" component={Table} />, */}
      <Route exact key="login" path="/" component={Login} />,
      <Route exact key="home" path="/home" component={Home} />,
      <Route exact key="front" path="/front" component={Index} />,
    </Switch>
  </BrowserRouter >
);

export default Routes;
