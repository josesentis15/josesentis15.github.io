import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const NavigationWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    margin: 0 auto ${space(3)};
    margin-left: -6px;

    &:last-child { margin-bottom: 0; }
  }

  ${media.max('phone')`
    padding: 0 0 ${space()} 0;
  `}

  ${media.max('desktop')`
    .title {
      margin-bottom: ${space(2.5)};

      span { display: block; }
    }
  `}

  ${media.min('tablet')`
    .title { margin-left: -10px; }
  `}
`;

export default NavigationWrapper;
