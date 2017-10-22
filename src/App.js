import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { createStore } from 'redux';

import reducers from './reducers';
import AppRouter from './router';
import styles from './index.scss';

const store = createStore(reducers);

const App = ({ domainData }) => {
  return (
    <div>
      <Helmet>
        <body className={ styles.globalBody }/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000"/>
        <link rel="manifest" href="https://cdn.servir.me/manifest.json"/>

        <meta name="description" content="Servir.me é a melhor ferramenta para consultar e criar cardápios online. Com diversas opções e facilidade na criação, criar um cardápio online nunca foi tão fácil. Deixe seus pratos visíveis para todo mundo."/>
        <meta name="keywords" content="servirme, servir, cardápio, cardápio online, comida, restaurante, criar cardápio, cardápio de restaurante"/>
        <link rel="shortcut icon" href="https://cdn.servir.me/favicon.ico"/>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>

        <title>Servir.me - Cardápios online | O prazer em servir é todo nosso</title>
      </Helmet>

      <Provider store={store}>
        <BrowserRouter>
          <AppRouter domainData={domainData}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

App.propTypes = {
  domainData: PropTypes.object.isRequired,
};

export default App;
