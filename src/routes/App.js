import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaginaPrincipal from '../pages/PaginaPrincipal';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import Collections from '../pages/Collections';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={PaginaPrincipal} />
          <Route exact path='/collections' component={Collections} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
