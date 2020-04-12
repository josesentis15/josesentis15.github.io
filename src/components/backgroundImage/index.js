import React from 'react';

import Image from './styles';

const BackgroundImage = ({ src, className, id = '' }) => (
  <Image className={`background-img ${className}`} style={{ 'backgroundImage' : `url(${src})`}} id={id}></Image>
);

export default BackgroundImage;
