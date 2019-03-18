import React, { Component } from 'react';

import { Button } from 'antd-mobile';

import Part1 from 'app/components/home/part1';
import Part2 from 'app/components/home/part2';
//import createHistory from 'history/createBrowserHistory';

import './index.less';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.history = createHistory({
  //     basename: 'force',             // The base URL of the app (see below)
  //     forceRefresh: true,
  //   })
  // }

  go = (e) => {
    const {
      url
    } = e.currentTarget.dataset;

    //console.log('url', url, this.props);
    //this.history.push(url)
    this.props.history.push(url);
  }

  render() {
    return <div className="home_index">
      <Button type="primary" className="item" data-url="/antd/flex" onClick={this.go}>
        Antd Flex
      </Button>
      <Button className="item">
        next
      </Button>
      <Part1 />
      <Part2 />
    </div>
  }
}

export default Home;
