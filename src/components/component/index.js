import React from 'react';

import { Wysiwyg } from './styles';

const Component = data => {
  const content =
    data.data.type === 'image'
      ? data.data.src
      : data.data.type === 'text'
      ? data.data.text : '';

  return <Wysiwyg><p>{content}</p></Wysiwyg>;
};

export default Component;
