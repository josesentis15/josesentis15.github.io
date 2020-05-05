import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ExerciceStyled = styled.div`
  margin: ${space(4)} auto;

  &:last-child { margin-bottom: 0; }

  h2 {
    font-weight: 700;
    margin-bottom: ${space()};
  }

  ${media.max('tablet')`
    .content { margin-top: ${space()}; }
  `}

  ${media.min('desktop')`
    align-items: center;
    display: flex;
    margin: ${space(6)} auto;
    max-width: 1000px;

    .content {
      align-items: center;
      justify-content: center;
      display: flex;
      width: 40%;

      a { margin-top: 0; }
    }

    .content-text { max-width: 340px; }

    &:nth-child(5n-4) {
      .background-img {
        margin-right: ${space(2)};
        width: calc(50% - ${space(2)});
      }
    }

    &:nth-child(5n-3) {
      flex-direction: row-reverse;

      .background-img {
        width: calc(40% - ${space(2)});
        margin-left: ${space(2)};
      }
    }

    &:nth-child(5n-2) {
      .background-img {
        margin-left: 15%;
        margin-right: ${space(2)};
        width: calc(45% - ${space(2)});
      }
    }

    &:nth-child(5n-1) {
      flex-direction: column;

      .background-img,
      .content { width: calc(50%); }

      .content {
        justify-content: flex-start;
        margin-top: ${space(2)};
      }
    }

    &:nth-child(5n) {
      flex-direction: row-reverse;

      .background-img {
        width: calc(50% - ${space(2)});
        margin-left: ${space(2)};
        margin-right: 10%;
      }
    }
  `}
`;

export default ExerciceStyled;
