import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const Wysiwyg = styled.div`
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

export { Wysiwyg };