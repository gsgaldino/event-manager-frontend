import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: transparent;

  position: relative;
  animation: ${rotate} 800ms infinite linear;

  &.secondary {
    &:after {
      background: var(--primary);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      content: '';
      margin: auto;
      position: absolute;
      inset: 0;
      transition-duration: 0.2s, 0.2s, 0.2s;
      transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
    }

    &:before {
      width: 50%;
      height: 50%;
      background: var(--absolute-white);
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }
  }

  &.primary {
    &:after {
      background: var(--absolute-white);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      content: '';
      margin: auto;
      position: absolute;
      inset: 0;
      transition-duration: 0.2s, 0.2s, 0.2s;
      transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
    }

    &:before {
      width: 50%;
      height: 50%;
      background: var(--primary);
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }
  }
`;
