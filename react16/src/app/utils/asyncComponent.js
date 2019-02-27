import React from 'react';
import qs from 'querystringify';

export default (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount() {
      if (!this.state.Component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;

          this.setState({ Component });
        });
      }
    }

    render() {
      if (this.state.Component) {
        const location = this.props.location;
        location.query = qs.parse(location.search || "{}");
        return <this.state.Component { ...this.props } { ...collection } />;
      }

      return null;
    }
  }
);
