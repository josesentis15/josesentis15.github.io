import styled from 'styled-components';

import { space } from '../../utils/mixins';

const ProjectDetail = styled.article`
  margin-top: ${space(4)};

  .backBtn {
    position: fixed;
    left: ${space(-0.5)};
    top: 50%;
    padding: ${space()};
    transform: rotate(-90deg) translateY(-50%);
    transform-origin: top;
  }
`;

export default ProjectDetail;
