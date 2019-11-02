import styled from 'styled-components';

import { Wrapper } from '../../components/layout/styles';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectDetail = styled.article`
  .backBtn {
    position: fixed;
    left: ${space(-0.5)};
    top: 50%;
    padding: ${space()};
    transform: rotate(-90deg) translateY(-50%);
    transform-origin: top;
  }
`;

const Wysiwyg = styled.div`
  ${Wrapper}

  p {
    max-width: 580px;
    margin: ${space(3)} auto;

    &:first-child { margin-top: 0; }
    &:last-child { margin-bottom: 0; }
  }

  img { width: 100%; }

  ${media.min('tablet')`
    p { margin: ${space(4)} auto; }
  `};
`;

export default ProjectDetail;
export { Wysiwyg };