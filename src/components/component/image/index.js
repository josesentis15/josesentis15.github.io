import React from 'react';

import { Wysiwyg } from '../styles';
import ImageStyled from './styles';

/**
 * TODO: Lazyload
*/
const Image = src => (
  <Wysiwyg>
    <ImageStyled style={`background-image: url(${src});`} />
  </Wysiwyg>
);

export default Image;
