import styled from 'styled-components';

export const Container = styled.section`
  padding: var(--spacement-large) 0;
  max-width: 580px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
  margin-top: var(--spacement-large);
`;

export const IdWrapper = styled.div`
  width: 100%;
  position: relative;

  & > button {
    position: absolute;
    right: 0;
    top: 27px;
    transform: translateX(40px);
  }
`;
