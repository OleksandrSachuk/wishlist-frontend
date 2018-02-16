import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { whyDidYouUpdate } from 'why-did-you-update';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from '../Main';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

const App = ({ store, history }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </ConnectedRouter>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

App.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
