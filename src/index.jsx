import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
registerServiceWorker();
