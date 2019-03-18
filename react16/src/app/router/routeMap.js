import asyncComponent from '../utils/asyncComponent';

const Home = asyncComponent(() => import(/* webpackChunkName: "homeindex" */'../containers/home/index.js').then(module => module.default), {name: 'homeindex'});

const AntdFlex = asyncComponent(() => import(/* webpackChunkName: "antdflex" */'../containers/antd/flex.js').then(module => module.default), {name: 'antdflex'});


export default {
  Home,
  AntdFlex
};
