import React from 'react';
import { Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import isExplorer from '@runroom/purejs/lib/isExplorer';
import touchable from '@runroom/purejs/lib/touchable';

import Cursor from '../cursor';
import Header from '../header';
import Layout, { Wrapper } from '../layout';
import { NavigationWrapper } from '../navigation';

import client from '../../utils/apollo';
import history from '../../utils/history'
import GlobalStyle from '../../styles';

class App extends React.Component {
  componentDidMount() {
    if (isExplorer()) document.documentElement.classList.add('browser-ie');
    document.documentElement.classList.add(touchable() ? 'touch' : 'non-touch');
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Cursor />
        <Router history={history}>
          <Layout location={this.props.location} className="home">
            <Header />
            <Wrapper>
              <NavigationWrapper>
                <h1 className="title">New Folio coming soon...</h1>
              </NavigationWrapper>
            </Wrapper>
          </Layout>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
