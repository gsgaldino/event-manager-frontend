import styled from 'styled-components';

export const Participant = styled.div`
  border: 1px solid var(--gray-light);
  border-radius: var(--radius-medium);
  margin: var(--spacement-default) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacement-large);
  padding: var(--spacement-default);
`;

export const Avatar = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: var(--gray-light);
  text-transform: uppercase;
`;

export const FlexItem = styled.div`
  display: flex;
  gap: var(--spacement-large);
  align-items: center;
`;
