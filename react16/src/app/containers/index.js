import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class App extends React.Component {

  componentWillReceiveProps(props) {

  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }


  render() {
    const {
      children
    } = this.props;

    return (
      <div>
        {children}
      </div>
    )
  }
}

App = withRouter(connect(null, {})(App));
export default App;
