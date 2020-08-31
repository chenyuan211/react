import React from 'react';
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import {adminRoutes} from './router/index';
import Tab from './components/tab';
import './App.less';
import { isLogin } from './utils/auth';

class App extends React.Component {
  render(){
  return ( isLogin() ?
    <Tab>
      <Switch>
        <HashRouter>
          {adminRoutes.map(route=>{
            return <Route key={route.path} {...route} exact render={routeProps=>{
              return <route.component {...routeProps}/>
            }}/>
          })}
        </HashRouter>
        <Redirect exact  to={adminRoutes[0].path} from='/admin'/>
        <Redirect to='/404'/>
      </Switch>
    </Tab> : <Redirect to='/login'/>
  );
  }
  }

export default App;
