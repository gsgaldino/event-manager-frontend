import styled, { css } from 'styled-components';

const Spacement = css`
  padding-block: calc(var(--spacement-small) * 2);
  padding-inline: var(--spacement-x-large);
`;

const SolidButtonCss = css`
  &.solid {
    ${Spacement};

    &.primary {
      background: var(--primary);
      color: var(--absolute-white);
      transition: background 0.2s ease-in-out;

      &:hover {
        background: var(--primary-dark);
      }

      &:active {
        background: var(--primary-light);
      }
    }

    &.danger {
      background: var(--red);
      color: var(--absolute-white);
      transition: background 0.2s ease-in-out;

      &:hover {
        background: var(--red-dark);
      }

      &:active {
        background: var(--red-light);
      }
    }
  } 
`;

const LinkButtonCss = css`
  &.link {
    color: var(--gray-dark);
    font-weight: 500;
    text-decoration: none;
    background: transparent;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      color: var(--primary-light);
    }
  } 
`;

export const Container = styled.button`
  border-radius: var(--radius-small);
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 16px;
  display: flex;
  gap: var(--spacement-default);
  cursor: pointer;

  ${SolidButtonCss};
  ${LinkButtonCss};
`;
