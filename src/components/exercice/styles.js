import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { columns, space } from '../../utils/mixins';

const ExerciceStyled = styled.div`
  margin: ${space()} auto;
  max-width: 980px;

  h2 {
    font-weight: 700;
    margin-bottom: ${space()};
  }

  .content {
    align-items: center;
    display: flex;
    justify-content: center

    > div { max-width: 340px; }
  }

  ${media.min('tablet')`
    align-items: center;
    display: flex;

    > * { ${columns(2, 2)} }
  `}
`;

export default ExerciceStyled;
