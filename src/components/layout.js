import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { locationShape } from 'react-router-props';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const Header = () => (
      <header>
        Header
        <Link to={rootPath}>Jose Sentis</Link>
      </header>
    );
    const Footer = () => <footer>Footer</footer>;

    // Checks home page
    // if (location.pathname === rootPath) {
    //   header = (
    //       Header
    //   );
    // }

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
