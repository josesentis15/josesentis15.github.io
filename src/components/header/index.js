import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

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

  // console.log(job, name);

  return (
      <HeaderStyled>
        <div>
          <Link to={rootPath}>{name}</Link>
          <p>Folio - {new Date().getFullYear()}</p>
        </div>
        <div>
          {job}
        </div>
      </HeaderStyled>
  );
};

export default Header;
