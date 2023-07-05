import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Index from '../pages/frontend';
import Contact from '../pages/frontend/contact';
import Services from '../pages/frontend/services';
import Rooms from '../pages/frontend/rooms';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact key="homepage" path="/" component={Table} />, */}
      <Route exact key="login" path="/" component={Login} />,
      <Route exact key="home" path="/home" component={Home} />,
      <Route exact key="front" path="/front" component={Index} />,
      <Route exact key="contact" path="/contact" component={Contact} />,
      <Route exact key="contact" path="/services" component={Services} />,
      <Route exact key="rooms" path="/rooms" component={Rooms} />,
    </Switch>
  </BrowserRouter >
);

export default Routes;
