import React from 'react';
import striptags from 'striptags';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import Header from '../../components/header';
import { AppearingText, NavigationWrapper } from '../../components/navigation';
import Layout, { Wrapper } from '../../components/layout';
import Project from '../../components/project';

import { capitalize } from '../../utils/mixins';
import GET_PROJECTS from './queries';
import BackgroundImage from '../../components/backgroundImage';
import ProjectList from './styles';

class Projects extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const {
      loaded
    } = this.state;

    return (
      <Query query={GET_PROJECTS}>
        {({ loading, data }) => {
          const {
            sections: {
              projects
            },
            pages: {
              projects: {
                projectList
              }
            }
          } = data;

          return (
            <Layout location={this.props.location} title={striptags(capitalize(projects))} className="dark page-transition">
              <Header />
              <Wrapper>
                <NavigationWrapper>
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={300}>
                        <h1 className="title">
                          <AppearingText><span className="text stroke light">{projects}</span></AppearingText>
                        </h1>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </NavigationWrapper>
              </Wrapper>
              <Wrapper className="reading">
                <ProjectList id="project-list">
                  {projectList.map(project => (
                    <Project
                      key={project.title.replace(' ', Math.random())}
                      project={project}
                    />
                  ))}
                  <div className="image-wrapper">
                    <BackgroundImage className="project-image" id="project-image" />
                  </div>
                </ProjectList>
              </Wrapper>
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Projects);
