import React from 'react';
import PropTypes from 'prop-types';
import { locationShape } from 'react-router-props';

import Header from './header';

import { rhythm } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    const Footer = () => <footer>Footer</footer>;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  location: locationShape.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
