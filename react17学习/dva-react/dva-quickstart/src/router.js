import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/app';
import cinema from './routes/cinema';
import film from './routes/film';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={()=>
        <App>
      <Switch>
        <Route path="/cinema" component={cinema}/>
          <Route path="/film" component={film}/>
          <Redirect from="/" to="/film"></Redirect>
      </Switch>
        </App>
        } />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
