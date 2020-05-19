import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App/App';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
