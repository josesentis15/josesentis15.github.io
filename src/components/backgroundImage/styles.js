import styled from 'styled-components';

const Image = styled.div`
  background-position: center;
  background-size: cover;
  display: block;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export default Image;
