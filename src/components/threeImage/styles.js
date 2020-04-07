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
    border: 1px solid black;
    left: 0;
    position: fixed;
    top: 0;
  }

  img { display: none; }
`;

export default Image;
