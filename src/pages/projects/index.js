import React from 'react';
import striptags from 'striptags';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import { toggleCursor } from '../../components/cursor';
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
    hoverProject: false,
    isHoverProject: false,
    clickedProject: false,
    loaded: false,
    percentageY: 0
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  onClick = (project = false) => {
    this.setState({ clickedProject: project })
  }

  onHover = (project = false) => {
    this.setState({ hoverProject: project, isHoverProject: !project ? false : true });
    toggleCursor();
  }

  render() {
    const {
      hoverProject,
      isHoverProject,
      clickedProject,
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
                <ProjectList ref={ref => { this._projectList = ref }}>
                  {projectList.map(project => (
                    <Project
                      key={project.title.replace(' ', Math.random())}
                      project={project}
                      hoverProject={hoverProject}
                      clickedProject={clickedProject}
                      onHover={this.onHover}
                      onClick={this.onClick}
                    />
                  ))}
                  <TransitionGroup>
                    {isHoverProject && (
                      <CSSTransition classNames="loaded" timeout={{
                        enter: 0,
                        exit: 300
                    }}>
                        <div className="image-wrapper">
                          <BackgroundImage className="project-image" src={hoverProject.image} />
                        </div>
                      </CSSTransition>
                     )}
                  </TransitionGroup>
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
