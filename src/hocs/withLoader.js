import React from 'react';

const withLoader = WrappedComponent => {
  return class extends React.Component {
    state = {
      loaded: false
    }

    componentDidMount() {
      this.setState({ loaded: true });
    }

    render() {
      return <WrappedComponent {...this.props} loaded={this.state.loaded} />;
    }
  }
};

export default withLoader;
