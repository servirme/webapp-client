import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { createStore } from 'redux';

import reducers from './reducers';
import AppRouter from './router';

const store = createStore(reducers);

const App = ({ domainData }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter domainData={domainData}/>
      </BrowserRouter>
    </Provider>
  );
};

App.propTypes = {
  domainData: PropTypes.object.isRequired,
};

export default App;
