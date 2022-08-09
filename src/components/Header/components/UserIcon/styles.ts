import styled from 'styled-components';

export const Container = styled.div`
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;

  & h3 {
    color: var(--absolute-white);
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
  }
`;
