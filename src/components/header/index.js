import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Wrapper } from '../layout';

import HeaderStyled from './styles';

class Header extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const rootPath = `${__PATH_PREFIX__}/`;
    const { loaded } = this.state;

    return (
      <StaticQuery
        query={componentQuery}
        render={({ site: { siteMetadata } }) => {
          const { job, name } = siteMetadata;

          return (
            <TransitionGroup>
              {loaded && (
                <CSSTransition classNames="loaded" timeout={200}>
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
                </CSSTransition>
              )}
            </TransitionGroup>
          );
        }}
      />
    );
  }
};

export default Header;

const componentQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        job
        name
      }
    }
  }
`;
