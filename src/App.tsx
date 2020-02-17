import React from 'react';
import Container from '@material-ui/core/Container';
import ResponsiveDrawer from './ResponsiveDrawer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AboutPage, WordbankPage, NotFoundPage, TesterPage, IrregularVerbsPage } from './pages';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router basename="/tester/#" >
        <ResponsiveDrawer title="New Maturita Activator Words">
          <Container>
            <Switch>
              <Route exact path="/about">
                <AboutPage></AboutPage>
              </Route>
              <Route exact path="/wordbank">
                <WordbankPage></WordbankPage>
              </Route>
              <Route exact path="/irregular-verbs">
                <IrregularVerbsPage></IrregularVerbsPage>
              </Route>
              <Route exact path="*">
                <TesterPage></TesterPage>
              </Route>
            </Switch>
          </Container>
        </ResponsiveDrawer>
      </Router>
    );
  }
}

export default App;
