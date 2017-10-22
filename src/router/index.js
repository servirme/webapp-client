import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../pages/Home/index';
import AdminRouter from './AdminRouter';
import Error404 from '../pages/errors/Error404';

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={AdminRouter}/>

        <Route component={Error404}/>
      </Switch>
    </div>
  );
};

Router.propTypes = {
  domainData: PropTypes.object.isRequired,
};

export default Router;
