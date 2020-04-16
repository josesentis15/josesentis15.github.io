import React from 'react';

import noise from './noise.png';
import NoiseWrapper from './styles';

class Noise extends React.PureComponent {
  render () {
    return (
      <NoiseWrapper background={noise}>
        <div className="noise"></div>
      </NoiseWrapper>
    );
  }
}

export default Noise;
