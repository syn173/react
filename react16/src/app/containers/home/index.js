import React, { Component } from 'react';
import FlexExample from 'app/commons/antd/flex';
import Part1 from 'app/components/home/part1';
import Part2 from 'app/components/home/part2';

class Home extends Component {
  render() {
    return <div>
      <Part1 />
      <Part2 />
      <FlexExample />
    </div>
  }
}

export default Home;
