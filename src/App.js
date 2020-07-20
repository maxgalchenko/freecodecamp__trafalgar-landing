import React from 'react';
import Theme from './theme';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NoMatch from './pages/noMatch';
import Footer from './components/Footer';

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
        <Footer />
      </Router>
    </Theme>
  );
}

export default App;
