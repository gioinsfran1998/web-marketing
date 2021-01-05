import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import Galeria from './pages/Galeria';

import Navbar from './components/Navbar';

function Routes() {
  return (
    <Router>
      <div>
        {/* <GlobalStyle /> */}
        <Navbar />
        <hr />
        <Switch>
          <Route path='/galeria' component={Galeria} />
          <Route path='/contacto' component={Contacto} />
          <Route path='/' exact component={Inicio} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
