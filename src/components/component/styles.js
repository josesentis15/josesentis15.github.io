import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const Wysiwyg = styled.div`
  margin: ${space(3)} auto;

  p {
    max-width: 580px;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    width: 100%;
    max-width: 780px;
  }

  p,
  img {
    margin: auto;
  }

  ${media.min('tablet')`
    margin: ${space(4)} auto;
  `};
`;

export { Wysiwyg };
