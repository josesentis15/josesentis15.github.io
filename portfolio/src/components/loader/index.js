import React from 'react';

import Noise from '../noise';

import LoaderWrapper from './styles';
import { AppearingText } from '../navigation';

class Home extends React.Component {
  render() {
    return (
      <LoaderWrapper className="playground">
        <Noise />
        <AppearingText><span className="text title">Jose Sentis</span></AppearingText>
      </LoaderWrapper>
    );
  }
}

export default Home;
