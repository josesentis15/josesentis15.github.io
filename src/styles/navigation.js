import styled from 'styled-components';

import { media } from '../utils/media-queries';
import { space } from '../utils/mixins';

const Navigation = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;

  .title {
    margin: 0 0 ${space()};

    &:last-child { margin-bottom: 0; }
  }

  ${media.max('tablet')`
    .title span { display: block; }
  `}
`;

export default Navigation;