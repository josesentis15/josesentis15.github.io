import React from 'react';

const ExternalLink = ({ className, to, text, icon = false }) => (
  <a
    className={className}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    style={{ boxShadow: `none` }}
  >
    {text} {icon && 'External!'}
  </a>
);

export default ExternalLink;