import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ThemeProvider from './components/ThemeContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <ThemeProvider>
          <FunctionalComponent></FunctionalComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
