import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PaginaPrincipal from '../pages/PaginaPrincipal';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={PaginaPrincipal} />
    </BrowserRouter>
  );
};
export default App;
