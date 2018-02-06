import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { whyDidYouUpdate } from 'why-did-you-update';
import Main from '../Main';


if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape.isRequired,
};

export default App;
