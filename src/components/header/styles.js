import styled from 'styled-components';

import { Wrapper } from '../layout/styles';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { typography } from '../../utils/settings';

const HeaderStyled = styled.header`
  ${Wrapper}

  align-items: flex-start;
  display: flex;
  font-family: ${typography.secondaryFontFamily.join(', ')};
  justify-content: space-between;
  padding: ${space()};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;

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
    padding: ${space(1.75)} ${space(2)};
  `};
`;

export default HeaderStyled;