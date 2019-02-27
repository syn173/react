import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import APP from '../containers/index.js';

const Home = asyncComponent(() => import(/* webpackChunkName: "homeindex" */'../containers/home/index.js').then(module => module.default), {name: 'homeindex'});

const basename = 'force';

class RouterMap extends React.Component {
  render() {
    return <BrowserRouter basename={basename}>
      <APP>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      </APP>
    </BrowserRouter>
  }
}

export default RouterMap;
