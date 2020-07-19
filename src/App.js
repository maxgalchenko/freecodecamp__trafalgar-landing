import React from 'react';
import Theme from './theme';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NoMatch from './pages/noMatch';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
