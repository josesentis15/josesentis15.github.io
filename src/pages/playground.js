import React from 'react';
import { Link, graphql } from 'gatsby';
import striptags from 'striptags';

import Exercice from '../components/exercice';
import ExerciceList from '../components/exerciceList';
import Layout, { Wrapper } from '../components/layout';
import MovingText from '../components/movingText';

import routes from '../utils/routes';

const rotatingTitle = `playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground *`

class Playground extends React.Component {
  render() {
    const { data } = this.props;
    const exercices = data.allContentfulExercice.edges;
    const title = data.site.siteMetadata.sections.playground;

    return (
      <Layout location={this.props.location} title={striptags(title)} className="playground headerless" header={false}>
        <MovingText>{rotatingTitle}</MovingText>
        <Wrapper>
          <div className="intro">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
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
    site {
      siteMetadata {
        sections {
          playground
        }
      }
    }
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
