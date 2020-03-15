import React from 'react';
import { Link, graphql } from 'gatsby';

import Exercice from '../components/exercice';
import ExerciceList from '../components/exercicesList';
import Layout, { Wrapper } from '../../components/layout';
import MovingText from '../../components/movingText';

import routes from '../../utils/routes';

const title = `playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground * playground *`

class Playground extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="playground" className="playground headerless" header={false}>
        <MovingText>{title}</MovingText>
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
            {projects.map(({ node }) => (
              <Exercice
                key={node.id}
                exercice={node}
                // hoverProject={hoverProject}
                // clickedProject={clickedProject}
                // onHover={this.onHover}
                // onClick={this.onClick}
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
    allContentfulExercice(sort: { fields: order }) {
      edges {
        node {
          abstract
          link
          title
          image
        }
      }
    }
  }
`;
