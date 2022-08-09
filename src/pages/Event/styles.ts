import styled from 'styled-components';

export const Container = styled.div`
  padding-block: var(--spacement-large);
  display: flex;
  flex-direction: column;
  gap: var(--spacement-large);
  max-width: 900px;
  margin: 0 auto;
`;

export const BackButton = styled.div`
  margin-top: var(--spacement-large);
  display: flex;
  align-items: center;
  gap: var(--spacement-large);
`;
