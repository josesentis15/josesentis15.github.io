import React from 'react';

import Noise from '../noise';

import LoaderWrapper from './styles';

class Home extends React.Component {
  render() {
    return (
      <LoaderWrapper className="playground">
        <Noise />
        <span className="dot" />
        <span className="title">Jose Sentis</span>
      </LoaderWrapper>
    );
  }
}

export default Home;
