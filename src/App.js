import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

import './setup'
import AppRouter from './router'
import reducers, { initialState } from './store/reducers'
import SplashScreen from './components/SplashScreen'
import Notifications from './components/Notifications'

const enhancer = compose(applyMiddleware(reduxThunk))

const store = createStore(reducers, initialState, enhancer)

const domain = window.location.hostname

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Notifications />
      <SplashScreen domain={domain}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </SplashScreen>
    </Fragment>
  </Provider>
)

export default App
