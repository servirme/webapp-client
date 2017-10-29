import React from 'react'
import ReactDOM from 'react-dom'

import { getRequest } from './helpers/request'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const domain = window.location.host
getRequest(`https://httpbin.org/get?domain=${domain}`) // TODO
  .then((domainData) => {
    domainData.success = true
    return domainData
  })
  .catch((err) => {
    console.log(err); // eslint-disable-line
    return {
      success: false,
    }
  })
  .then((domainData) => {
    ReactDOM.render(<App domainData={domainData}/>, document.getElementById('root'))
    registerServiceWorker()
  })
