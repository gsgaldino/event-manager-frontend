import styled from 'styled-components';

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlexItem = styled.div`
  padding: var(--spacement-default) 0;

  &:last-child {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacement-default);
  }
`;
