import './App.css';
import React from 'react';
import Routes from './routes';
// import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
