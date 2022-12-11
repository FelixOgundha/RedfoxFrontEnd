import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Table from '../pages/booklist';
import SortButton, { PostList } from '../pages/booklist';
import HomePage from '../pages/index'
import Login from '../pages/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact key="homepage" path="/" component={Table} />, */}
      <Route exact key="homepage" path="/home" component={HomePage} />,
      <Route exact key="login" path="/login" component={Login} />,
    </Switch>
  </BrowserRouter >
);

export default Routes;
