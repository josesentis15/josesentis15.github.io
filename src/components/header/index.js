import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { Wrapper } from '../layout';

import HeaderStyled from './styles';

const Header = () => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          job
          name
        }
      }
    }
  `);

  const { job, name } = data.site.siteMetadata;

  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header">
          <div>
            <Link to={rootPath}>
              <span>{name}</span>
              <span>Folio - {new Date().getFullYear()}</span>
            </Link>
          </div>
          <div>{job}</div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
