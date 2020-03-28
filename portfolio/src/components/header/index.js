import React from 'react';
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Wrapper } from '../layout';

import GET_DATA from './queries';
import HeaderStyled from './styles';

class Header extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    return (
      <Query query={GET_DATA}>
        {({ loading, data }) => {
          const {
            job,
            name
          } = data;

          console.log(loading, data);

          return (
            <HeaderStyled>
              <Wrapper>
                <TransitionGroup component={null}>
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={200}>
                      <div className="header">
                        <div>
                          <Link to="/">
                            <span>{name}</span>
                            <span>Folio - {new Date().getFullYear()}</span>
                          </Link>
                        </div>
                        <div>{job}</div>
                      </div>
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </Wrapper>
            </HeaderStyled>
          );
        }}
      </Query>
    );
  }
};

export default Header;
