import styled from 'styled-components';

export const Container = styled.header`
  border-bottom: var(--gray-light) solid 1px;
  padding: var(--spacement-default);
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacement-large);
`;
