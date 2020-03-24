import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ children, className, to, icon = false }) => (
  <a
    className={className}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    dangerouslySetInnerHTML={{
      __html: children,
    }}
  />
);

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.bool
};

export default ExternalLink;
