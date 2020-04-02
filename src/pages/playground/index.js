import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import { withRouter } from "react-router";

import Exercice from '../../components/exercice';
import ExerciceList from '../../components/exerciceList';
import Layout, { Wrapper } from '../../components/layout';
import MovingText from '../../components/movingText';
import Noise from '../../components/noise';

import routes from '../../utils/routes';
import GET_PLAYGROUND from './queries';

class Playground extends React.Component {
  rotatingTitle = `playground * playground * playground * playground * `;
  interval = '';
  state = {
    title: ''
  }

  componentDidMount() {
    const title = this.rotatingTitle;

    this.setState({ title });

    const interval = setInterval(() => {
      this.animateText();
    }, 350);

    this.interval = interval;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  animateText = () => {
    const { title } = this.state;
    const rotatedTitle = title.substr(1) + title.slice(0, 1);

    this.setState({ title: rotatedTitle });
  };

  render() {
    const { title } = this.state;

    return (
      <Query query={GET_PLAYGROUND}>
        {({ loading, data }) => {
          const {
            playground: {
              cta,
              abstract,
              exercices
            }
          } = data.pages;

          return (
            <Layout location={this.props.location} title={title} className="playground headerless" header={false}>
              <Noise />
              <MovingText>{this.rotatingTitle + this.rotatingTitle + this.rotatingTitle + this.rotatingTitle}</MovingText>
              <Wrapper>
                <div className="intro">
                  <div dangerouslySetInnerHTML={{ __html: abstract }}></div>
                  <Link to={routes.home}>{cta}</Link>
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