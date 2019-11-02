import styled from 'styled-components';

import { space } from '../../utils/mixins';

const HeaderStyled = styled.header`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: ${space()};
  position: absolute;
  top: 0;
  width: 100%;

  > div {
    max-width: 150px;
  }

  @media (min-width: 480px) {
    justify-content: flex-start;

    > div:first-child {
      margin-right: ${space(2)};
    }
  }
`;

export default HeaderStyled;