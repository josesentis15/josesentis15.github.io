import React from 'react';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import Component from '../../components/component';
import CrossNavigation from '../../components/crossNavigation';
import Header from '../../components/header';
import { AppearingText, NavigationWrapper } from '../../components/navigation';
import Layout, { Wrapper } from '../../components/layout';
import ProjectDetail from './styles';

import DATA from '../../data/content.json';
import GET_PROJECTS from '../projects/queries';

class Project extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    const { location: { pathname } } = this.props;

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
          const project = projectList.filter(project => project.slug === pathname.replace('/projects/', ''))[0];

          return (
            <Layout
              location={this.props.location}
              title={project.title}
              description={project.abstract}
              className="dark"
            >
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
              <ProjectDetail id="project-detail">
                <Wrapper>
                  <div className="background-wrapper">
                    <Wrapper className="reading">
                      <h1 className="title2">
                        <span className="label">
                          {project.order.toString().length === 1 ? '0' : ''}
                          {project.order}.
                        </span>
                        {project.title}
                      </h1>
                      {DATA['vc-community'].map((data, index) => (
                        <Component data={data} key={`component_${index}`} />
                      ))}
                      <CrossNavigation current={project.slug} projectList={projectList} />
                    </Wrapper>
                  </div>
                </Wrapper>
              </ProjectDetail>
            </Layout>);
        }}
      </Query>
    );
  }
}

export default withRouter(Project);
