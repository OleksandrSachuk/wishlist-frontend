import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Root } from './Modules/Root';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
