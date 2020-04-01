import React from 'react';

import Image from './styles';

const BackgroundImage = ({ src, className }) => (
  <Image className={className} style={{ 'backgroundImage' : `url(${src})`}}></Image>
);

export default BackgroundImage;
