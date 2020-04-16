import styled from 'styled-components';

const Image = styled.div`
  background-position: center;
  background-size: cover;
  display: block;
  opacity: 0;
  overflow: hidden;
  position: relative;
  transition: opacity .5s cubic-bezier(.215, .61, .355, 1) .2s;

  &.loaded { opacity: 1; }

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .image {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export default Image;
