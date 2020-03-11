import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const NavigationWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  .title {
    margin-bottom: ${space(3)};
    margin-left: -6px;

    &:last-child { margin-bottom: 0; }
  }

  ${media.max('desktop')`
    .title span { display: block; }
  `}

  ${media.min('tablet')`
    .title { margin-left: -10px; }
  `}
`;

export default NavigationWrapper;
