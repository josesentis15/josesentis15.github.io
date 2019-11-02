import styled from 'styled-components';

import LayoutStyled from '../layout/styles';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const HeaderStyled = styled(LayoutStyled)`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: ${space()};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  > div {
    max-width: 150px;
  }

  ${media.min('phone')`
    justify-content: flex-start;

    > div:first-child {
      margin-right: ${space(2)};
    }
  `};

  ${media.min('tablet')`
    padding: ${space(1.75)};
  `};
`;

export default HeaderStyled;