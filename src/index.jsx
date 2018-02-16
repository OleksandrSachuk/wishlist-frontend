import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/App';
import {
  history,
  store,
} from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,
  document.getElementById('root'),
);
registerServiceWorker();
