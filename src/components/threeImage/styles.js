import styled from 'styled-components';

const Image = styled.div`
  background-position: center;
  background-size: cover;
  display: block;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  canvas {
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
  }

  img { display: none; }
`;

export default Image;
