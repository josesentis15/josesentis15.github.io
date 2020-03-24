import React from 'react';
// import { graphql, Link, StaticQuery } from 'gatsby';
import { Link } from "react-router-dom";

import { Wrapper } from '../layout';

import HeaderStyled from './styles';

class Header extends React.Component {
  render() {
    // return (
    //   <StaticQuery
    //     query={componentQuery}
    //     render={({ site: { siteMetadata } }) => {
    //       const { job, name } = siteMetadata;

    return (
      <HeaderStyled>
        <Wrapper>
          <div className="header">
            <div>
              <Link to="/">
                {/* <span>{name}</span> */}
                <span>TEST</span>
                <span>Folio - {new Date().getFullYear()}</span>
              </Link>
            </div>
            {/* <div>{job}</div> */}
            <div>TEST</div>
          </div>
        </Wrapper>
      </HeaderStyled>
    );
    //     }}
    //   />
    // );
  }
};

export default Header;

// const componentQuery = graphql`
//   query HeaderQuery {
//     site {
//       siteMetadata {
//         job
//         name
//       }
//     }
//   }
// `;
