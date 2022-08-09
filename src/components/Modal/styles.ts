import styled from 'styled-components';

export const Background = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'grid' : 'none')};

  position: fixed;
  inset: 0;
  place-items: center;
  z-index: 9;
  animation: fadeIn 380ms ease-in-out 1;
  background-color: #2f3845b8;
  backdrop-filter: blur(2px);

  @keyframes fadeIn {
    from {
      background-color: #2f384521;
    }
    to {
      background-color: #2f3845b8;
    }
  }
`;

export const Modal = styled.div`
  background: var(--absolute-white);
  max-width: 560px;
  margin-top: -100px;
  width: 420px;
  height: auto;
  border-radius: var(--radius-small);
  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacement-default) var(--spacement-large);
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 90%;
    height: 1px;
    background-color: var(--gray-light);
    margin-top: var(--spacement-large);
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`;

export const ModalContent = styled.div`
  padding: var(--spacement-large);
`;
