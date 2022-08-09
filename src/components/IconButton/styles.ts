import styled, { css } from 'styled-components';
import { IIconButtonProps } from '.';

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

const ButtonOutlineCss = css`
  &.outline {
    transition: background 0.2s ease-in-out, filter 0.3s ease-in-out;
    background: transparent;
    border: 1px solid var(--gray-dark);

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
    height: 32px;
    width: 32px;
    display: flex;
  }
`;

export const Container = styled.button<IIconButtonProps>`
  border-radius: ${(props) => (props.squared ? 'var(--radius-small)' : '50%')};
  padding: calc(var(--spacement-small) * 2);
  display: grid;
  align-items: center;
  cursor: pointer;

  ${SmallButtonCss};

  ${ButtonSolidCss};
  ${ButtonGhostCss};
  ${ButtonOutlineCss};

  &:disabled {
    background-color: var(--gray-light);
    cursor: auto;

    &:hover {
      background-color: var(--gray-light);
    }
  }
`;
