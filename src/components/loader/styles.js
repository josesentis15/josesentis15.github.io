import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { colors } from '../../utils/settings';

const LoaderWrapper = styled.div`
  align-items: center;
  background-color: ${colors.base500};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity .3s ease-out;
  z-index: 10;

  &.loaded-enter-done { opacity: 0; }

  .title { color: ${colors.white}; }

  ${media.max('phone')`
    .title { font-size: 50px !important; }
  `}

  ${media.min('phone')`
    .title { font-size: 78px; }
  `}

  ${media.min('tablet')`
    .title { font-size: 125px; }
  `}

  ${media.min('desktop')`
    .title {
      font-size: 165px;
      text-align: center;
    }
  `}

  &.loaded-enter-active .text {
    transition: transform 1s cubic-bezier(.215, .61, .355, 1);
    transform: translateY(0);
  }

  &.loaded-enter-active .duplicated-text,
  &.loaded-enter-done .duplicated-text { opacity: 1; }

  .duplicated-text {
    left: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;

    &:nth-child(1) {
      transform: translateY(-550%);
      transition-delay: 2.2s;
    }

    &:nth-child(2) {
      transform: translateY(-450%);
      transition-delay: 1.9s;
    }

    &:nth-child(3) {
      transform: translateY(-350%);
      transition-delay: 1.6s;
    }

    &:nth-child(4) {
      transform: translateY(-250%);
      transition-delay: 1.3s;
    }

    &:nth-child(5) {
      transform: translateY(-150%);
      transition-delay: 1s;
    }

    &:nth-child(7) {
      transform: translateY(50%);
      transition-delay: 1s;
    }

    &:nth-child(8) {
      transform: translateY(150%);
      transition-delay: 1.3s;
    }

    &:nth-child(9) {
      transform: translateY(250%);
      transition-delay: 1.6s;
    }

    &:nth-child(10) {
      transform: translateY(350%);
      transition-delay: 1.9s;
    }

    &:nth-child(11) {
      transform: translateY(450%);
      transition-delay: 2.2s;
    }
  }
`;

export default LoaderWrapper;
