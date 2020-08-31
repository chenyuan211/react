import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import {PersistGate} from 'redux-persist/lib/integration/react';
import { mainRoutes } from './router/index'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index'
import {persistor} from './store/index'

ReactDOM.render(
  // 把创建的整个store放在应用里面
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <Switch>
        <Redirect exact to='/admin' from='/'/>
          <Route path='/admin' render= {routeProps=><App {...routeProps}/>}/>
          {mainRoutes.map(route=>{
            return <Route key={route.path} path={route.path} component={route.component}/>
          })}
          <Redirect to='/404'/>
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
