import React from 'react';

import ProjectListStyled from './styles';

const ProjectList = ({ percentageY, children }) => (
  <ProjectListStyled percentageY={percentageY}>
    {children}
  </ProjectListStyled>
);

export default ProjectList;
