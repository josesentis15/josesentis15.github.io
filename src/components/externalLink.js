import React from 'react';
import PropTypes from 'prop-types';

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

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.bool
};

export default ExternalLink;