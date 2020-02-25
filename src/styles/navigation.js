import styled from 'styled-components';

import { media } from '../utils/media-queries';
import { space } from '../utils/mixins';

const Navigation = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  .title {
    margin-bottom: ${space(3)};
    margin-left: -15px;

    &:last-child { margin-bottom: 0; }
  }

  ${media.max('desktop')`
    .title span { display: block; }
  `}
`;

export default Navigation;
