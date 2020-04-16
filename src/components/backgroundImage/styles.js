import styled from 'styled-components';

const Image = styled.div`
  background-position: center;
  background-size: cover;
  display: block;
  opacity: 0;
  overflow: hidden;
  position: relative;
  transition: opacity .5s linear .2s;
  transform: scale(1.01);

  &.loaded {
    opacity: 1;

    &.image-scale { transform: scale(1.2); }
  }

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .image-wrapper {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  .image {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;

    &.image-scale {
      transform: scale(1);
      transition: transform 2.5s ease-out;
    }
  }
`;

export default Image;
