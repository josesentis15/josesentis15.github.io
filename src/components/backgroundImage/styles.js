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

  canvas {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  img { display: none; }
`;

export default Image;
