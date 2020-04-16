import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ExerciceStyled = styled.div`
  margin: ${space(4)} auto;
  max-width: 980px;

  &:last-child { margin-bottom: 0; }

  h2 {
    font-weight: 700;
    margin-bottom: ${space()};
  }

  ${media.max('tablet')`
    .content { margin-top: ${space()}; }
  `}

  ${media.min('tablet')`
    align-items: center;
    display: flex;
    margin: ${space(6)} auto;

    .content {
      align-items: center;
      display: flex;
      width: 40%;
    }

    .background-img { width: calc(60% - ${space(2)}); }
    .content-text { max-width: 340px; }

    &:nth-child(even) {
      flex-direction: row-reverse;

      .background-img { margin-left: ${space(2)}; }
      .content { justify-content: flex-start; }
    }

    &:nth-child(odd) {
      .background-img { margin-right: ${space(2)}; }
      .content { justify-content: flex-end; }
      .content-text { margin-right: ${space()}; }
    }
  `}
`;

export default ExerciceStyled;
