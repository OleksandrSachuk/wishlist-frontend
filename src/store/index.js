import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import rootReducer from '../reducers/reducers';

const history = createHistory();

const initialState = {};
const enhancers = [];
const middlewares = [
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  const logger = createLogger({
    diff: true,
    logErrors: true,
    collapsed: false,
    logger: console,
    level: {
      prevState: 'debug',
      action: 'debug',
      nextState: 'debug',
      error: 'error',
    },
  });

  middlewares.push(logger);
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export {
  history,
  store,
};
