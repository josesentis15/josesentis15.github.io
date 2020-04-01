import React from 'react';

import ProjectListStyled from './styles';

const ProjectList = ({ children }) => (
  <ProjectListStyled>
    {children}
  </ProjectListStyled>
);

export default ProjectList;
