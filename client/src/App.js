import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';

import Home from './components/pages/Home';
import About from './components/pages/About';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NavBar from './components/layouts/NavBar';
import Alerts from './components/layouts/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contacts/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  return (
    <Fragment>
      <AlertState>
        <AuthState>
          <ContactState>
            <Router>
              <NavBar />
              <Alerts />
              <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
              </Switch>
            </Router>
          </ContactState>
        </AuthState>
      </AlertState>
    </Fragment>
  );
}

export default App;
