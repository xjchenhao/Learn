import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import Users from './routes/Users';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/users" component={Users} />
    </Router>
  );
}
