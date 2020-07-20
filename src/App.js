import React from 'react';
import Theme from './theme';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NoMatch from './pages/noMatch';
import Footer from './components/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/freecodecamp__trafalgar-landing/' exact>
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
