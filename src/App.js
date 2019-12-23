import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Read from './components/Read';
import Home from './components/Home';
import Isbn from './components/Isbn';
import { DataProvider } from './store/DataContext';

function App({ database }) {
  return (
    <Router>
      <DataProvider value={database}>
        <Layout>
          <Switch>
            <Route path="/read">
              <Read />
            </Route>
            <Route path="/find">
              <Read />
            </Route>
            <Route path="/isbn/:id">
              <Isbn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </DataProvider>
    </Router>
  );
}

export default App;
