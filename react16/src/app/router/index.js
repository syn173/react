import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import APP from '../containers/index';
import routeMap from './routeMap';

const basename = 'force';
class RouterMap extends React.Component {
  render() {
    return <BrowserRouter basename={basename}>
      <APP>
      <Switch>
        <Route exact path='/' component={routeMap.Home} />
        <Route path='/home/index' component={routeMap.Home} />

        <Route path='/antd/flex' component={routeMap.AntdFlex} />
      </Switch>
      </APP>
    </BrowserRouter>
  }
}

export default RouterMap;
