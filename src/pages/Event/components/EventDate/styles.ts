import styled from 'styled-components';

export const EventDate = styled.div`
  min-height: 280px;
  border-radius: var(--radius-medium);
  position: relative;
  overflow: hidden;
  padding: var(--spacement-x-large);
  display: flex;
  justify-content: space-between;
`;

export const EventDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;

  & > h1 {
    font-size: 58px;
    font-weight: 300;
  }

  & > p {
    margin-top: var(--spacement-default);
  }
`;

export const CalendarIcon = styled.div`
  display: grid;
  place-items: center;
  background: var(--primary);
  width: 50%;
  z-index: -1;
  border-top-right-radius: var(--radius-medium);
  border-bottom-right-radius: var(--radius-medium);
  opacity: .2;
`;

export const Hour = styled.div`
  background: var(--gray-dark);
  margin: var(--spacement-default) 0;
  padding: 4px var(--spacement-default);
  border-radius: var(--radius-medium);

  & > p {
    color: var(--absolute-white);
  }
`;
