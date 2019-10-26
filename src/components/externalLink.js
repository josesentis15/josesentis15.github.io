import React from 'react';

const ExternalLink = ({ className, to, text }) => (
  <a
    className={className}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    style={{ boxShadow: `none` }}
  >
    {text} External!
  </a>
);

export default ExternalLink;