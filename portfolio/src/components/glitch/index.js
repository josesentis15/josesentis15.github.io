import React from 'react';

import GlitchStyled from './styles';

const Glitch = ({ className, text }) => (
  <GlitchStyled className={className}>
    <span className="hidden">{text}</span>
    <div className="text top" data-title={text}>
      <span>{text}</span>
    </div>
    <div className="text bottom" data-title={text}>
      <span>{text}</span>
    </div>
  </GlitchStyled>
);

export default Glitch;
