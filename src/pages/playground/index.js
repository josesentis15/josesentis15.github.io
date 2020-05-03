import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import striptags from 'striptags';
import axios from 'axios';

import { toggleCursor } from '../../components/cursor';
import Exercice from '../../components/exercice';
import Layout, { Wrapper } from '../../components/layout';
import MovingText from '../../components/movingText';
import Noise from '../../components/noise';

import { capitalize } from '../../utils/mixins';
import routes from '../../utils/routes';
import GET_PLAYGROUND from './queries';
import { ExerciceList } from './styles';

class Playground extends React.Component {
  _rotatingTitle = `playground * playground * playground * playground * `;
  _interval = '';
  state = {
    title: '',
    loaded: false,
    exercices: {}
  }

  componentDidMount() {
    axios.get(`contents.json`)
      .then(({ data }) => {
        this.setState({ loaded: true, exercices: data });
      }).catch(() => {
        this.props.history.push('/404');
      });
  }

  render() {
    const { loaded, exercices } = this.state;

    return (
      <Query query={GET_PLAYGROUND}>
        {({ loading, data }) => {
          const {
            sections: {
              playground
            },
            pages: {
              playground: {
                cta,
                abstract
              }
            }
          } = data;

          return loaded && (
            <Layout location={this.props.location} title={striptags(capitalize(`${playground} *`))} className="playground headerless">
              <Noise />
              <MovingText>{this._rotatingTitle + this._rotatingTitle + this._rotatingTitle + this._rotatingTitle}</MovingText>
              <Wrapper>
                <div className="intro">
                  <div dangerouslySetInnerHTML={{ __html: abstract }}></div>
                  <Link
                    to={routes.home}
                    onMouseEnter={() => toggleCursor()}
                    onMouseLeave={() => toggleCursor()}
                  >{cta}</Link>
                </div>
                <ExerciceList>
                  {exercices.map(exercice => (
                    <Exercice
                      key={exercice.title.replace(' ', Math.random())}
                      exercice={exercice}
                    />
                  ))}
                </ExerciceList>
              </Wrapper>
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Playground);
