import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Image from './styles';

const BackgroundImage = ({ alt, src, className = '', id = '', lazyEffect = true, scaleEffect = false }) => {
  const [loaded, setLoaded] = useState(!lazyEffect);

  return (
    <Image
      className={`background-img ${className} ${loaded ? 'loaded' : ''}`}
      id={id}
    >
      <LazyLoadImage
        className={`image ${scaleEffect ? 'image-scale' : ''}`}
        alt={alt}
        src={src}
        delayTime="600"
        afterLoad={() => { setLoaded(true) }}
      />
    </Image>
  )
};

export default BackgroundImage;
