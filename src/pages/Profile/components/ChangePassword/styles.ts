import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
  align-items: flex-start;
  margin-top: var(--spacement-large);

  & > button {
    margin-top: var(--spacement-default);
  }
`;
