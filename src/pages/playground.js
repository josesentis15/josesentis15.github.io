import React from 'react';
import { Link, graphql } from 'gatsby';

import Exercice from '../components/exercice';
import ExerciceList from '../components/exerciceList';
import Layout, { Wrapper } from '../components/layout';
import MovingText from '../components/movingText';

import routes from '../utils/routes';

const rotatingTitle = `playground * playground * playground * playground * `;

class Playground extends React.Component {
  interval = '';
  state = {
    title: ''
  }

  componentDidMount() {
    const title = rotatingTitle;

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
    const { data } = this.props;
    const exercices = data.allContentfulExercice.edges;

    return (
      <Layout location={this.props.location} title={title} className="playground headerless" header={false}>
        <MovingText>{rotatingTitle + rotatingTitle + rotatingTitle + rotatingTitle}</MovingText>
        <Wrapper>
          <div className="intro">
            <p>
              This is the space where I create, where I try new technologies to develop myself in skills that are often difficult to learn working in corporate projects.
              It's the space where I show who I am further than my role in a agencies.
            </p>
            <p>
              It's my personal kaizen.
            </p>
            <Link to={routes.home}>Back to Jose Sentis Folio</Link>
          </div>
          <ExerciceList>
            {exercices.map(({ node }) => (
              <Exercice
                key={node.id}
                exercice={node}
              />
            ))}
          </ExerciceList>
        </Wrapper>
      </Layout>
    );
  }
}

export default Playground;

export const pageQuery = graphql`
  query {
    allContentfulExercice {
      edges {
        node {
          abstract {
            abstract
          }
          id
          title
          link
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          date
        }
      }
    }
  }
`;
