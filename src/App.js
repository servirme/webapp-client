import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './setup'
import AppRouter from './router'
import reducers, { initialState } from './store/reducers'
import SplashScreen from './components/SplashScreen'

const store = createStore(
  reducers,
  initialState
)

const domain = window.location.hostname

const App = () => (
  <Provider store={store}>
    <SplashScreen domain={domain}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </SplashScreen>
  </Provider>
)

export default App
