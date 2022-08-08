import styled, { css } from 'styled-components';

const ButtonSolidCss = css`
  &.solid {
    background: var(--primary);
    transition: background 0.2s ease-in-out;

    &:hover {
      background: var(--primary-dark);
    }

    &:active {
      background: var(--primary-light);
    }
  } 
`;

const ButtonGhostCss = css`
  &.ghost {
    transition: background 0.2s ease-in-out, filter 0.3s ease-in-out;

    &:hover {
      background: var(--gray-light);
    }

    &:active {
      filter: brightness(0.8);
    }
  } 
`;

const SmallButtonCss = css`
  &.small {
    padding: var(--spacement-small);
  }
`;

export const Container = styled.button<{ squared: boolean }>`
  border-radius: ${(props) => (props.squared ? 'var(--radius-small)' : '50%')};
  padding: calc(var(--spacement-small) * 2);
  display: grid;
  align-items: center;
  cursor: pointer;

  ${SmallButtonCss};

  ${ButtonSolidCss};
  ${ButtonGhostCss};

  &:disabled {
    background-color: var(--gray-light);
    cursor: auto;

    &:hover {
      background-color: var(--gray-light);
    }
  }
`;
