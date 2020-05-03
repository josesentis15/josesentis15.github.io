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

    &.image-scale { transform: scale(1.2) translate(-50%, -50%); }
  }

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .image {
    object-fit: cover;
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    &.image-scale {
      transform: translate(-50%, -50%) scale(1);
      transition: transform 2.5s ease-out;
    }
  }
`;

export default Image;
