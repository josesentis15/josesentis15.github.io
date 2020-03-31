import React from 'react';
import striptags from 'striptags';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from '../../components/header';
import { AppearingText, NavigationWrapper } from '../../components/navigation';
import Layout, { Wrapper } from '../../components/layout';
import ProjectList from '../../components/projectsList';
import Project from '../../components/project';

import { capitalize } from '../../utils/mixins';
import GET_PROJECTS from './queries';

class Projects extends React.Component {
  state = {
    hoverProject: '',
    clickedProject: '',
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  onClick = (projectName = '') => {
    this.setState({ clickedProject: projectName })
  }

  onHover = (projectName = '') => {
    this.setState({ hoverProject: projectName })
  }

  render() {
    const { hoverProject, clickedProject, loaded } = this.state;

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

          console.log(data);

          return (
            <Layout location={this.props.location} title={striptags(capitalize(projects))} className="dark">
              <Header />
              <Wrapper>
                <NavigationWrapper>
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={300}>
                        <h1 className="title">
                          <AppearingText><span className="text">{projects}</span></AppearingText>
                        </h1>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </NavigationWrapper>
              </Wrapper>
              <Wrapper className="reading">
                <ProjectList>
                  {projectList.map(project => (
                    <Project
                      key={project.id}
                      project={project}
                      hoverProject={hoverProject}
                      clickedProject={clickedProject}
                      onHover={this.onHover}
                      onClick={this.onClick}
                    />
                  ))}
                </ProjectList>
              </Wrapper>
            // </Layout>
          );
        }}
      </Query>
    );
  }
}

export default Projects;
