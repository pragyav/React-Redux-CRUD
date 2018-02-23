import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './header';
import UserForm from './userForm';
import ListUsers from './listUsers';

class MainLayout extends Component {
  render() {
    return <div className="page">
        <Header />
        <Switch>
          <Route path="/home/user-list" component={ListUsers} />
          <Route path="/home/user-form" component={UserForm} />
          <Route path="/home" component={ListUsers} />
        </Switch>
      </div>;
  }
}

export default withRouter(MainLayout);