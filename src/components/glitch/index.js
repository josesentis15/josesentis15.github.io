import React from 'react';

import GlitchStyled from './styles';

const Glitch = ({ text }) => (
  <GlitchStyled>
    <span class="hidden">{text}</span>
    <div class="text top" data-title={text}><span>{text}</span></div>
    <div class="text bottom" data-title={text}><span>{text}</span></div>
  </GlitchStyled>
);

export default Glitch;
