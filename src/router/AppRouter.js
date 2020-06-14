import {Router, Route } from 'react-router-dom';
import React from 'react'
import { createBrowserHistory } from 'history';


import  Home  from './../components/Home';
import  Time  from './../components/Time';
import  Data  from './../components/Data';
import  Currency  from './../components/Currency';

export const history = createBrowserHistory()


  const AppRouter = ({store}) => (
    <Router history={history}>

      <div>
            <Route path={["/","/home"]} component={Home} exact={true} />
            <Route path="/time" component={Time} />
            <Route path="/data" component={Data} />
            <Route path="/currency" component={Currency} />
      </div>
    </Router>
  );
export default AppRouter;