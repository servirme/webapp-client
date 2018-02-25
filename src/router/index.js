import React, { Fragment } from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

// PAGES
import Home from '../pages/index'
import Error404 from '../pages/errors/404'

const Router = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home}/>

        <Route component={Error404}/>
      </Switch>
    </Fragment>
  )
}

export default Router
