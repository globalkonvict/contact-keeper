import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NavBar from './components/layouts/NavBar';
import ContactState from './context/contacts/ContactState';

function App() {
  return (
    <Fragment>
      <ContactState>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Router>
      </ContactState>
    </Fragment>
  );
}

export default App;
