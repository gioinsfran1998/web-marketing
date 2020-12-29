import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Navbar />
        <hr />
        <Switch>
          <Route path='/contacto'>
            <Contacto />{' '}
          </Route>
          <Route path='/' exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
