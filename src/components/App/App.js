import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Reacting
        </a>
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-offset-4 col-lg-8'>
            <p style={{ backgroundColor: 'red', color: 'white' }}>Forms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
