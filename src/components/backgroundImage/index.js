import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Image from './styles';

const BackgroundImage = ({ alt, src, className = '', id = '' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      className={`background-img ${className} ${loaded && 'loaded'}`}
      // style={{ 'backgroundImage' : `url(${src})`}}
      id={id}
    >
      <LazyLoadImage
        className="image"
        alt={alt}
        src={src}
        delayTime="600"
        afterLoad={() => { setLoaded(true) }}
      />
    </Image>
  )
};

export default BackgroundImage;
