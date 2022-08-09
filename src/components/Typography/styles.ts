import React from 'react';
import styled, { css } from 'styled-components';

export interface ITypographyProps {
  as: React.ReactElement;
}

const H1Strong = css`
  &.h1-strong {
    font-weight: bold;
  }
`;

const H1Black = css`
  &.h1-black {
    font-weight: 900;
  }
`;

const H3Normal = css`
  &.h3-normal {
    font-weight: 500;
  }
`;

export const Container = styled.div.attrs((props: ITypographyProps) => ({
  as: props.as,
}))`
  font-family: 'Roboto', sans-serif;
  color: var(--gray-dark);

  ${H1Strong};
  ${H1Black};
  ${H3Normal};
`;
