import React from 'react';
import { Query } from "react-apollo";

const withQuery = (WrappedComponent, query) => {
  return class extends React.Component {
    render() {
      return (
        <Query query={query}>
          {({ loading, error, data }) => {
            this.props = {...this.props, ...{ loading, error, data }};

            return <WrappedComponent {...this.props} />;
          }}
        </Query>
      );
    }
  }
};

export default withQuery;
